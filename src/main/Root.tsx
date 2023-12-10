import { PomodoroWidget } from "@/apps/timer/widgets/PomodoroWidget/pomodoro";
import { Dock } from "@/components/dock/dock";
import { MenubarDemo } from "@/components/topBar/menuBar";
// import {
//   ContextMenu,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuTrigger,
// } from "@/components/ui/context-menu";


import ImgBg from "@/components/BgSelector/imgBg";

function Root() {
  // const widgets = useAppSelector(state => state.widgetReducer.widgets);
  return (
    <main className=" h-screen w-[100%] overflow-y-hidden">
      <MenubarDemo />
<ImgBg />

      <PomodoroWidget />
      <div className="absolute bottom-5 w-[100%] px-8">
        <Dock />
      </div>

      {/* <SpotifyEmbed /> */}
    </main>
  );
}

export default Root;
