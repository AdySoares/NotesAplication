import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalTheme from './styles/global'
import theme from './styles/theme'
import { Signin } from './pages/Signin'
import { Routes } from './routers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalTheme/>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)
