import React from 'react'
import heroBackground from '../assets/heroBg.png'

export const Hero = () => {
  return (
    <div className=' mt-15  bg-blue-100 w-full h-150 flex justify-around items-center px-20'>
        <div>
            <h1 className='font-extrabold text-4xl '>Welcome to SELLZO</h1>
            <h2 className=' font-light text-2xl font-sans'>Your online store for everything you need</h2>
            <button href='#shop'
             className=' mt-5 bg-blue-500 px-3 py-1 rounded-lg cursor-pointer text-white'>Shop Now</button>
        </div>
        <div className='h-full w-[65%] flex items-baseline-last overflow-hidden'>
            <img src={heroBackground} className=' bg-transparent' />
        </div>
    </div>
  )
}
