import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import config from '../config/config'

export const Register = () => {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const [error, setError] = useState("")
    
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        
        axios.post(`${config.BASE_API}/user/register` , {username, email, password, role})
        .then((res)=>{
            localStorage.setItem("token" , `bearer ${res.data.token}`);
            localStorage.setItem("role", res.data.role);
            
            setUsername("")
            setEmail("")
            setPassword("")
            setRole("")

            navigate("/")
        })
        .catch((error)=>{
            setError(error.response.data.message);
        })

    }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-blue-100 p-4'>
  <form onSubmit={handleSubmit} className='border bg-white flex flex-col p-5 sm:p-6 md:p-7 rounded-2xl w-full max-w-md'>
    <h1 className='text-3xl font-bold text-center font-mono text-blue-500'>REGISTER</h1>
    <br />

    <label htmlFor="username" className='text-lg font-medium'>Username :</label>
    <input 
      type="text"
      id='username'
      placeholder='user123'
      value={username}
      onChange={(e)=> setUsername(e.target.value)}
      className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'
    />
    <br />

    <label htmlFor="email" className='text-lg font-medium'>Email :</label>
    <input 
      type="email"
      id='email'
      placeholder='xyz@gmail.com'
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'
    />
    <br />

    
    <label htmlFor="password" className='text-lg font-medium'>Password :</label>
    <input 
      type="password"
      id='password'
      placeholder='*******'
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'
    />
    <br />

    <label htmlFor="role" className='text-lg font-medium'>Role :</label>
    <select 
      value={role}
      onChange={(e)=> setRole(e.target.value)}
      name="role"
      id="role"
      className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'
    >
      <option>---select---</option>
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
    <br />

    <div className='flex justify-center items-center mt-4'>
      <button
        className='bg-blue-500 text-white text-lg sm:text-xl font-medium px-4 py-2 sm:px-6 sm:py-2 rounded-2xl w-full sm:w-auto'
      >
        Submit
      </button>
    </div>
    <br />

    <p className='text-center text-sm sm:text-base'>
      Already have an account? <Link to={"/login"} className='text-blue-500'>Login Here</Link>
    </p>
    <br />

    {error && <p className='text-red-500 text-center'>{error}</p>}
  </form>
</div>

  )
}
