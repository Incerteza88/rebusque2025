import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StoreProvider } from './hooks/useGlobalReducer.jsx';
import React from 'react';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </StoreProvider>
  </React.StrictMode>
)
