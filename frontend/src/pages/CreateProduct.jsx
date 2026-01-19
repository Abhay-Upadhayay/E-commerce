import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateProduct = () => {
    const navigate = useNavigate();
    const [productImages, setProductImages] = useState([]);
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("General");
    const [forWhom, setForWhom] = useState("Everyone");
    const [ind, setind] = useState(0);

    const maxImages = 10;
    const handleImages = (e)=>{
        const files = Array.from(e.target.files);

        if(files.length> maxImages){
            alert(`You can upload a maximum of ${maxImages} images`);
            return;
        }

        setProductImages(files);

        e.target.value = null;
    }

    const removeImage = (index)=>{
        setProductImages((prev) => {
        const newImages = prev.filter((_, i) => i !== index);

    
        setind((prevInd) => {
            if (newImages.length === 0) return 0;
            if (prevInd >= newImages.length) return newImages.length - 1;
            return prevInd; 
            });

            return newImages;
        });

        if (productImages.length === 0) {
            document.getElementById("images").value = null;
        }
    }
    
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-blue-100 p-4'>
        <form className='border bg-white flex flex-col p-4 md:p-6 rounded-2xl w-full max-w-6xl'>
            <h1 className='text-3xl font-bold text-center font-mono text-blue-500'>CREATE PRODUCT</h1>
            

           <div className='flex flex-col md:flex-row justify-between gap-5'>
             {/* Left Column - Images */}
             <div className='flex-1'>
                <h2 className='text-lg font-medium'>Product Images :</h2>
                <div className='flex flex-col'>
                    <label htmlFor="images" className='border p-2 text-center bg-gray-200 rounded-2xl cursor-pointer'>Upload Images/Images</label>
                    <input
                    type="file" accept='image/*' id="images" name='images' multiple className='hidden'
                    onChange={handleImages}/>
                    <p className='text-sm mt-1'>{productImages.length}/{maxImages} are selected.</p>
                </div>
                <br />
                <div className='preview border w-full h-64 md:h-80 lg:h-96 flex flex-col justify-center items-center'>
                    {(productImages.length === 0) && <p>Image Preview</p>}
                   {productImages.length > 0 && (
                        <>
                            <div className='w-full h-48 md:h-64 lg:h-72 flex justify-center items-center'>
                            
                            {productImages[ind] && productImages[ind] instanceof File && (
                                <img
                                src={URL.createObjectURL(productImages[ind])}
                                alt="Preview"
                                className='max-w-full max-h-full object-contain bg-black rounded-xl'
                                />
                            )}
                            </div>
                            <p className='text-center mt-1'>{ind+1}</p>

                            <div className='flex justify-center items-center gap-2 mt-3 flex-wrap'>
                            <button type='button'
                                onClick={() =>
                                setind((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))
                                }
                                className='bg-blue-500 text-white font-medium px-3 py-1 rounded-2xl'
                            >
                                Prev
                            </button>

                            <button type='button'
                                onClick={() => {removeImage(ind)
                                    const newLength = productImages.length - 1;
                                    if (newLength <= 0) return 0; 
                                    return prev >= newLength ? newLength - 1 : prev;
                                }}
                                className='bg-red-400 text-white font-medium px-3 py-1 rounded-2xl'
                            >
                                Delete
                            </button>

                            <button type='button'
                                onClick={() =>{
                                setind((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))
                                }}
                                className='bg-blue-500 text-white font-medium px-3 py-1 rounded-2xl'
                            >
                                Next
                            </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Right Column - Product Details */}
            <div className='flex-1 mt-6 md:mt-0'>
                <label htmlFor="title" className='text-lg font-medium'>Title :</label>
                <input
                onChange={(e)=>{ setTitle(e.target.value); }}
                type="text" id='title' maxLength={200} className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'/>
                
                <br /><br />

                <label htmlFor="price" className='text-lg font-medium'>Price(INR) :</label>
                <input 
                onChange={(e)=>{ setPrice(e.target.value); }}
                type="number" id='price' className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'/>
                <br /><br />

                <label htmlFor="discription" className='text-lg font-medium'>Discription :</label>
                <textarea
                onChange={(e)=>{ setDiscription(e.target.value); }}
                id='discription' maxLength={1000} className='w-full border rounded-lg px-2 text-lg focus:outline-none mt-1' rows={4}></textarea>
                <br />

                <label htmlFor="category" className='text-lg font-medium'>Select category :</label>
                <select
                onChange={(e)=>{ setCategory(e.target.value); }}
                name="category" id="category" className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'>
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
                <br /><br />

                <label htmlFor="for" className='text-lg font-medium'>For</label>
                <select
                onChange={(e)=>{ setForWhom(e.target.value); }}
                name="for" id="for" className='w-full h-10 border rounded-lg px-2 text-lg focus:outline-none mt-1'>
                    <option value="everyone">Everyone</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <br />

                <div className='flex justify-end gap-4 mt-4 flex-wrap'>
                    <button
                    type='button'
                    className='bg-red-500 text-white font-medium px-3 py-1 rounded-2xl'
                    onClick={()=>{ navigate("/"); }}
                    >Cancel</button>
                    <button type='submit'
                    className='bg-blue-500 text-white font-medium px-3 py-1 rounded-2xl'
                    >Create</button>
                </div>
            </div>
           </div>
        </form>
    </div>
  )
}
