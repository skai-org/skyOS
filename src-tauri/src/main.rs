// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use tauri::AppHandle;
use tauri::WindowBuilder;
use tauri::WindowUrl;
use tauri::App;

fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![greet])
  .invoke_handler(tauri::generate_handler![open_settings_window])

    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
  println!("Message from Rust: {}", name);
  return format!("Hello, {}!",name);
}

#[tauri::command]
async fn open_window(app: AppHandle, title: String, url: String) -> Result<(), String> {
    let result = WindowBuilder::new(&app, &title, WindowUrl::App(url.into()))
        .fullscreen(false)
        .resizable(true)
        .title(&format!("{} | skaiOS", title))
        .center()
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

#[tauri::command]
async fn open_settings_window(app: AppHandle) -> Result<(), String> {
  open_window(app, String::from("Settings"), String::from("src/components/apps/settings/settings.html")).await
}

#[tauri::command]
async fn open_chat_window(app: AppHandle) -> Result<(), String> {
  open_window(app, String::from("SkyChat"), String::from("src/components/apps/chat/chat.html")).await
}

#[tauri::command]
async fn open_music_window(app: AppHandle) -> Result<(), String> {
  open_window(app, String::from("SkyMusic"), String::from("src/components/apps/music/music.html")).await
}

#[tauri::command]
async fn open_notes_window(app: AppHandle) -> Result<(), String> {
  open_window(app, String::from("Chat"), String::from("src/components/apps/notes/notes.html")).await
}

#[tauri::command]
async fn open_planner_window(app: AppHandle) -> Result<(), String> {
  open_window(app, String::from("Planner"), String::from("src/components/apps/planner/planner.html")).await
}

#[tauri::command]
async fn open_tasks_window(app: AppHandle) -> Result<(), String> {
  open_window(app, String::from("Tasks"), String::from("src/components/apps/tasks/tasks.html")).await
}

#[tauri::command]
async fn open_timer_window(app: AppHandle) -> Result<(), String> {
  open_window(app, String::from("Timer"), String::from("src/components/apps/timer/timer.html")).await
}

