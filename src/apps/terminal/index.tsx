import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Window } from '@/components/window/rootWidget';

const TerminalApp:React.FC = () => {
  return (
    <ThemeProvider>
      <Window />
    <div className="bg-zinc-800 h-screen overflow-y-scroll">
      
      </div>

    </ThemeProvider>
  )
}

ReactDOM.render(<TerminalApp/>, document.getElementById('root'))