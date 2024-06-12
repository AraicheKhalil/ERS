

import React from 'react'
import { Route , RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './components/layout'

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='/statistiques' element={<About />} />
      <Route path='/Services' element={<About />} />
    </Route>
  ))
  return (
    <div className='font-Poppins'>
      <RouterProvider router={router} />
    </div>
  )
}
