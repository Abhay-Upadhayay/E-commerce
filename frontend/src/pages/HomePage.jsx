import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { ProductCard } from '../components/productCard'
import { useEffect , useState } from 'react'
import axios from 'axios'
import config from '../config/config'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => { 

  const navigate = useNavigate()

  const [productData, setProductData] = useState([]);
  

  useEffect(() => {
    getProductData();
    
  }, [])

  const getProductData = ()=>{

    axios.get(`${config.BASE_API}/product/getAllProducts`)
    .then((res)=>{
      setProductData(res.data.productData);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  

  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <div className='flex flex-col items-center'>
        <div className=' py-10 px-5 flex justify-center flex-wrap gap-10 '>
          { productData.slice(0,4).map((product , ind)=>{
            return(<ProductCard
            key={ind}
            product={product}
            ></ProductCard>)}
          ) }
        </div>

        <button onClick={()=>{navigate("/getAllProducts")}}
        type='button' className='font-bold bg-blue-500 px-3 py-1 rounded-lg mt-5 mb-10 text-white text-2xl hover:shadow-[0px_0px_2px_1px_black] hover:scale-110 transform duration-500' >See All Products</button>

        <Footer></Footer>
        </div>
    </>
  )
}
