const{clipboard,shell,ipcRenderer}=require("electron"),vm=require("vm"),regexCmdTestVMScript=new vm.Script("regexCmd.regex.test(regexCmd.payload)");window.platform={isMacOs:"darwin"===process.platform,isLinux:"linux"===process.platform,isWindow:"win32"===process.platform},window.services={onWebcontensBlur:()=>{ipcRenderer.send("main.services","onWebcontensBlur")},getPluginContainer:()=>ipcRenderer.sendSync("main.services","getPluginContainer"),setExpendHeight:e=>ipcRenderer.sendSync("main.services","setExpendHeight",e),enterPlugin:(e,n,i)=>ipcRenderer.sendSync("main.services","enterPlugin",e,n,i),getNativeWorkWindowInfo:()=>ipcRenderer.sendSync("main.services","getNativeWorkWindowInfo")||null,recoverPlugin:()=>ipcRenderer.sendSync("main.services","recoverPlugin"),detachPlugin:()=>ipcRenderer.sendSync("main.services","detachPlugin"),hideMainWindow:()=>ipcRenderer.sendSync("main.services","hideMainWindow"),setPosition:(e,n)=>{ipcRenderer.send("main.services","setPosition",e,n)},sendSubInputChangeEvent:e=>ipcRenderer.sendSync("main.services","sendSubInputChangeEvent",e),sendPluginSomeKeyDownEvent:(e,n,i,r,s)=>{const t=[];return n&&t.push("control"),i&&t.push("shift"),r&&t.push("alt"),s&&t.push("meta"),ipcRenderer.sendSync("main.services","sendPluginSomeKeyDownEvent",e,t)},isFFFFFFFFRuning:()=>ipcRenderer.sendSync("main.services","isFFFFFFFFRuning"),getOriginImageBase64:e=>ipcRenderer.sendSync("main.services","getOriginImageBase64",e),appUpdate:()=>{ipcRenderer.send("main.services","appUpdate")},showPluginMenu:()=>{ipcRenderer.send("main.services","showPluginMenu")},getPasteCmd:()=>{const e=ipcRenderer.sendSync("main.services","getCopyFiles");if(e)return{type:"files",data:e};const n=clipboard.availableFormats();if(0===n.length)return{type:"text",data:""};if("text/plain"===n[0]){let e=clipboard.readText();return e&&!/\n/.test(e.trim())&&(e=e.trim()),{type:"text",data:e}}if(n[n.length-1].startsWith("image/")){const e=ipcRenderer.sendSync("main.services","getClipboardImage");if(e)return{type:"img",data:e}}let i=clipboard.readText();return i&&!/\n/.test(i.trim())&&(i=i.trim()),{type:"text",data:i}},nativeOpen:(e,n,i)=>{ipcRenderer.send("main.services","nativeOpen",e,n,i)},nativeMatchCall:(e,n,i,r)=>{ipcRenderer.send("main.services","nativeMatchCall",e,n,i,r)},getNativeIconUrl:e=>ipcRenderer.sendSync("main.services","getNativeIconUrl",e),regexCmdTest:e=>{global.regexCmd=e;try{return regexCmdTestVMScript.runInThisContext({timeout:15})}catch(e){return!1}},isLegalCmdRegexTest:(e,n)=>{global.regexCmd={regex:e,payload:n};try{return!regexCmdTestVMScript.runInThisContext({timeout:3e3})}catch(e){return!1}},shellOpenExternal:e=>{shell.openExternal(e)},getStringSize:e=>Buffer.byteLength(e),imageBuffer2DataUrl:e=>"data:image/png;base64,"+Buffer.from(e).toString("base64"),log:e=>{ipcRenderer.send("main.services","log",e)},voice:{getPanelMenusDocs:()=>ipcRenderer.invoke("voice.services","getPanelMenusDocs"),joinPanelMenusFolder:(e,n)=>ipcRenderer.invoke("voice.services","joinPanelMenusFolder",e,n),removePanelMenus:e=>ipcRenderer.invoke("voice.services","removePanelMenus",e),outPanelMenusFolder:e=>ipcRenderer.invoke("voice.services","outPanelMenusFolder",e),sortPanelMenus:(e,n)=>ipcRenderer.invoke("voice.services","sortPanelMenus",e,n),updatePanelMenusFolderLabel:(e,n)=>ipcRenderer.sendSync("voice.services","updatePanelMenusFolderLabel",e,n),getXFAuthStr:e=>ipcRenderer.sendSync("voice.services","getXFAuthStr",e),setWindowBounds:(e,n)=>ipcRenderer.sendSync("voice.services","setWindowBounds",e,n),triggerHide:e=>ipcRenderer.sendSync("voice.services","triggerHide",e),isSimulateCopyForClipboardUpdate:()=>ipcRenderer.sendSync("voice.services","isSimulateCopyForClipboardUpdate"),enterPlugin:(e,n)=>{ipcRenderer.send("voice.services","enterPlugin",e,n)},voiceTextInput:e=>{ipcRenderer.send("voice.services","voiceTextInput",e)},getCNPinyin:e=>ipcRenderer.sendSync("voice.services","getCNPinyin",e),showMainWindowToInput:()=>{ipcRenderer.send("voice.services","showMainWindowToInput")},translate:e=>ipcRenderer.invoke("voice.services","translate",e),registerMouseMoveEvent:e=>{ipcRenderer.on("mousemove",((n,i,r,s)=>{e(i,r,s)}))},registerMouseOutEvent:e=>{ipcRenderer.on("mouseout",(()=>{e()}))},copyText:e=>{clipboard.writeText(e)}}},window.addEventListener("online",(()=>{ipcRenderer.send("main.services","onlineTrigger")}));