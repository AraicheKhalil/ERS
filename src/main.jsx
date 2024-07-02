import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import AppProvider from './hooks/context/AppContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider >
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </AppProvider>
)
