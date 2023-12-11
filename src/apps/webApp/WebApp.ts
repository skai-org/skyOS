import { WebviewWindow } from "@tauri-apps/api/window";

 function openWebWindow(url: string,title: string ){

const webview = new WebviewWindow(title, {
  url: url,
  title: title,
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1.2 Safari/605.1.1",
  width: 900, // Set your desired width
  height: 700,
},);
 
// WebviewWindow.getByLabel('Chat')?.close()




webview.once("tauri://created", () => {
  console.log("Webview window created successfully");
});

webview.once("tauri://error", (e) => {
  console.error("Error creating webview window:", e);
});




}




export default openWebWindow;

