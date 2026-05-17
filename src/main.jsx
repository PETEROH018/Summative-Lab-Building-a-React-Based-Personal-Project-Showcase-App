import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPage from './pages/AdminPage'
import ProductsPage from './pages/ProductsPage'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/admin" element={<AdminPage/>} />
          </Routes>
        </BrowserRouter>
  </StrictMode>,
)
