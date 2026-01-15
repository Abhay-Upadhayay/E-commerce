import React from 'react'
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>

      </Routes>

    </div>
  )
}

export default App