import React from 'react'
import { RiSearchLine , RiShoppingCartLine ,RiMenu5Line , RiCloseLargeLine } from '@remixicon/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [role, setRole] = useState(localStorage.getItem("role"));
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed z-2 top-0 w-full h-16 backdrop-blur-2xl flex items-center justify-between px-4 sm:px-6 md:px-8'>
 
    <div className="logo">
        <h1 className='text-xl md:text-3xl font-bold text-blue-500'>Sellzo</h1>
    </div>

    <div className="searchBar flex-1  md:max-w-xl mx-2 md:mx-4 h-10 flex items-center border rounded-lg md:pr-2">
        <input 
        className='flex-1 h-full px-2 text-sm sm:text-base md:text-lg focus:outline-none rounded-l-lg'
        type="text" 
        id='searchInput' 
        placeholder='Search what you want...'
        />
        <label htmlFor="searchInput" className='px-2 cursor-pointer'>
        <RiSearchLine className='text-blue-500 text-lg sm:text-xl' />
        </label>
    </div>

    <div className="hidden  navigation md:flex items-center gap-2 sm:gap-4">
        {role === "user" && <RiShoppingCartLine className='text-blue-500 text-lg sm:text-xl' />}

        {role === "admin" && (
        <button 
            className='bg-blue-500 px-2 sm:px-3 py-1 rounded-lg cursor-pointer text-white text-sm sm:text-base'
            onClick={() => navigate("/createProduct")}
        >
            Create product
        </button>
        )}

        {token ? (
        <button
            className='bg-red-500 px-2 sm:px-3 py-1 rounded-lg cursor-pointer text-white text-sm sm:text-base'
            onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");

            setToken(null);
            setRole(null);
            }}
        >
            Logout
        </button>
        ) : (
        <button 
            className='bg-blue-500 px-2 sm:px-3 py-1 rounded-lg cursor-pointer text-white text-sm sm:text-base'
            onClick={() => navigate("/login")}
        >
            Login
        </button>
        )}
    </div>
    <div className='md:hidden flex-col items-end '>
        {
            isOpen ?<button type='button' onClick={()=>{setIsOpen(!isOpen)}}>
                        <RiCloseLargeLine size={25} />
                    </button>
                    :
                    <button type='button' onClick={()=>{setIsOpen(!isOpen)}}>
                        <RiMenu5Line size={25} />
                    </button>
        }
        <div className={`${isOpen ? "flex" : "hidden"} gap-1  p-2 right-0  bg-white flex-col items-start absolute top-15`}>
            {role === "user" && <p className='px-2 py-1 w-full text-white bg-red-400 rounded-md'>Cart</p> }

            {role === "admin" && (
            <button type='button'
                className='px-2 py-1 w-full text-white bg-blue-400 rounded-md'
                onClick={() => navigate("/createProduct")}
            >
                Create product
            </button>
            )}

            {token ? (
            <button
                className='px-2 py-1 w-full text-white bg-red-400 rounded-md'
                onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("role");

                setToken(null);
                setRole(null);
                }}
            >
                Logout
            </button>
            ) : (
            <button 
                className='bg-blue-500 px-2 py-1 w-full text-white rounded-md'
                onClick={() => navigate("/login")}
            >
                Login
            </button>
            )}
        </div>
        
    </div>
</nav>

  )
}
