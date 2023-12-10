
interface TimerProps {
    minutes: number;
    seconds: number;
  }

const Timer:  React.FC<TimerProps> = ({minutes,seconds}) => {
  return (
    <div className="relative text-6xl text-[#F7B88B] pomo-text-stroke  font-bold pt-2">
    {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
  </div>
  );
}

export default Timer