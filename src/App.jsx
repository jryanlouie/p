import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Router } from './router'
import { RouterProvider } from 'react-router-dom'

function App() {

  const router = Router()

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
