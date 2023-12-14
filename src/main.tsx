import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import './styles/globals.css'
import { ThemeProvider } from './components/providers/theme-provider'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TimerApp from '@/apps/timer'
import XTerm from './apps/terminal/terminal'
import { RootApp } from './routes/AppRoot/Window'
import Chat from './apps/Chat/Chat'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path:"/app",
    element: <RootApp />,
    children: [
      {
        path: "/app/timer",
        element:<TimerApp />
      
      },
      {
        path: "/app/terminal",
        element:<XTerm  />
      },
      {
        path: "/app/chat",
        element:<Chat />
      }
     
    ]
  
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<ThemeProvider>
<RouterProvider router={router} />
    </ThemeProvider>

  </React.StrictMode>,
)
