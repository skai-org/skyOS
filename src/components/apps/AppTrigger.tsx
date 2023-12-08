import { App } from '@/types/app.interface'
import { ActionTooltip } from '../action-tooltip'
// import { invoke } from '@tauri-apps/api';
import openWebWindow from './webApp';
import { invoke } from '@tauri-apps/api';
// import { url } from 'inspector';


const AppTrigger = (
    {
        icon,
        name,
        exec,
        isWebApp
        // className
    }: App
) => {
   
  const onIconClick= () => {
    isWebApp ? openWebWindow(exec,name) : invoke('open_window',{title: name, url: exec})
  };
  return (
    <ActionTooltip label={name} side='top'>
    
    <button
    onClick={onIconClick}
    className="  transform transition-transform hover:-translate-y-3 hover:scale-110 m-1 my-2">
        {icon}</button>
        </ActionTooltip>
  )
}

export default AppTrigger;