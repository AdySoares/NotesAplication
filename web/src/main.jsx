import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalTheme from './styles/global'
import theme from './styles/theme'
import { Account } from './pages/Account'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalTheme/>
      <Account/>
    </ThemeProvider>
  </React.StrictMode>,
)
