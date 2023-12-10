import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface ControlButtonsProps {
    onStartPause: () => void;
    isActive: boolean;
    onReset: () => void;
  }

const ControlButtons :  React.FC<ControlButtonsProps> =   ({ onStartPause, isActive, onReset }) => {

    return (
        <div className='flex flex-row gap-x-4 pt-2'>
      <Button className='bg-[#572D1C] text-[#FFF5EE] hover:bg-[#572D1C]'
      onClick={onStartPause}
      >
      {isActive ? 'Pause' : 'Start'}</Button>
      <button onClick={onReset}><RotateCcw color='#572D1C'/></button>
    </div>
    );
  };

export default ControlButtons