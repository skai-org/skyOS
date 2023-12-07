import { App } from '@/types/app.interface'
import { ActionTooltip } from '../action-tooltip'
import { invoke } from '@tauri-apps/api';
import openSpotifyWindow from './webApp';


const AppTrigger = (
    {
        action,
        icon,
        name,
        url
        // className
    }: App
) => {
   
  const onIconClick= () => {
    url==null ?  invoke('open_settings_window') : openSpotifyWindow(url,name)
    console.log(action);
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