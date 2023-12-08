"use client";

import { Separator } from "@/components/ui/separator";
import { dockItems } from "./dockItems";
import AppTrigger from "../../apps/AppTrigger";

export const Dock = () => {
  return (
    
    <div className=" flex  z-30  h-14  w-min mx-auto
     dock-bg
     
       items-center flex-row gap-y-4 drop-shadow-xl
       hover:scale-110
       transform transition-transform hover:-translate-y-1 
       translate-x-1
      relative justify-between px-2">
    
     
      {dockItems
  .filter((item) => item.pinned == false)
  .map((item) => (
    <AppTrigger
      name={item.name}
      icon={item.icon}
      isWebApp={item.isWebApp}
      key={item.name}
      pinned={item.pinned}
      exec={item.exec}
    />
  ))}



     
      
      <Separator orientation='vertical'className=" bg-zinc-400
       dark:bg-zinc-400 
      rounded-md h-10 
       mx-1 my-2" />
{
dockItems
  .filter((item) => item.pinned !== false)
  .map((item) => (
    <AppTrigger
    isWebApp={item.isWebApp}
      name={item.name}
      icon={item.icon}
      key={item.name}
      pinned={item.pinned}
      exec={item.exec}
    />
  ))}

         
      
    </div>
 
  );
};
