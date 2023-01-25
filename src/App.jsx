import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Routes'

function App() {

  return (
    <div>
     <RouterProvider router={route}  />
    </div>
  )
}

export default App
