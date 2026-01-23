import React , {useEffect , useState} from 'react'
import { Navbar } from '../components/Navbar'
import { ProductCard } from '../components/productCard'
import axios from 'axios'
import config from '../config/config'

const ProductsPage = () => {
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
    <div className='overflow-hidden'>
        <Navbar></Navbar>
        
        <div className='pl-40 pb-20  w-screen grid grid-cols-3 gap-10 lg:mt-20  overflow-hidden  '>
            { productData.map((product , ind)=>{
                return(<ProductCard
                key={ind}
                product={product}
                ></ProductCard>)}
            ) }
        </div>

    </div>
  )
}

export default ProductsPage