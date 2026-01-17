import React from 'react'

export const CreateProduct = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-100'>
        <form  className=' border bg-white flex flex-col p-5 rounded-2xl'>
            <h1 className=' text-3xl font-bold text-center font-mono text-blue-500'>CREATE PRODUCT</h1>
           
            <br />
            <br />

           <div className='container flex justify-between '>
             <div className=''>
                <label htmlFor="images" className=' text-lg font-medium'>Product Images :</label>
                <br />
                <div className='border  '>
                    <input type="file" accept='image/*' id="images" name='images' multiple className='border px-2 '/>
                </div>
            </div>
            <div>

            
            <label htmlFor="title" className=' text-lg font-medium'>Title :</label>
            <br />
            <input type="text"  id='title' maxLength={200} className=' w-100 h-8 border rounded-lg px-1 text-lg focus:outline-none'/>
            <br />

            <label htmlFor="price" className=' text-lg font-medium'>Price(INR) : </label>
            <br />
            <input type="numbers" id='price' className=' w-100 h-8 border rounded-lg px-1 text-lg focus:outline-none'/>
            <br />

            <label htmlFor="discription" className=' text-lg font-medium'>Discription :</label>
            <br />
            <textarea type="text" id='discription' maxLength={1000} className=' w-100 h-lg border rounded-lg px-1 text-lg focus:outline-none ' rows={4} cols={50} ></textarea>
            <br />

            <label htmlFor="category" className=' text-lg font-medium'>Select category :</label>
            <br />
            <select name="category"  id="category" className=' w-100 h-8 border rounded-lg px-1 text-lg focus:outline-none'>
                <option value="General">General</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing & Apparel">Clothing & Apparel</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                <option value="Books & Stationery">Books & Stationery</option>
                <option value="Sports & Outdoors">Sports & Outdoors</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Automotive">Automotive</option>
                <option value="Grocery & Food">Grocery & Food</option>
                <option value="Health & Fitness">Health & Fitness</option>
            </select>
            <br />

            <label htmlFor="for" className=' text-lg font-medium'>For</label>
            <br />
            <select name="for" id="for" className=' w-100 h-8 border rounded-lg px-1 text-lg focus:outline-none'>
                <option value="everyone">Everyone</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
            </select>
            <br />
            
            <div>
                <button type='submit'>Create</button>
                <button>Cancel</button>
            </div>
            </div>
           </div>
        </form>
    </div>
  )
}
