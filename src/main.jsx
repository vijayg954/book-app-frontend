import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
    <div className='dark:bg-green-500 dark:text-black'>
      <App />
    </div>
</AuthProvider>
  </React.StrictMode>,
)
