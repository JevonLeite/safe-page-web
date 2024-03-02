import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'styled-components'

import AppProvider from './hooks'
import RoutesControl from './routes'

import queryClient from './services/query'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/themes/default'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <BrowserRouter>
            <RoutesControl />
            <GlobalStyle />
          </BrowserRouter>
        </AppProvider>
      </ThemeProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
