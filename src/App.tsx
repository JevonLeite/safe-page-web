import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import AppProvider from './hooks'
import RoutesControl from './routes'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <BrowserRouter>
          <RoutesControl />
          <GlobalStyle />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  )
}
