const{ipcRenderer}=require("electron"),fs=require("fs"),path=require("path"),ipcSendSync=(e,...n)=>{const i=ipcRenderer.sendSync("developer.services",e,...n);if(i instanceof Error)throw i;return i},ipcInvoke=async(e,...n)=>{try{return await ipcRenderer.invoke("developer.services",e,...n)}catch(e){throw new Error(e.message.replace(/^.*?Error:/,"").trim())}};window.services={buildPluginUpxFile:(e,n)=>ipcInvoke("buildPluginUpxFile",e,n),getAccountToken:()=>ipcSendSync("getAccountToken"),getLocalAccount:()=>ipcSendSync("getLocalAccount"),isDev:()=>ipcSendSync("isDev"),runDevPlugin:(e,n)=>ipcSendSync("runDevPlugin",e,n),isRuningDevPlugin:e=>ipcSendSync("isRuningDevPlugin",e),stopDevPlugin:e=>ipcSendSync("stopDevPlugin",e),isDevPluginOutKill:e=>ipcSendSync("isDevPluginOutKill",e),toggleOutKillDevPlugin:(e,n)=>ipcSendSync("toggleOutKillDevPlugin",e,n),readDevPluginLogo:e=>{if(!fs.existsSync(e))throw new Error("plugin.json 文件不存在");let n;try{n=JSON.parse(fs.readFileSync(e,"utf8"))}catch(e){throw new Error("plugin.json 文件内容解析失败，"+e.message)}if("object"!=typeof n)throw new Error("plugin.json 文件内容错误");if(!n.logo)throw new Error("logo 未配置");if(!/\.(?:png|jpg|jpeg)$/i.test(n.logo))throw new Error("插件 logo 必须是 png 或 jpg 图片");const i=path.join(path.dirname(e),n.logo);if(!fs.existsSync(i))throw new Error('配置的 logo "'+i+'" 不存在');return i},getFileBlob:e=>{let n;try{n=fs.readFileSync(e)}catch(e){return null}return new window.Blob([Uint8Array.from(n).buffer])},getPathBasename:e=>path.basename(e),getPathDirname:e=>path.dirname(e),dialogSaveUpxFile:(e,n)=>{const i=path.basename(e).replace(/^\w+/,n),r=window.utools.getPath("downloads"),o=path.join(r,i),t=window.utools.showSaveDialog({defaultPath:o});if(t)try{fs.writeFileSync(t,fs.readFileSync(e,"binary"),{encoding:"binary"}),setTimeout((()=>{window.utools.shellShowItemInFolder(t)}),1e3)}catch(e){}}};