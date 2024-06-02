import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>

  <QueryClientProvider client={queryClient}>
  <AuthProvider>
  <RouterProvider router={router} />
  <ToastContainer />
  </AuthProvider>
    </QueryClientProvider>

  </HelmetProvider>
  </React.StrictMode>,
)
