# blueprint 3D 制图技法调研

> 调研对象：https://haskaomni.github.io/blueprint/ · https://github.com/haskaomni/blueprint
> 分支：`research/blueprint-3d-drawing`（2026-09-29）
> 目的：保留本仓「纸面 + HUD 青」主题（DESIGN.md 真相源②），只借鉴其**精细绘制能力**。
> 结论已用原型验证：`src/research/BlueprintLab.tsx`（隔离路由 `/lab/blueprint`，纯调研产物）。

---

## 0. TL;DR

blueprint 是一个 **WebGL 工程蓝图车辆查看器**：Three.js 线框车辆 + CSS 制图纸背景合成。
它"精细"的来源**不是**更多多边形，而是四件事：

1. **三层部件堆叠**（表面材质 + 反向外壳描边 + 阈值边线）——每个部件渲染 3 遍，
   得到"有体量的墨线图"而不是"发光的线团"。
2. **屏幕空间交叉排线**（shader 里按 `gl_FragCoord` 画对角线，密度跟随明暗）——
   暗部自动长出排线，是老图纸最标志性的质感。
3. **固定 half-lambert 主光 + 4 档量化**——拒绝 PBR，明暗是"画上去的"层次，不是物理反射。
4. **正交投影 + 自动归一化 + 数据化部件/爆炸/标注**——取景、爆炸避让、标签锚点全自动。

这四点全部可以**原样移植到本仓的纸面配色**，且不引入任何新依赖（three 已是本仓依赖）。

---

## 1. 技术栈与结构

| 项 | blueprint | 本仓 english-explainer |
|---|---|---|
| 框架 | 原生 JS + Vite（无 React） | React 19 + R3F + drei |
| 渲染 | Three.js 0.185，**每部件自建 ShaderMaterial** | Three.js 0.185，`meshBasicMaterial` + `<Edges>` |
| 相机 | **OrthographicCamera** + OrbitControls | PerspectiveCamera(fov 50) + `<Bounds fit>` |
| 模型 | 外部 GLB（8MB / 2MB，meshopt 压缩） | **程序化生成**（无外部模型） |
| 部件 | GLB 分组名 / AABB slab 切割 | 手写 `<SketchMesh name={partId}>` |
| 背景 | CSS 双尺度网格 + 噪点 + 图框，Canvas `alpha:true` 合成 | CSS 网格（`canvas-grid`），Canvas 实底纸色 |

关键文件（blueprint 仓内路径）：
- `src/shaders.js`（135 行）——**全部绘制魔法在这里**
- `src/viewer.js`（863 行）——归一化 / 三层堆叠 / 爆炸 / 视图补间 / 标签锚点
- `src/style.css`（251 行）——图纸背景、图框刻度、面板、标注卡
- `src/config.js`（185 行）——数据驱动车辆定义（部件区域 / 武器 / 朝向）

---

## 2. 绘制管线（数据 → 画面）

```
GLB ──► 归一化(最长边→10.8，落地 y=0，X/Z 居中)
      ──► 部件划分(parts[].match 祖先路径子串 / parts[].region AABB 板切)
      ──► 三层堆叠 _wrapGeometry(geo)
            ├─ Mesh( surface )   ← 自定义 ShaderMaterial（排线/量化/emphasis）
            ├─ Mesh( hull )      ← BackSide，沿法线外扩，纯墨色（描边）
            └─ LineSegments(EdgesGeometry(geo, 27°) )  ← 阈值边线
      ──► 每帧：damp(状态) → 爆炸位移 / uEmphasis 混合 / 相机补间 → render
      ──► 标签：part.rawCenter.localToWorld().project(camera) → DOM 锚点
```

三个细节值得点名：

- **hull 宽度按世界单位补偿**：`_normalize()` 里 `uWidth = HULL_WIDTH / (modelScale * node.scale)`。
  因为描边在几何局部空间外扩，不补偿就会"大模型细边、小模型粗边"。
- **切割而非质心归属**：单 mesh 模型用 Sutherland–Hodgman **真裁三角形**（`splitGeometryByRanges`），
  否则横跨几十单位的大三角会撕裂（注释里明说质心归属不够用）。切割前先 `mergeVertices` 焊接，
  避免 EdgesGeometry 把每条 strip 边界当成"开放边"。
- **爆炸避让是 AABB 迭代**（`_computeExplodeOffsets`）：按离整体中心的距离排序，
  逐步外推直到与已放置盒不相交，并夹在 `maxD` 内——所以爆炸后永不重叠、不飞出视锥。

---

## 3. 让它"精细"的核心技法

### 3.1 表面：屏幕空间交叉排线 + 量化明暗（`shaders.js` makeSurfaceMaterial）

