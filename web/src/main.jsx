import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Details } from './pages/Details'
import GlobalTheme from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalTheme/>
      <Details/>
    </ThemeProvider>
  </React.StrictMode>,
)
