import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'
import Project from './Component/Project'
import Skills from './Component/Skills'
import MainLayout from './Component/MainLayout'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<MainLayout/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/skills' element={<Skills/>}/>
  </Routes>
  <ToastContainer/>
  </>
  )
}

export default App