```glsl
float d = dot(n, uLight) * 0.5 + 0.5;          // half-lambert（暗面不死黑）
d = floor(d * 4.0 + 0.5) / 4.0 * 0.75 + d * 0.25;  // 量化 4 档 + 保留 25% 连续
vec3 col = mix(uShade, uFill, d);
float dark = 1.0 - d;
vec2 fc = gl_FragCoord.xy / uPx;               // 屏幕空间！不随模型转动
float d1 = abs(fract((fc.x + fc.y) / period) - 0.5);
float d2 = abs(fract((fc.x - fc.y) / period) - 0.5);
if (dark > 0.28) hatch += 1.0 - smoothstep(lw, lw + 0.07, d1);   // 一级排线
if (dark > 0.52) hatch += 1.0 - smoothstep(lw, lw + 0.07, d2);   // 交叉二级排线
col = mix(col, uShade * 0.5, clamp(hatch, 0.0, 1.0) * 0.5);
```

要点：**排线画在屏幕空间**，所以线宽恒定、不随缩放变粗（像钢笔），且两级密度按明暗自动加码。

### 3.2 描边：反向外壳（`makeHullMaterial`）

`side: BackSide` + `position + normal * uWidth`。比 `EdgesGeometry` 更适合曲面——
它给出的是**连续的剪影边**，而 EdgesGeometry 只给硬边。两者叠加 = 轮廓 + 结构线。

### 3.3 高亮：单一 `uEmphasis` 通道

hover/选中只改一个 0→1 的 uniform（`mix(col, uAccent, uEmphasis*0.55)`），
边线色同步 `INK.lerp(ACCENT, emph*0.85)`。语义极简，和本仓 `usePartHighlight` 的 lerp 思路同源。

### 3.4 纸面分层：CSS 背景 + 透明 Canvas 合成

`#blueprint-bg`（双尺度网格 + 中心径向光晕）→ `#blueprint-noise`（SVG fractalNoise，opacity .05）
→ `#viewport`（`alpha:true`，只画模型）→ `#frame`（图框 + 四角 tick + 边缘刻度尺，`repeating-linear-gradient`）。
**网格纸是 CSS 画的，不占 WebGL**——本仓 `canvas-grid` 已是同思路，只是 canvas 目前是实底。

### 3.5 取景与取景器

正交相机 + 6 个命名视角（ISO/F-QTR/R-QTR/SIDE/FRONT/PLAN），
球坐标补间 920ms `easeInOutCubic`（`prefers-reduced-motion` → 140ms），
拖动即切 `ORBIT` 状态。正交让"远近一样大"，正是工程图的观看方式。

### 3.6 精细度的另一半：细节密度

blueprint 的 GLB 自带螺栓/面板缝。**本仓是程序化建模，没有这些细节**——
这正是我们看起来"空"的主因。可补的低成本细节原语：分缝环线、纵向分缝、
法兰螺栓圈、面板格线、剖面线（都能复用现有 `DraftLine` / `Rod`）。

---

## 4. 本仓现状对照（差距定位）

| 维度 | 本仓现状 | blueprint | 差距性质 |
|---|---|---|---|
| 面 | `meshBasicMaterial` opacity .10–.16，平面色 | 自定义 shader，明暗层次 + 排线 | **质感缺失（最大）** |
| 轮廓 | drei `<Edges threshold=10>` | EdgesGeometry(27°) + 反向外壳描边 | 缺剪影边 |
| 相机 | 透视 fov50 | **正交** | 缺"工程图"观看方式 |
| 细节 | 形体基本体，少分缝 | GLB 自带 greeble | 内容密度不足 |
| 背景 | CSS 网格，Canvas 实底 | CSS 网格 + 透明 Canvas 合成 | 已接近，可增强 |
| 交互 | ✅ 词↔物双向点亮、flow 播放 | ✅ hover/select/爆炸/扫描 | **本仓更强，保留** |

---

## 5. 移植验证（原型实测）

`src/research/BlueprintLab.tsx`，路由 `/lab/blueprint`，**只替换材质与相机，配色仍是纸面+墨+HUD 青**：

- 验证 A（透视）：纸白面按明暗分档，暗部自动长出淡墨交叉排线 → 体量感立刻出现；
  反向外壳描边替代单纯 Edges，轮廓更"实"。
- 验证 B（正交）：切正交后横平竖直、排线均匀，**最像工程图纸**；分缝环线 + 螺栓圈
  让同一形体的"精细度"肉眼可见地上升。

原型已排除两个坑：
1. `#include <colorspace_fragment>` 必须**独占一行**（不能与 `gl_FragColor` 同行，否则整段 shader 编译失败、部件全黑）。
2. 正交 Canvas 的父容器必须有确定高度（否则塌成 150px）。

---

## 6. 改进建议（按优先级）

### P0 — 质感的根，建议先做

1. **引入 `paperSurface` ShaderMaterial**（落点 `src/geometry/primitives.tsx`）
   把 3.1 的 shader 改成纸面配色：亮 `#FBF8F1` / 中 `#EAE3D3` / 暗 `#D3CAB4`，排线墨 `#8A8070`。
   `uEmphasis` 直接接现有 accent（`thing.color`），**与 `usePartHighlight` 的状态机无缝对接**。
   `SketchMesh` 换掉 `meshBasicMaterial` 即可，几何文件零改动。
