import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import { Home } from './pages/Home.jsx'
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router";
import { StoreProvider } from './hooks/useGlobalReducer.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { router } from './routes.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provide global state to all components */}
    <StoreProvider>
      {/* Set up routing for the application */}
      <RouterProvider router={router}>
      </RouterProvider>
    </StoreProvider>
  </React.StrictMode>
)
