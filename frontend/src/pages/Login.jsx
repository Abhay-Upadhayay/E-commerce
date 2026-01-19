import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import config from '../config/config';

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const [error, setError] = useState("");

    const handleForm = (e)=>{
      e.preventDefault();

      axios.post(`${config.BASE_API}/user/login`,{email,password})
      .then((res)=>{
        localStorage.setItem("token" , `bearar ${res.data.token}`)
        localStorage.setItem("role",res.data.role)


        setEmail("")
        setPassword("")
        navigate("/");
      })
      .catch((error)=>{
        
        setError(error.response.data.message);
      })
    }
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-blue-100 p-4'>
      <form onSubmit={handleForm} className='border bg-white flex flex-col p-5 sm:p-6 md:p-7 rounded-2xl w-full max-w-md'>
        <h1 className='text-3xl font-bold text-center font-mono text-blue-500'>LOGIN</h1>
        <br />

        {/* Email */}
        <label htmlFor="email" className='text-lg font-medium'>Email :</label>
        <input 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          type="email" 
          id='email' 
          placeholder='xyz@gmail.com'
          className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'
        />
        <br />

        {/* Password */}
        <label htmlFor="password" className='text-lg font-medium'>Password :</label>
        <input 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          type="password" 
          id='password'
          placeholder='*******'
          className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'
        />
        <br />

        {/* Submit Button */}
        <div className='flex justify-center items-center mt-4'>
          <button 
            type='submit'
            className='bg-blue-500 text-white text-lg sm:text-xl font-medium px-4 py-2 sm:px-6 sm:py-2 rounded-2xl w-full sm:w-auto'
          >
            Submit
          </button>
        </div>
        <br />

        {/* Register Link */}
        <p className='text-center text-sm sm:text-base'>
          Don't have an account? <Link to={"/register"} className='text-blue-500'>Register Here</Link>
        </p>
        <br />

        {/* Error */}
        {error && <p className='text-red-500 text-center'>{error}</p>}
      </form>
    </div>

  )
}
