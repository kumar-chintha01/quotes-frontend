import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Quotes from './pages/Quotes/Quotes.jsx'
import MyQuotes from './pages/MyQuotes/MyQuotes.jsx'

import axios from 'axios'
axios.defaults.withCredentials = true;

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route path='' element={<Home />}></Route>
    <Route path='login' element={<Login />} ></Route>
    <Route path='signup' element={<SignUp />}></Route>
    <Route path='quotes' element={<Quotes />}></Route>
    <Route path='my-quotes' element={<MyQuotes />}></Route>
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
