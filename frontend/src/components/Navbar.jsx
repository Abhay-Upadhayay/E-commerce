import React from 'react'
import { RiSearchLine , RiShoppingCartLine } from '@remixicon/react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();

    let token = localStorage.getItem("token");
    let role = localStorage.getItem("role");

  return (
    <nav className=' fixed top-0 w-full h-15 backdrop-blur-2xl flex items-center justify-between p-2.5'>
        <div className="logo">
            <h1 className='text-3xl font-bold text-blue-500'>Sellzo</h1>
        </div>
        <div className="searchBar w-120 h-10 flex justify-between items-center border rounded-lg pr-1">
            <input 
            className=' w-115 h-full px-1 text-xl focus:outline-none'
            type="text" 
            id='searchInput' 
            placeholder='Search what you want...'
            />
            <label htmlFor="searchInput"><RiSearchLine className='text-blue-500'></RiSearchLine> </label>
        </div>
        <div className="navigation  flex items-center justify-between gap-8">
            
            {
               (role == "user") && <RiShoppingCartLine className=' text-blue-500' />
            }

            {
                (role == "admin") &&
                  
               <button 
            className=' bg-blue-500 px-3 py-1 rounded-lg cursor-pointer text-white'
            onClick={()=>{
                navigate("/createProduct")
            }}>Create product</button>
            }

            {
                token ?
                
                <button
                className=' bg-red-500 px-3 py-1 rounded-lg cursor-pointer text-white'
                onClick={()=>{
                localStorage.removeItem("token");
            }}
            >Logout</button> 
            
            : 

            <button 
            className=' bg-blue-500 px-3 py-1 rounded-lg cursor-pointer text-white'
            onClick={()=>{
                navigate("/login")
            }}>Login</button>
            }
        </div>
    </nav>
  )
}
