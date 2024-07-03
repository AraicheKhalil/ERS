

import React, { useState } from 'react'
import { Route , RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './components/layout'
import NotFound from './Pages/NotFound'
import Statistiques from './Pages/statistiques'
import PosteVacont from './Pages/PosteVacont'
import Services from './Pages/Services'
import Retraités from './Pages/Retraités'
import Congé from './Pages/Congé'
import EAP from './Pages/EAP'

export default function App() {
  const [open, setOpen] = useState(true);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route >
      <Route path='/' element={<Layout />}  >
        <Route index element={<Home />} />
        <Route path='/statistiques' element={<Statistiques />} />
        <Route path='/retraités' element={<Retraités />} />
        <Route path='/Congé' element={<Congé />} />
        <Route path='/eap-mi-ac' element={<EAP />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  ))
  return (
      <div className='font-Poppins'>
        <RouterProvider router={router} />
      </div>
  )
}


