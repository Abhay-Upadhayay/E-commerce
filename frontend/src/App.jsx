import React from 'react'
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { CreateProduct } from './pages/CreateProduct'
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/createProduct' element={<CreateProduct></CreateProduct>}></Route>
        <Route path='/getAllProducts' element={<ProductsPage></ProductsPage>} ></Route>
      </Routes>

    </div>
  )
}

export default App