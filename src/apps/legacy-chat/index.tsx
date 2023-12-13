import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Window } from '@/components/window/Window';
import Component from './components/chat';


const ChatApp:React.FC = () => {
  return (
    <ThemeProvider>
     
      <Window />
      <div className='mt-[30px] h-screen '>
      <Component />
      </div>
      
    
    </ThemeProvider>
  )
}

ReactDOM.render(<ChatApp/>, document.getElementById('root'))
