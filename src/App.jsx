

import React, { useState } from 'react'
import { Route , RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './components/layout'
import SideBarContext from './context/SidebarContext'
import NotFound from './Pages/NotFound'
import Statistiques from './Pages/statistiques'
import PosteVacont from './Pages/PosteVacont'
import Services from './Pages/Services'
import Retraités from './Pages/Retraités'

export default function App() {
  const [open, setOpen] = useState(true);

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}  errorElement={<NotFound />} >
        <Route index element={<Home />} />
        <Route path='/statistiques' element={<Statistiques />} />
        <Route path='/retraités' element={<Retraités />} />
      </Route>

      {/* <Route path='/services' element={<ServicesLayout />}>
        <Route index element={<Services />} />
      </Route>

      <Route path='/poste-vacont' element={<ServicesLayout />}>
        <Route index element={<PosteVacont />} />
      </Route> */}
    </>
  ))
  return (
    <SideBarContext.Provider value={{ open, setOpen }}>
      <div className='font-Poppins'>
        <RouterProvider router={router} />
      </div>
    </SideBarContext.Provider>
  )
}
