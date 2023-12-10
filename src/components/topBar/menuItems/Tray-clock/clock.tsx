import { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = currentTime.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }).replace(',', '');

  return (
    <div className='flex text-md text-[12px]'>
        <p className='mx-2 '>{formattedDate}</p>
      <p className='mr-4'>{formattedTime}</p>
      
    </div>
  );
};

export default Clock;
