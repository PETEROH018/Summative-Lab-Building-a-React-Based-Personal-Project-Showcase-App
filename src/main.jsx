import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPage from './pages/AdminPage'
import ProductsPage from './pages/ProductsPage'
import ShoeDetails from './pages/ShoeDetails.jsx'
import './index.css'
import App from './App.jsx'
import { ShoesProvider } from './contexts/ShoesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoesProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/product/:id" element={<ShoeDetails/>}/>
          </Routes>
        </BrowserRouter>
    </ShoesProvider>
     
  </StrictMode>,
)
