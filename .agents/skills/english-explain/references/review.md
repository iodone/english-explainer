# Review —— 点过、看过，才算完成

## 自动走查

```bash
node .agents/skills/english-explain/scripts/walkthrough.mjs path/to/lesson.html \
  --out english-explain-out/review
```

`scripts/browser.mjs` 自带 CDP 传输：Node 内置 fetch/WebSocket，
临时 headless Chrome，不安装 Playwright。默认示例的断言覆盖：

1. `file://` 在浏览器离线状态下可开，canvas 与首帧就绪，无外部资源；
2. HUD 部件数等于 lesson.parts，文中关联短语存在；
3. 真实点文中短语后，模型、索引、当前句与解释使用同一 partId；
4. 真实鼠标事件打到 3D 部件，raycast 反查 article 句；
5. 词典卡来自内联 entry；
6. 自动导览按 tour/flow 前进，访客接管，安静后恢复；
7. 控制台异常与网络失败均为零。

新 lesson 的示例特定断言（如 `hot-bottom`）要换成它自己的可见部件。不要用 DOM 假点击代替
3D 点击；那只能证明 JS setter 能跑，证明不了学习者能点中。截图输出包括 overview、
word-to-part、part-to-word、auto-tour。

## 静帧必须逐张看

- 中央物件一眼可辨、占模型区约 55–70%，不是角落小模型；没有部件出画布。
- 首屏已出现文章，底部固定导览条不盖最后一段；左右 HUD 不滚出不可达内容。
- 激活词、激活部件、右侧解释三者说同一件事；simple name / real name 不串件。
- 标注不互相叠字、不压关键连接处；没有指向空白或浮在半空的标签。
- 纸面 `#F4F1EA`、墨色 `#2C2A25`、部件词青 `#0E7C7B`；只有当前语义用 accent。
- 每张图的学习数字都能追到一个数据字段或计数；没有随机装饰读数。

修改后重新 build，再跑 walkthrough；旧 HTML 的截图不能证明新源文件正确。

## 常见失败

| 现象 | 先查 |
|---|---|
| 双击 HTML 空白 | 走查的 page error；入口是否默认导出 lesson、是否导出 shapes |
| file:// 有模块 CORS | 输出是否经 build.mjs；不要手写 `<script type=module src=...>` |
| 点词亮、点模型不亮 | shape 的 partId；测试坐标是否被半透明壳/标注挡住，换可见点但不要用假点击 |
| 图→词跳错句 | sentenceRef 是否段内索引；应跨段连续计数 |
| HUD 与文章不一致 | 是否在手写数字；应由 lesson.parts/article/flow 计算 |
| 千词闸门只在站点过 | 独立页还要 `--entry`，它才覆盖 partExplanations |
| 截图不错但文件没更新 | 构建输出与走查输入是否同一个 HTML |
