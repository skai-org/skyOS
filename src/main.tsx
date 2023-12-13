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
import Terminal from '@/apps/terminal'
import { RootApp } from './routes/AppRoot/Window'


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
        element:<Terminal />
      },
     
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
