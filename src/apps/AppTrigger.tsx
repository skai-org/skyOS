import { App } from '@/types/app.interface'
import { ActionTooltip } from '../components/action-tooltip'
// import { invoke } from '@tauri-apps/api';
import openWebWindow from './webApp/WebApp';
import openAppWindow from './webApp/App';
import { WebviewWindow } from '@tauri-apps/api/window';
// import { url } from 'inspector';


const AppTrigger = (
    {
        icon,
        name,
        exec,
        isWebApp,
        handleClick,
        className
    }: App
) => {

  
   
  const onIconClick= async () => {
    const minStat =  await WebviewWindow.getByLabel(name)?.isVisible();
    if(minStat === false){
      await WebviewWindow.getByLabel(name)?.show()
    } else{
    isWebApp ? openWebWindow(exec, name) : openAppWindow(exec,name);
    }
    
    handleClick?.();
   
  };

  

  return (
    <ActionTooltip label={name} side='top'>
    
    <button
    onClick={onIconClick}
    className={`m-1 my-2 ${className}`}>
        {icon}</button>
        </ActionTooltip>
  )
}

export default AppTrigger;