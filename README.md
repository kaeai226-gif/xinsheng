# 昕声 · 私人日记

在线体验：https://kaeai226-gif.github.io/xinsheng/

清新手账风格的 PWA，支持日记、心情、照片和免费本机录音转写。

## 使用

在 iPhone Safari 打开网站，分享 → 添加到主屏幕。进入「写日记」，先下载转写模型，允许麦克风，开始录音。停止后会保存原录音并自动转写到日记；文字可手动修改。支持普通话、英语和自动识别。初次使用需联网下载模型与引擎，后续缓存可能被系统清理。建议每段 10–60 秒，最长 3 分钟；处理速度与准确率取决于设备及音质。

录音保存在本机 IndexedDB，日记保存在 localStorage，兼容原有日记。支持单段录音导出、永久保留、完整 JSON 备份与恢复。默认原录音保留 30 天，每次打开应用检查到期清理，日记文字不随原录音删除。旧版录音不自动清理。

## 隐私和限制

转写使用 Transformers.js 3.7.2 与 onnx-community/whisper-tiny 多语言模型，在浏览器 Worker 内通过 WASM 运行，不向模型服务上传录音。模型和引擎文件从 Hugging Face / jsDelivr 下载，需要这些网络可达。识别可能出错，请核对姓名和数字。录音与转写需要保持页面前台，不支持锁屏持续监听。

尚未提供 AI 日记润色、Face ID、Apple Watch 或 iCloud 同步。清理网站数据会丢失本地记录，请定期导出。勿将私人日记、录音、照片或密钥提交到公开仓库。

## 部署

GitHub Pages 发布源：main / (root)，HTTPS，无需构建。修改文件提交后自动发布。

- index.html：原有页面与日记交互
- voice.js：录音、存储、转写交互及备份恢复
- transcribe-worker.js：本地 Whisper 转写
- manifest.webmanifest、icon.svg：PWA 配置与图标
- sw.js：静态资源缓存；更新资源时同步升级缓存版本

Whisper 模型及依赖的许可证见其各自项目。无付费 API，无密钥。
