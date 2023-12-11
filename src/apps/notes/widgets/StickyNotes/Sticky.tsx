import { Trash2 } from "lucide-react";
import { useState } from "react";
import Draggable from "react-draggable"
import './style.css'

const Sticky = () => {
    const [isHovered, setIsHovered] = useState(false);
    
  return (
    <Draggable bounds="parent"> 
    <div className="bg-cyan-200 w-80  absolute 
    top-20
    shadow-2xl
    border-0
    rounded-2xl
    flex
    flex-col
    justify-between
    p-2
    left-1 min-h-[40] h-auto"  onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <div>
            <div className="flex flex-row w-full justify-between items-center ">
            <h1 className="text-xl font-bold note-body text-black mb-4 note-title" contentEditable={isHovered}>Add titl</h1>
            {isHovered && <button className="mb-5"><Trash2 color="black" /></button>}
            </div>
        
        <div className="text-sm note-body text-black mb-5  w-full" contentEditable={isHovered}>Edit me ;)</div>
        </div>
        <div className="flex flex-row justify-between items-center">
            <div className="text-xs text-slate-600">Last Edited: 10:26 a.m</div>
            
                <div className="bg-white rounded-xl p-1 flex flex-cols justify-around gap-1 mb-1">
                <button className="w-4 h-4 rounded-lg bg-cyan-200"></button>
                <button className="w-4 h-4 rounded-lg bg-pink-200"></button>
                <button className="w-4 h-4 rounded-lg bg-yellow-200"></button>
                <button className="w-4 h-4 rounded-lg bg-green-200"></button>
            </div>
           
            
        </div>
    </div>
    </Draggable>
  )
}

export default Sticky