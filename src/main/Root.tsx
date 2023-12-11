import { PomodoroWidget } from "@/apps/timer/widgets/PomodoroWidget/pomodoro";
import { Dock } from "@/components/dock/dock";
import { MenubarDemo } from "@/components/topBar/menuBar";


import ImgBg from "@/components/BgSelector/imgBg";
import TodoWidget from "@/apps/tasks/widgets/TodoWidget";
import { useEffect, useRef, useState } from "react";
import { WidgetDock } from "@/components/dock/WidgetDock/WidgetDock";
import Sticky from "@/apps/notes/widgets/StickyNotes/Sticky";

function Root() {
  const [widdockVisible, setWidDockVisible] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);
  
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const viewportWidth = window.innerWidth;
      const threshold = 5; 
      const isNearRightEdge = mouseX >= viewportWidth - threshold;
      if (isNearRightEdge) {
        setWidDockVisible(true)
      }
    }; 
    const handleDocumentClick = (event: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(event.target as Node)) {
        setWidDockVisible(false);
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleDocumentClick);

    // Clean up the event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleDocumentClick);
    };
  },[]
  );
  

  return (
    <main className=" h-screen w-[100%] overflow-y-hidden">
      <MenubarDemo />
<ImgBg />

      <PomodoroWidget />
      <TodoWidget />
      <Sticky />
      {widdockVisible &&  <WidgetDock ref={dockRef}  dockVisible={widdockVisible}/>}
     
      <div className="absolute bottom-5 w-[100%] px-8">
        <Dock />
      </div>

      {/* <SpotifyEmbed /> */}
    </main>
  );
}

export default Root;
