// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';


const NotesApp: React.FC = () => {
  return (
    <ThemeProvider>
    <div>
      <h1 className='text-4xl'>Notes</h1>
      Take down notes!!!
    </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<NotesApp />, document.getElementById('root'));
