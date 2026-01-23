import React from 'react'

export const ProductCard = ( {product}) => {
  return (
    <div className='productInfoContainer bg-white  h-120 w-80 flex flex-col justify-center items-center hover:shadow-[0px_0px_6px_1px_black] rounded-2xl overflow-hidden border scale-50 md:scale-70 lg:scale-100 hover:scale-105 hover:z-1 transform  duration-200'>
      <div className='top h-[45%] w-full bg-blue-300 overflow-hidden flex justify-center items-center'>
        <img src={product.images[0]} alt="Product Image" className=' object-contain max-h-full max-w-full ' />
      </div>
      <div className='bottom h-[55%] w-full  flex flex-col justify-around items-start px-3'>
        <h2 className=' font-bold font-mono text-xl'>{product.title}</h2>
        <p>{product.discription}</p>
        <div className='flex gap-10  '>
          <h2 className=' font-extrabold'>{product.price} Rs.</h2>
          <button type='button' className='bg-blue-500 text-white px-3 py-1 rounded-lg'>Edit product</button>
        </div>
      </div>
    </div>
  )
}

