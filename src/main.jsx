import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './scss/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { SearchContextProvider } from './context/SearchContext.jsx'
import { SidebarContextProvider } from './context/SidebarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SearchContextProvider>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </SearchContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