2. **保留 `FINISH_POOL` 语义**：finish 角色改为驱动 shader 的纸色明度档（hull 最暗 / cold 中 / titanium 最亮 /
   warning 仍走红），而不是现在的纯 alpha 差。这样"外壳/结构/钛白"的层次才真正立起来。

### P1 — 观看方式与轮廓

3. **加正交视角开关**（落点 `ThingScene.tsx`）：默认透视（3D 辅证的亲和力），
   提供 ISO/SIDE/FRONT 正交预设；或至少在 flow 播放态切正交，让部件关系更"图纸"。
4. **补反向外壳描边**（`SketchMesh` 内加一层 BackSide mesh）：只对"外壳类"finish 开启，
   结构件仍用 Edges 纵线（DESIGN.md §1.5 的双层表达正是这个分工）。
   注意按 AGENTS.md 已知坑：GlooLine 不参与高亮，而外壳描边是 mesh，可参与。

### P2 — 细节密度（本仓最缺，但工作量最大）

5. **细节原语库**（落点 `primitives.tsx`）：`SeamRing`（分缝环线）/ `BoltCircle`（法兰螺栓圈）/
   `PanelLines`（面板格线）/ `SectionHatch`（剖面线）。在现有 75 个几何文件里**按需补细节**，
   优先补"文章里讲到的部件"——细节服务词-物关联，不为好看而堆。
6. **暗部排线强度按 finish 分档**：warning 件排线更密（视觉权重高），titanium 最疏。

### 可选 — 背景合成

7. Canvas 改 `alpha:true` + CSS 画纸面网格，让文章列与 3D 视口共用同一张纸——
   目前是两块纸色，接缝在分栏拖动时可见。

---

## 7. 不建议照搬的部分

- **爆炸视图 / 武器特效 / 车辆索引**：与本仓"词找到物"的学习语义无关，不加。
- **GLB 外部模型**：本仓程序化建模是特性（可 name=partId 直接挂词），不要换成 GLB。
- **深蓝配色**：主题契约是纸面+墨+HUD 青，blueprint 的深蓝只借"分层思路"不借颜色。
- **每帧重建材质**：blueprint 在 `_wrapGeometry` 里 new 材质，切换车辆才释放。本仓是长驻组件，
  材质必须 memo/复用（原型已验证）。

---

## 8. 落地结果（2026-09-29）

P0 + P1 已实现并验证（`nuclear-reactor` + `clock` 对照截图）：

- **P0 已做**：新增 `src/geometry/paperSurface.ts`（纸面 shader + 反向外壳描边），
  `primitives.tsx` 的 `SketchMesh` 换成「纸面面材质 + 外壳描边 + Edges」三层，
  `usePartHighlight` 改为驱动 `uEmphasis`/`uDim`（面）+ 线色/线宽（Edges）；
  `FINISH_POOL` 保留为 Edges 常态色，面材质走 `PAPER_TONES` 明度档。
- **P1 已做**：`ThingScene.tsx` 加 `VIEW: PERSPECTIVE / ORTHO` 切换（右下角），
  正交 = 工程图观看方式；外壳/钛白件才加反向外壳描边。
- **验证**：`tsc --noEmit` / `npm run build` / `validate-data` / `check-simple-words` 全绿；
  词→物高亮实测生效（`maxE≈0.95`，线变 accent 加粗）。原型路由已移除。

**实测结论 / 待办**：

- **面不透明（alpha=1）是正解**：半透明会让大体积外壳（如 reactor 穹顶）与后方部件
  叠加发灰糊掉。改不透明后 `clock` 的盘面/齿轮前后遮挡分明，像真正的等轴测图纸。
- **`nuclear-reactor` 穹顶待改数据**：它的 `building`（穹顶）本是半透明外壳，
  该让内部 `core` 透出（DESIGN §1.5 双层表达）。现在被实心穹顶挡住——
  需给穹顶加「透明外壳」角色（数据层加 `finish: 'shell'` 或几何层特判），
  或把穹顶几何改成环带/剖切。**这是数据侧 follow-up，不是材质问题**。
- 反向外壳描边的宽度（0.022）与排线 period（6px）是当前调参，可在更多 thing 上微调。
- 排线 period 以 CSS 像素为单位（`uPx` = dpr），retina 下需确认线宽观感（已按 dpr 归一）。

## 9. 下一步（剩余）

- 全量校对：75 个 thing 截图过一遍，重点看「面遮挡关系」是否符合语义（外壳透/实心）。
- 给需要双层表达的 thing（reactor 穹顶 / 卫星线框本体 / 空间站舱体）加「透明外壳」数据角色。
- P2 细节原语：`SeamRing` / `BoltCircle` / `PanelLines`，按「文章讲到的部件」优先补。
