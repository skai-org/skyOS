import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './main/Root'
import './styles/globals.css'
import { ThemeProvider } from './components/providers/theme-provider'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<ThemeProvider>
    <Root />
    </ThemeProvider>

  </React.StrictMode>,
)
