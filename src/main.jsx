import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoteFount from './NoteFount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<App/>}/>
      <Route path='*' element={<NoteFount/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
