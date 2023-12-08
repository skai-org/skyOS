// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use tauri::AppHandle;
use tauri::WindowBuilder;
use tauri::WindowUrl;
use tauri::App;

fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![open_window])

    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}


#[tauri::command]
async fn open_window(app: AppHandle, title: String, url: String) -> Result<(), String> {
    let result = WindowBuilder::new(&app, &title, WindowUrl::App(url.into()))
        .fullscreen(false)
        .resizable(true)
        .title(&format!("{} | skaiOS", title))
        .center()
        .decorations(false)
        .build();

    match result {
        Ok(_) => {
            println!("Window '{}' Created Successfully!", title);
            Ok(())
        }
        Err(err) => {
            println!("Failed to Create Window '{}': {}", title, err);
            Err(format!("Failed to create Window '{}'", title))
        }
    }
}

