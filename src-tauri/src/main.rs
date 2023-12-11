// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use tauri::AppHandle;
use tauri::WindowBuilder;
use tauri::WindowUrl;
use tauri::Manager;
use tauri::App;



fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![])

    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

