// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Internal from './pages/Internal.jsx';

import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/internal",
    element: <Internal />
  }
])

createRoot(document.getElementById('root')).render(
 // <StrictMode>
  //  <App />
  <RouterProvider router={router} />
 // </StrictMode>,
)
