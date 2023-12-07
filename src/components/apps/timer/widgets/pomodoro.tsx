"use client"
import { Button } from '../../../ui/button'
import { Play, RotateCcw } from 'lucide-react'
import Draggable from 'react-draggable';


export const PomodoroWidget = () => {
 

  return (
    <Draggable>

    <div className="
    absolute 
    top-2
    right-1
  
   p-6 
    rounded-2xl  h-[35] w-[35]
    bg-gray-800 bg-opacity-40  bg-clip-padding backdrop-filter backdrop-blur-xl border-0
   flex flex-col items-center justify-center
   ">
    {/* <div className='flex flex-row gap-x-4 pb-10'>
      <Button size={'lg'} variant={'default'}>Pomodoro</Button>
      <Button size={'lg'} variant={'ghost'}>Short break</Button>
      <Button size={'lg'} variant={'ghost'}>Long Break</Button>

    </div> */}
    <p className="text-xl">Pomodoro</p>
  <div className="relative text-6xl text-white z-10 font-bold pt-2">
    25:00
  </div>
  <div className='flex flex-row gap-x-4 pt-2'>
      <Button size={'icon'}><Play /></Button>
      <button><RotateCcw /></button>
     

    </div>

</div>

</Draggable>
  )
}

