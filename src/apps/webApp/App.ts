import { WebviewWindow } from "@tauri-apps/api/window";

 async function openAppWindow(exec: string,title: string ) {

const webview = new WebviewWindow(title, {
  url: exec,
  title: title,
  width: 900, // Set your desired width
  height: 700,
  decorations:false
},);
 



webview.once("tauri://created", () => {
  console.log("Webview window created successfully");
});

webview.once("tauri://error", (e) => {
  console.error("Error creating webview window:", e);
});




}




export default openAppWindow;