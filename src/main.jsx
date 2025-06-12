import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import NoteFount from './pages/NoteFount.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route index path='/' element={<Home/>}/>
      <Route path='*' element={<NoteFount/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
