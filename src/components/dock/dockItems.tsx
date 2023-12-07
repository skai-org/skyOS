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
  { name: "Chat", icon: <ChatIcon />, action: "chat/", pinned: false },
  { name: "Tasks", icon: <TaskIcon />, action: "tasks/", pinned: false },
  { name: "Spotify", icon: <SpotifyIcon />, action: "spotify/", pinned: false ,url: "https://open.spotify.com"},
  { name: "Plan", icon: <BasketIcon />, action: "planner/", pinned: false },
  { name: "Sounds", icon: <MusicIcon />, action: "music/", pinned: false },
  { name: "Take notes", icon: <TimerIcon />, action: "notes/", pinned: false },
  { name: "Settings", icon: <SettingsIcon />, action: "settings/", pinned: true },
  { name: "Launchpad", icon: <AppLauncherIcon />, action: "launcher/", pinned: true },
];
