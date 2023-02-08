import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { New } from './pages/New'
import GlobalTheme from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalTheme/>
      <New/>
    </ThemeProvider>
  </React.StrictMode>,
)
