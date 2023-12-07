// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider';


const SettingsApp: React.FC = () => {
  return (
    <ThemeProvider>
    <div>
      <h1 className='text-4xl'>Settings</h1>
     Settings anu mone 
    </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<SettingsApp />, document.getElementById('root'));
