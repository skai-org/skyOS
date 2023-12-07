import { ReactNode } from "react";

export interface App {
    name: string;
    icon: ReactNode;
    action: string;
    url?: string;
    className?: string;
    pinned: boolean;
  }
  