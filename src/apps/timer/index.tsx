import React from 'react';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Button } from '@/components/ui/button';
import { BarChartBig, BellRing, ChevronLeftIcon, ChevronRightIcon, RotateCcw, Settings} from 'lucide-react';


const TimerApp:React.FC = () => {
  return (
    <ThemeProvider>
    <div className="flex  
    h-screen
     flex-col border rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-2xl p-1 bg-[#BA4949]">
    <div className="absolute right-0 flex-row  justify-end gap-3 mt-[30px] mr-8 w-min flex">
        <button><BarChartBig /></button>
        <button><BellRing /></button>
        <button><Settings /></button>
      </div>
    <div className="h-screen w-full flex flex-col items-center justify-center">
    <div className="mb-20 flex flex-row gap-4">
      <Button variant={'ghost'}><ChevronLeftIcon color='white'/></Button>
      <div className='font-bold text-4xl font-mono'>Pomodoro</div>
      <Button variant={'ghost'}><ChevronRightIcon color='white'/></Button>
      </div>
      <div className="min-w-[30%] min-h-[45%] flex flex-col
       bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 
       rounded-lg text-white  p-4 justify-between">
        {/* Pomodoro content goes here */}
        <div className="text-xl font-bold flex flex-row mb-2 gap-4">
          <Button className='rounded-full'  size={'lg'}>Pomodoro</Button>
          <Button className='rounded-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ' size={'lg'} variant={'outline'}>Short break</Button>
          <Button className='rounded-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 '  size={'lg'} variant={'outline'}>Long Break</Button>
        </div>
        <div className="flex justify-center items-center font-bold text-8xl">
          25:00
        </div>
        <div className='flex flex-row justify-center gap-2 items-center'>
          <Button size={'lg'} className='text-xl'>Start</Button> <Button variant={'ghost'} size={'icon'}><RotateCcw /></Button>
        </div>
      </div>
    </div>
    </div>
    </ThemeProvider>
  )
}

export default TimerApp;