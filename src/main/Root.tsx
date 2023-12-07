import { PomodoroWidget } from "@/components/apps/timer/widgets/pomodoro";
import { Dock } from "@/components/dock/dock";
import { MenubarDemo } from "@/components/topBar/menuBar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";


import backdropImage from "../assets/backdrops/12.png";


function Root() {
    // const widgets = useAppSelector(state => state.widgetReducer.widgets);
  return (
    <div className="h-screen overflow-y-hidden">
      <MenubarDemo />
      <div className="absolute bottom-5 w-[100%] px-8">
        <Dock />
      </div>

      <main className=" h-full ">
        <div className="h-full  z-1 relative">
          <ContextMenu>
            <ContextMenuTrigger>
              <img
                className="object-fill 100-full w-full select-none"
                src={backdropImage}
                alt={"randImage"}
                draggable={false}
              />
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Get Info</ContextMenuItem>
              <ContextMenuItem>Change Wallpaper...</ContextMenuItem>
              <ContextMenuItem>Edit widgets...</ContextMenuItem>
              <ContextMenuItem>Settings</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
          <PomodoroWidget />
         
        
        
          
  
    
  
          {/* <SpotifyEmbed /> */}
        </div>
      </main>
    </div>
  );
}

export default Root;
