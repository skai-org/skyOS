import { App } from '@/types/app.interface'
import { ActionTooltip } from '../action-tooltip'
import { invoke } from '@tauri-apps/api';


const AppTrigger = (
    {
        icon,
        name,
        exec
        // className
    }: App
) => {
   
  const onIconClick= () => {
    invoke('open_window',{title: name, url: exec}) 
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