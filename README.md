# 昕声 · 私人日记

在线体验：https://kaeai226-gif.github.io/xinsheng/

清新手账风格的静态 PWA 网页体验版，支持手动日记、心情标签、照片、主动录音及文字 / JSON 备份导出。

## iPhone 使用

用 Safari 打开在线网址，点击「分享 → 添加到主屏幕」即可便捷访问。录音需要允许麦克风权限，锁屏或进入后台可能停止。

## 部署

已部署至本仓库 GitHub Pages，发布源为 main 分支 / (root)，启用 HTTPS。修改根目录文件并提交后会自动重新发布，无需构建命令。

- index.html：页面与交互
- manifest.webmanifest：PWA 配置
- icon.svg：应用图标
- sw.js：离线资源缓存
- .nojekyll：静态文件发布

## 隐私与限制

数据只存在当前浏览器 localStorage，不自动同步；清理网站数据可能导致丢失，请定期导出备份。照片与音频容量有限，适合短录音体验。请勿把私人日记、录音、照片或 API 密钥提交到公开仓库。

此版本尚未接入 AI 转写、AI 日记生成、Face ID、Apple Watch、iCloud、后台监听，也未实现录音 30 天自动清理及独立音频文件导出。
