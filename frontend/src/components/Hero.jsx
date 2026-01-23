import React from 'react'
import heroBackground from '../assets/heroBg.png'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className=' mt-15  bg-blue-100 w-full h-100 sm:h-150 flex flex-col justify-center items-center px-20 gap-3'>
        
          <Link to="/login" className=' opacity-80 text-center bg-white px-3 py-2 rounded-2xl text-blue-500  border border-black border-solid text-[10px] md:text-xl'>Login to start shopping</Link>
          <h1 className='font-extrabold text-md sm:text-5xl text-center'>Welcome To SELLZO</h1>
          <h2 className=' font-light text-2xl sm:text-7xl text-center font-sans'>Your online store for everything you need</h2>
          <button type='button'
             className=' mt-5 bg-blue-500 px-3 py-1 rounded-lg cursor-pointer sm:text-xl text-white'>Shop Now
          </button>
       
    </div>
  )
}
