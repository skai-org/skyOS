import { ReactNode } from "react";

export interface WidgetTile{
    name: string;
    icon: ReactNode;
    exec?: string;
    handleClick?: () => void;
    className?: string;
  }
