import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { ApiProvider } from './contexts/ApiContext.jsx'
import { FavsProvider } from './contexts/FavsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ApiProvider>
        <FavsProvider>
          <App />
        </FavsProvider>
      </ApiProvider>
    </ThemeProvider>
  </StrictMode>,
)
