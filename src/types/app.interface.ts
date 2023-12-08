import { ReactNode } from "react";

export interface App {
    name: string;
    icon: ReactNode;
    pinned: boolean;
    exec: string;
    isWebApp: boolean;
  }
  