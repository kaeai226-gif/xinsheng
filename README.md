# 昕声 · 私人日记

在线地址：https://kaeai226-gif.github.io/xinsheng/

这是静态 PWA 项目，并非已经部署的网址或原生 iOS App。

## 用 iPhone 发布（无需 Mac）
1. 在 GitHub 网站创建一个新的公开仓库，例如 `xinsheng-web`。
2. 上传本文件夹的 `index.html`、`manifest.webmanifest`、`icon.svg`、`sw.js` 到仓库根目录（不要只上传 ZIP）。
3. 仓库 Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save。
4. 等待 GitHub Pages 发布。网站通常为 `https://你的用户名.github.io/xinsheng-web/`，以 GitHub 实际显示的链接为准。
5. 在 iPhone Safari 打开已发布网址，分享 → 添加到主屏幕。

## 隐私与限制
- 数据只存在当前浏览器本地存储，未上传到服务器；GitHub Pages 托管的是公开前端源码，请勿把私人日记上传到 GitHub 仓库。
- 录音须主动开启并获得相关人员同意；切到后台可能停止。
- 音频以 Data URL 存入浏览器 localStorage，容量有限，适合短录音测试；长期录音需要改用 IndexedDB。
- 不支持 AI 转写、AI 日记、Face ID、Apple Watch、iCloud、后台监听。定期导出 JSON 备份。
