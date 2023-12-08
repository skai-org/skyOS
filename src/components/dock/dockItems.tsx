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
  { name: "Chat", icon: <ChatIcon />, pinned: false, exec: "src/components/apps/chat/chat.html" },
  { name: "Tasks", icon: <TaskIcon />,  pinned: false,exec: "src/components/apps/tasks/tasks.html" },
  { name: "Spotify", icon: <SpotifyIcon />,  pinned: false ,exec: "https://open.spotify.com"},
  { name: "Plan", icon: <BasketIcon />,pinned: false,exec: "src/components/apps/planner/planner.html" },
  { name: "Music", icon: <MusicIcon />, pinned: false,exec: "src/components/apps/music/music.html" },
  { name: "Notes", icon: <TimerIcon />,pinned: false,exec: "src/components/apps/timer/timer.html" },
  { name: "Settings", icon: <SettingsIcon />, pinned: true,exec: "src/components/apps/settings/settings.html" },
  { name: "Launchpad", icon: <AppLauncherIcon />, pinned: true, exec: "" },
];
