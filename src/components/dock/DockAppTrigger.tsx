import { App } from '@/types/app.interface'
import { ActionTooltip } from '../action-tooltip'
// import { invoke } from '@tauri-apps/api';
import openWebWindow from '../../apps/webApp/WebApp';
import openAppWindow from '../../apps/webApp/App';
import { WebviewWindow } from '@tauri-apps/api/window';
import { useState } from 'react';
// import { url } from 'inspector';


const AppTrigger = (
  
    {
        icon,
        name,
        exec,
        isWebApp,
        className
    }: App
) => {
  const [Clicked,setClick] = useState<boolean>(false);
  
 
  const onIconClick= async () => {
    const minStat =  await WebviewWindow.getByLabel(name)?.isVisible();
    if(minStat === false){
      await WebviewWindow.getByLabel(name)?.show()
    } else{
    isWebApp ? openWebWindow(exec, name) : openAppWindow(exec,name);
    }
    
    setClick(true);
   
  };


  

  

  return (
    <ActionTooltip label={name} side='top'>
    <div className='flex flex-col justify-center items-center'>
    <button
    onClick={onIconClick}
    className={`mx-1 mb-1 ${className}`}>
        {icon}</button>
        {Clicked && <div className="h-1  w-1  bg-slate-200 rounded-full"></div> }
        </div>
        </ActionTooltip>
  )
}

export default AppTrigger;