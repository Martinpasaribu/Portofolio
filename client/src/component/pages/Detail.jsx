import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../Url'
import aek from '../../assets/image.png'
import { FaMobileAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

export const Detail = () => {

  const [products, setProducts] = useState([]);
  const {id} = useParams();



  useEffect(() => {
    getProduct();
    return () => {
      
    }
  },[] );

  const getProduct = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/${id}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };



  return (
    <div className='overflow-hidden'>
  
        <div className='w-[23.7rem] dm:w-[65rem] h-screen mx-auto mt-5'>    
            <div className='dm:flex h-[32rem] w-[23.7rem] dm:w-[65rem] space-y-8'>
                <div className='flex w-full dm:w-full h-[17rem] dm:h-full '>
                    <img src={products.gambar} alt="" className='w-[22rem] h-[17rem] dm:w-[34rem] dm:h-[24rem] m-auto'/>
                </div>
                <div className='w-full dm:w-[45rem] h-[12rem] dm:h-full dm:space-y-4 '>
                  <div className='hidden dm:flex justify-center items-center gap-4 dm:h-[5rem] bg-gray-100 h-[5rem] rounded-lg'>
                    <h1 className='w-[15rem] text-biru font-serif font-bold text-xl'>{products.judul} </h1>
                    <a href={products.link} className='w-[5rem] bg-biru rounded-xl text-center text-white font-serif font-bold py-1'><h1>SITE</h1></a>
                  </div>
                  <div className='flex h-full dm:h-0 justify-around'>
                    <div className='flex dm:h-full w-1/2 dm:w-full '>
                      <div className='space-y-5 w-[6.5rem] dm:w-1/2  dm:h-[15rem] '>
                        <div className='w-[6rem] dm:w-[10rem] mx-auto space-y-2'>
                          <h1 className=' text-center dm:mx-1 text-biru'>Technology</h1>
                          <div className='text-[12px] dm:text-[1rem] pl-2'>
                            <h1>
                            {products && products.teknologi ? (
                              <ul>
                                {products.teknologi.split(',').map((item, index) => (
                                  <li key={index}>{item.trim()}</li>
                                ))}
                              </ul>
                            ) : ''}
                            </h1>
                          </div>
                        </div>
                        <div className='w-[6rem] dm:w-[10rem] mx-auto space-y-2'>
                          <h1 className=' text-center dm:mx-1 text-biru'>Framework</h1>
                          <div className='text-[12px] dm:text-[1rem] pl-2'>
                          <h1>
                          {products && products.framework ? (
                            <ul>
                              {products.framework.split(',').map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                              ))}
                            </ul>
                          ) : ''}
                          </h1>
                          </div>
                        </div>
                      </div>
                      <div className='dm:w-1/2  dm:h-[15rem] mx-auto space-y-2 pl-2'>
                        <h1 className=' text-center dm:mx-1 text-biru'>Other</h1>
                        <div className='text-center text-[12px] dm:text-[1rem]'>
                          <h1>
                          {products && products.other ? (
                            <ul>
                              {products.other.split(',').map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                              ))}
                            </ul>
                          ) : ''}
                          </h1>
                        </div>
                      </div>
                    </div>
                    
                    <div className='dm:hidden   space-y-12 w-1/2'>
                      <div className=' flex flex-col items-center justify-center  gap-4 dm:h-[5rem] '>
                        <h1 className='text-biru'>Responsive</h1>
                        <div > 
                          { products.responsive === 'PC' && (

                            <RiComputerLine /> 
                          )}
                          { products.responsive === 'Mobile' && (
                            <FaMobileAlt /> 
                         
                          )}
                          { products.responsive === 'Both' && (
                            <div className='flex gap-5'>
                            <FaMobileAlt /> 
                            <RiComputerLine /> 
                            </div>
                         
                          )}

                 
                        </div>
                      </div>
                      <div className='flex flex-col  justify-center items-center gap-4 dm:h-[5rem] bg-gray-100 h-[5.5rem] rounded-lg '>
                        <h1 className='w-[12rem] text-center text-biru font-serif font-bold'>{products.judul}</h1>
                        <a  href={products.link} className=' w-[4rem] bg-biru rounded-lg text-white text-center font-serif font-bold py-1'><h1>SITE</h1></a>
                      </div>
                    </div>
                                  
                  </div>
                </div>
            </div>
            <div className='w-[23.7rem] dm:w-[65rem]  h-1/3 '>
              <h1 className='p-7'>{products.keterangan}</h1>
            </div>
        </div>

    </div>
  )
}
