import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Window } from '@/components/window/Window';

const MusicApp:React.FC = () => {
  return (
    <ThemeProvider>
      <Window />
    <div className="flex flex-row">
      <div className="h-screen w-[30%] bg-red-50"></div> 
      <div className="h-screen w-full flex-col">

      </div>
    </div>
    </ThemeProvider>
  )
}

ReactDOM.render(<MusicApp/>, document.getElementById('root'))