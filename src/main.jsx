import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AppRoutes from './routes'
import { StoreProvider } from './context/Store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App>
          <AppRoutes />
        </App>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
