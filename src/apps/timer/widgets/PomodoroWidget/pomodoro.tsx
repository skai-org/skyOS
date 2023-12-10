"use client"
import Draggable from 'react-draggable';
import './styles/main.css';
import Timer from './components/Timer';
import { useEffect, useState } from 'react';
import ControlButtons from './components/ControlButtons';


export const PomodoroWidget = () => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0 && minutes > 0) {
      setMinutes((prevMinutes) => prevMinutes - 1);
      setSeconds(59);
    } else if (isActive && seconds === 0 && minutes === 0) {
      setIsActive(false);
      // Perform any action when the timer reaches 0 (switch to break time, bruh)
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);
 
  const handleStartPause = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };



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
  <Timer minutes={minutes} seconds={seconds} />
  <ControlButtons onStartPause={handleStartPause} onReset={handleReset} isActive={isActive}/>

</div>

</Draggable>
  )
}

