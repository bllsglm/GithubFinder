import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { GithubProvider } from './context/github/GithubContext.tsx'
import { AlertProvider } from './context/alert/AlertContext.tsx'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About.tsx'


const router =createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/' index element={<Home/>} />
    <Route path='/*'  element={<NotFound/>} />
    <Route path='/about' index element={<About/>} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
       <RouterProvider router={router} />
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>,
)
