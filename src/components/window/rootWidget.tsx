import React from 'react';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';
import { appWindow } from '@tauri-apps/api/window'
import { Maximize2, Minus, X } from 'lucide-react';
import './style.css';

export const Window:React.FC = () => {
  return (
    <ThemeProvider>
    <div data-tauri-drag-region className="
    h-[30px] flex  items-center space-x-2 pl-2
    bg-zinc-900 flex-initial fixed top-0 left-0 right-0 ">
  <button className="
  rounded-lg w-3.5 h-3.5 bg-gradient-to-r from-red-500 to-red-600 

  flex items-center justify-center" id="titlebar-minimize" onClick={() => { appWindow.close() }}>
    <span className="spoiler">
      <span>
      <X color='black' className='w-3 h-3' />
      </span>
      </span>

  </button>
  <button className="rounded-lg w-3.5 h-3.5 bg-gradient-to-r from-purple-700 to-red-700  flex items-center justify-center" id="titlebar-minimize" onClick={() => {appWindow.maximize()}}>
    <span className="spoiler">
      <span>
      <Maximize2 color='black' className='w-3 h-3' />
      </span>
      </span>

  </button>
  <button className="rounded-lg w-3.5 h-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500  flex items-center justify-center" id="titlebar-minimize" onClick={() => {appWindow.hide()}}>
    <span className="spoiler">
      <span>
      <Minus color='black' className='w-3 h-3' />
      </span>
      </span>

  </button>
</div>
    </ThemeProvider>
  )
}


