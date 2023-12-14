import { App } from "../../types/app.interface";
import ChatIcon from "@/assets/IconPack/chatbox";
import TaskIcon from "@/assets/IconPack/task";
import SpotifyIcon from "@/assets/IconPack/spotify";
import BasketIcon from "@/assets/IconPack/basket";
import MusicIcon from "@/assets/IconPack/music";
import TimerIcon from "@/assets/IconPack/timer";
import SettingsIcon from "@/assets/IconPack/settings";
import AppLauncherIcon from "@/assets/IconPack/app-launcher";
import SoftwareCenterIcon from "@/assets/IconPack/software-center";
import { TerminalIcon } from "lucide-react";


export const dockItems: Array<App> = [
  { name: "Chat", icon: <ChatIcon />, pinned: false, exec: "/app/chat",isWebApp: false },
  { name: "Tasks", icon: <TaskIcon />,  pinned: false,exec: "/app/tasks",isWebApp: false  },
  { name: "Spotify", icon: <SpotifyIcon />,  pinned: false ,exec: "https://accounts.spotify.com/en-GB/login",isWebApp: true },
  { name: "Plan", icon: <BasketIcon />,pinned: false,exec: "/apps/planner",isWebApp: false  },
  { name: "Music", icon: <MusicIcon />, pinned: false,exec: "/apps/music",isWebApp: false  },
  { name: "Timer", icon: <TimerIcon />,pinned: false,exec: "/app/timer",isWebApp: false  },
  { name: "Settings", icon: <SettingsIcon />, pinned: true,exec: "/app/settings.",isWebApp: false  },
  { name: "Launchpad", icon: <AppLauncherIcon />, pinned: true, exec: "",isWebApp: false  },
  { name: "SoftwareCenter", icon: <SoftwareCenterIcon/>, pinned: false, exec: "/apps/store",isWebApp: false  },
  { name: "Terminal", icon: <TerminalIcon/>, pinned: true, exec: "/app/terminal",isWebApp: false  },
];
