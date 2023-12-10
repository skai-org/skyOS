import { WidgetTile } from "@/types/widget.interface";
import { ListTodo, Music, StickyNote, Timer } from "lucide-react";

export const widDockItems: Array<WidgetTile> = [
    { name: "Pomo", icon:<Timer size={20}/>,exec:'pomo'},
    { name: "Todo", icon:<ListTodo size={20}/>,exec:'todo'},
    { name: "Note", icon:<StickyNote size={20}/>,exec:'note'},
    { name: "Music", icon:<Music size={20}/>,exec:'music'},
];
  