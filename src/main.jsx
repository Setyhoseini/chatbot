// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Internal from './pages/Internal.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';


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
    path: "/internal/:uid/:chatId?",
    element: <Internal />
  },
  {
    path: "/home/:uid",
    element: <Home />
  },
  {
    path: "/signup",
    element: <Signup />
  }
])

createRoot(document.getElementById('root')).render(
 // <StrictMode>
  //  <App />
  <RouterProvider router={router} />
 // </StrictMode>,
)
