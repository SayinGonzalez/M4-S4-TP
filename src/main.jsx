import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { ApiProvider } from './contexts/ApiContext.jsx'
import { FavsProvider } from './contexts/FavsContext.jsx'
// import { ToastProvider } from "@heroui/toast";
// import { HeroUIProvider } from '@heroui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HeroUIProvider> */}
      {/* <ToastProvider /> */}
      <ThemeProvider>
        <ApiProvider>
          <FavsProvider>
            <App />
          </FavsProvider>
        </ApiProvider>
      </ThemeProvider>
    {/* </HeroUIProvider> */}
  </StrictMode>,
)
