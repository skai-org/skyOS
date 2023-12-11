// src/window_manager.rs


use tauri::{WindowBuilder,Result, Manager};
use tauri::WindowUrl;
use tauri::AppHandle;

#[tauri::command]
fn toggle_window_visibility(label: &String) -> Result<()> {
    // Assuming Manager::get_window returns a Result<Option<Window>, tauri::Error>
    if let Some(window) = app.get_window(label) {
        // Assuming window.is_visible() returns a Result<bool, tauri::Error>
        match window.is_visible() {
            Ok(current_visibility) => {
                if current_visibility {
                    window.hide();
                } else {
                    window.show();
                }
            }
            Err(err) => {
                // Handle the visibility error
                // For now, just printing the error
                eprintln!("Error checking visibility: {}", err);
            }
        }
    } else {
        // Handle the case where Manager::get_window returns an Err or None
        // For now, just printing a message
        eprintln!("Unable to get the window with label '{}'", label);
    }

    Ok(()) // Return Ok(()) to indicate success
}


#[tauri::command]
async fn create_window(app: AppHandle, title: String, url: String) -> Result<()> {
    let window = WindowBuilder::new(&app, &title, WindowUrl::App(url.into()))
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