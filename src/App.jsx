

import React, { useState } from 'react'
import { Route , RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './components/layout'
import SideBarContext from './context/SidebarContext'
import NotFound from './components/NotFound'

export default function App() {
  const [open, setOpen] = useState(true);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}  errorElement={<NotFound />} >
      <Route index element={<Home />} />
      <Route path='/statistiques' element={<About />} />
      <Route path='/Services' element={<About />} />
    </Route>
  ))
  return (
    <SideBarContext.Provider value={{ open, setOpen }}>
      <div className='font-Poppins'>
        <RouterProvider router={router} />
      </div>
    </SideBarContext.Provider>
  )
}
