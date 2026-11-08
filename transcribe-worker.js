let pipe;
let busy = false;
self.onmessage = async ({data}) => {
  if (busy) return;
  busy = true;
  try {
    self.postMessage({type:'status', text:'正在加载本地转写引擎…'});
    const {pipeline, env} = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.7.2/dist/transformers.web.js');
    env.allowLocalModels = false;
    env.backends.onnx.wasm.numThreads = 1;
    env.backends.onnx.wasm.proxy = false;
    if (!pipe) pipe = await pipeline('automatic-speech-recognition','onnx-community/whisper-tiny',{
      device:'wasm', dtype:'q8', progress_callback:p=>{
        if(p.status==='progress') self.postMessage({type:'status',text:`下载模型 ${p.file || ''}：${Math.round(p.progress || 0)}%`});
      }
    });
    self.postMessage({type:'status',text:'正在本机转写，请保持页面打开…'});
    if(data.type==='prepare') self.postMessage({type:'ready'});
    else {
      const options = {task:'transcribe',chunk_length_s:20,stride_length_s:3};
      if(data.language !== 'auto') options.language = data.language || 'chinese';
      const result = await pipe(data.audio,options);
      self.postMessage({type:'result',text:result.text || ''});
    }
  } catch(e) { pipe=null; self.postMessage({type:'error',text:e.message || String(e)}); }
  finally { busy=false; }
};
