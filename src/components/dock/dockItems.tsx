import { App } from "../../types/app.interface";
import ChatIcon from "@/assets/IconPack/chatbox";
import TaskIcon from "@/assets/IconPack/task";
import SpotifyIcon from "@/assets/IconPack/spotify";
import BasketIcon from "@/assets/IconPack/basket";
import MusicIcon from "@/assets/IconPack/music";
import TimerIcon from "@/assets/IconPack/timer";
import SettingsIcon from "@/assets/IconPack/settings";
import AppLauncherIcon from "@/assets/IconPack/app-launcher";


export const dockItems: Array<App> = [
  { name: "Chat", icon: <ChatIcon />, pinned: false, exec: "src/components/apps/chat/chat.html",isWebApp: false },
  { name: "Tasks", icon: <TaskIcon />,  pinned: false,exec: "src/components/apps/tasks/tasks.html",isWebApp: false  },
  { name: "Spotify", icon: <SpotifyIcon />,  pinned: false ,exec: "https://open.spotify.com",isWebApp: true },
  { name: "Plan", icon: <BasketIcon />,pinned: false,exec: "src/components/apps/planner/planner.html",isWebApp: false  },
  { name: "Music", icon: <MusicIcon />, pinned: false,exec: "src/components/apps/music/music.html",isWebApp: false  },
  { name: "Notes", icon: <TimerIcon />,pinned: false,exec: "src/components/apps/timer/timer.html",isWebApp: false  },
  { name: "Settings", icon: <SettingsIcon />, pinned: true,exec: "src/components/apps/settings/settings.html",isWebApp: false  },
  { name: "Launchpad", icon: <AppLauncherIcon />, pinned: true, exec: "",isWebApp: false  },
];
