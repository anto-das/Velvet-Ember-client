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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
      <HelmetProvider>
    <RouterProvider router={router} />
    <Toaster position='top-center' reverseOrder={false}></Toaster>
    </HelmetProvider>
    </QueryClientProvider>
      </AuthProvider>
  </StrictMode>,
)
