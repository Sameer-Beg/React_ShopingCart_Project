import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Cartprovider } from './Context/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  
    <Cartprovider>
      <App />
    </Cartprovider>,
  
)
