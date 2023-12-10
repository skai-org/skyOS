"use client"
import { Button } from '../../../../components/ui/button'
import {  RotateCcw } from 'lucide-react'
import Draggable from 'react-draggable';
import './styles/main.css';


export const PomodoroWidget = () => {
 

  return (
    <Draggable bounds="parent">

    <div className="
    absolute 
    top-10
    right-1
  
   p-6 
    rounded-2xl  h-[35] w-[35]
    bg-[#FFF5EE] border-2 border-[#572D1C]
   flex flex-col items-center justify-center
   ">
    
    <p className="text-xl text-[#572D1C]">Pomodoro</p>
  <div className="relative text-6xl text-[#F7B88B] pomo-text-stroke  font-bold pt-2">
    25:00
  </div>
  <div className='flex flex-row gap-x-4 pt-2'>
      <Button className='bg-[#572D1C] text-[#FFF5EE] hover:bg-[#572D1C]'>Start</Button>
      <button><RotateCcw color='#572D1C'/></button>
     

    </div>

</div>

</Draggable>
  )
}

