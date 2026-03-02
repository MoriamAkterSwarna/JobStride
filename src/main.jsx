import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, Routes } from 'react-router'
import { router } from './router.jsx'
import { JobProvider } from './context/JobContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </JobProvider>
  </StrictMode>,
)
