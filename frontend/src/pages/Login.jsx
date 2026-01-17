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
    <div className='w-full h-screen flex justify-center items-center bg-blue-100'>

        <form onSubmit={handleForm}  className=' border bg-white flex flex-col p-5 rounded-2xl'>
            <h1 className=' text-3xl font-bold text-center font-mono text-blue-500'>LOGIN</h1>
            <br />
            <br />
            <label htmlFor="email" 
            className=' text-lg font-medium'
            >Email :</label>
            <br />
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
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
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
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
            <br />
            {
              error && <p className=' text-red-500' >{error}</p>
            }
        </form>
    </div>
  )
}
