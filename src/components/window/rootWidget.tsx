import React from 'react';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';
import { appWindow } from '@tauri-apps/api/window'

export const Window:React.FC = () => {
  return (
    <ThemeProvider>
    <div data-tauri-drag-region className="titlebar">
  <button className="titlebar-button" id="titlebar-minimize" onClick={() => {appWindow.minimize()}}>
    <img
      src="https://api.iconify.design/mdi:window-minimize.svg"
      alt="minimize"
    />
  </button>
  <button className="titlebar-button" id="titlebar-maximize" onClick={() => {appWindow.maximize()}}>
    <img
      src="https://api.iconify.design/mdi:window-maximize.svg"
      alt="maximize"
    />
  </button>
  <button className="titlebar-button" id="titlebar-close" onClick={() => {appWindow.close()}}>
    <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
  </button>
</div>
    </ThemeProvider>
  )
}


