import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Router.jsx';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import AuthProvider from './providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
    <RouterProvider router={router} />
    <Toaster position='top-center' reverseOrder={false}></Toaster>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
