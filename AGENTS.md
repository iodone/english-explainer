# AGENTS.md — english-explainer

Thing Explainer 英语学习网站。科幻 HUD 仪表盘风格，每个 thing 一个沉浸式页面，
中央 3D 线框模型 + 两侧数据面板 + 底部 simple words 解释。

## 命令

所有命令在项目根目录（本目录）执行：

```bash
npm run dev      # 开发服务器 http://localhost:5173
npm run build    # 生产构建（tsc -b && vite build）
npx tsc --noEmit # 仅类型检查
```

## 结构

- `src/data/things.ts` — 数据注册表，单一事实来源。加新 thing 就是在这里加记录
  （需要新 3D 造型时再在 ThingScene.tsx 加几何体组件，按 thing.id 分发）
- `src/components/ThingScene.tsx` — R3F 3D 线框 + 标注标签
- `src/components/LeftPanel.tsx` / `RightPanel.tsx` — HUD 面板（Canvas 2D 画波形/雷达，无图表库依赖）
- `src/styles/design-tokens.css` — Tailwind 4 @theme 设计令牌 + HUD 特效类
  （canvas-grid / scanline / hud-panel / status-blink 等）

## 设计约束

- 配色：羊皮纸底 `#F4F1EA` + 墨色 `#2C2A25` + HUD 青 `#3ECFCF`，
  每 thing 有自己的 accent color（`things.ts` 的 `color` 字段）
- 字体：Newsreader（标题衬线）/ Inter（正文）/ JetBrains Mono（数据标签）——在 index.html 引入
- 3D 模型全部程序化生成（Three.js 几何体 wireframe），不依赖外部模型文件
- 内容遵循 Munroe 风格：simple name + real name 对照，解释只用 ~1000 常用词

## 已知坑

- Tailwind 4 用 `@theme` 定义令牌，class 名是 `text-hud-cyan` / `bg-canvas` / `text-ink` 等
  （`--color-hud-cyan` → `text-hud-cyan`）
- drei `Text` 组件不要传 font prop 加载远程 woff2（会 404），默认字体够用
- hex 颜色写错位数（如 `#3EFCFCF`）不会报错但渲染黑色，注意 6 位
