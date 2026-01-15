import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-100'>

        <form action="" className=' border bg-white flex flex-col p-5 rounded-2xl'>
            <h1 className=' text-3xl font-bold text-center font-mono text-blue-500'>LOGIN</h1>
            <br />
            <br />
            <label htmlFor="email" 
            className=' text-lg font-medium'
            >Email :</label>
            <br />
            <input 
            type="email" 
            id='email' 
            placeholder='xyz@gmail.com'
            className=' w-100 h-8 border rounded-lg px-1 text-lg focus:outline-none'/>
            <br />

            <label htmlFor="password"
            className=' text-lg font-medium'
            >Password :</label>
            <br />
            <input 
            type="password" 
            id='password'
            placeholder='*******'
            className=' w-100 h-8 border rounded-lg px-1 text-lg focus:outline-none'/>

            <br />
        
            <div className=' flex justify-center items-center'>
                <button 
                type='submit'
                className=' bg-blue-500 text-white text-xl font-medium font-sans px-3 py-1 rounded-2xl'
                >Submit</button>
            </div>

            <br />

            <p>Don't have an account? <Link to={"/register"} className='text-blue-500' >Register Here</Link></p>
        </form>
    </div>
  )
}
