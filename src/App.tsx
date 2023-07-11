import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from './styles/themes/default'
import { Router } from './Routers';
import { BrowserRouter } from 'react-router-dom';
import { CafeContextProvider } from './contexts/CafesContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CafeContextProvider>
          <Router />
        </CafeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
