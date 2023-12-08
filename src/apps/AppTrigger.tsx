import { App } from '@/types/app.interface'
import { ActionTooltip } from '../components/action-tooltip'
// import { invoke } from '@tauri-apps/api';
import openWebWindow from './webApp';
import { invoke } from '@tauri-apps/api';
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
   
  const onIconClick= () => {
    
    isWebApp ? openWebWindow(exec,name) : invoke('open_window',{title: name, url: exec})
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