import Draggable from "react-draggable"


import { Separator } from "@/components/ui/separator";



const RootWidget = ({ children }: { children: React.ReactNode ,id:string}) => {
    
  return (
    <Draggable>
        <div className="flex flex-col bg-zinc-900 w-72  h-26 rounded-xl p-2">
            <div className="flex flex-row  p-2">
            <button onClick={() => {}}>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
            </button>
            <button onClick={() => {}}><div className="w-3 h-3 rounded-full bg-yellow-500 ml-2"></div></button>
            <button onClick={() => {}}><div className="w-3 h-3 rounded-full bg-green-500 ml-2"></div></button>
            </div>
            <Separator />
        {children}
        <div className="h-1"></div>
        
        </div>
    
    </Draggable>
  )
}

export default RootWidget