import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { StoreProvider } from './hooks/useGlobalReducer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
)
