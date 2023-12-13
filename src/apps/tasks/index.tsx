import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Window } from '@/components/window/Window';
import TaskPage from './page';

const TasksApp:React.FC = () => {
  return (
    <ThemeProvider>
      <Window />
    <TaskPage />
    </ThemeProvider>
  )
}

ReactDOM.render(<TasksApp/>, document.getElementById('root'))
