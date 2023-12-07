// import ChatApp from "@/components/apps/chat";
// import RootWidget from "./RootWindow/rootWidget";
// import { MusicApp } from "@/components/apps/music";
// import { NotesApp } from "../apps/notes";
// import { PlannerApp } from "../apps/planner";
// import { TasksApp } from "../apps/tasks";
import { invoke } from "@tauri-apps/api";
import openSpotifyWindow from "../apps/webApp";



export function  WindowChecker(id: string){
  switch (id) {
    case 'spotify/':
      console.log("hi mone");
      console.log("elam sheriakum")
      return (
        // openSpotifyWindow()
        null
        
      );
    case 'chat/':
      return (
        openSpotifyWindow
      );
    case 'music/':
      return (
        openSpotifyWindow
      );
    case 'notes/':
      return (
        openSpotifyWindow
      );

    case 'planner/':
      return (
        openSpotifyWindow
      );

    case 'tasks/':
      return (
        openSpotifyWindow
      );

    case 'settings/':
      return(
        invoke('open_settings_window')
      );




    default:
      return openSpotifyWindow; // or some default component
  }
}
