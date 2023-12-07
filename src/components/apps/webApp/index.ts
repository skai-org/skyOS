import { WebviewWindow } from "@tauri-apps/api/window";
import { invoke } from "@tauri-apps/api";

 function openSpotifyWindow(url: string,title: string ){

const webview = new WebviewWindow(title, {
  url: url,
  title: title
});

webview.once("tauri://created", () => {
  invoke("greet", { name: "World" }).then((response) => console.log(response));
  console.log("Webview window created successfully");
});

webview.once("tauri://error", (e) => {
  console.error("Error creating webview window:", e);
});

console.log("You can do this");
}

export default openSpotifyWindow;
