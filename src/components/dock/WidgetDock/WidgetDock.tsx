import { forwardRef } from 'react';
import { widDockItems } from './widDockItems';
import WidgetTrigger from './WidgetTrigger';
import { Separator } from '@/components/ui/separator';

interface WidgetDockProps {
  dockVisible: boolean;
  // Include other state properties as needed
}

export const WidgetDock = forwardRef<HTMLDivElement, WidgetDockProps>((props, ref) => {
  const { dockVisible, ...otherProps } = props;

  return (
    <div
      ref={ref}
      className={` ${dockVisible ? 'visible' : 'hidden'}`}
      {...otherProps}
    >
      {/* Add other button content */}
      <div className="fixed top-20 right-0 
       
       h-[50vh] 
       w-min
      p-2
      my-auto dock-bg   drop-shadow-x flex flex-col items-center ">
        <p className='text-xs'>Widgets</p>
        <Separator className='bg-slate-400 my-2' />
        <div className='flex-col items-center justify-center'>
        {widDockItems.map((e,index)=>{
            return <WidgetTrigger key={index} icon={e.icon} exec={e.exec} name={e.name}/>
        })}
        </div>
      </div>
    </div>
  );
});
