import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../Url'


import { IoSchoolSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { MdHail } from "react-icons/md";
import { Link } from 'react-router-dom';

import kursus from '../../assets/kursus.png'
import { MdVerified } from "react-icons/md";
import { MdOutlineNotInterested } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { GiToolbox } from "react-icons/gi";
import { ImAndroid } from "react-icons/im";
import { FaBlogger } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { RxCodesandboxLogo } from "react-icons/rx";
export const Portofolio = () => {

    const [showIntro, setShowIntro] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [clicked5, setClicked5] = useState(false);
    const [clicked6, setClicked6] = useState(false);
    const [clicked7, setClicked7] = useState(false);
    const [clicked8, setClicked8] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [resetElement, setResetElement] = useState(false);


    const [set, setSet] = useState('');
    const [products, setProducts] = useState([]);
    const [hasil, setHasil] = useState([]);
    const [items, setItems] = useState(null)
    

    useEffect(() => {
        getProduct();
        handlehasil()
        // console.log('items',items)

      }, [items,set]);
    // }, [items],[set]); Tidak bisa sekali dua
      useEffect(() => 
      {
         // Reset elemen ketika nilai hasil berubah
         if(resetElement === false){
        //    setTimeout (() =>{
            setResetElement(true)
        //    },0)
         }
       
        // console.log('test =',resetElement)
      });
      
      const handle = () => {
        setResetElement(false)  
        // console.log('test 2 ;',resetElement)
}
      
    const handlehasil = () => {
 
        const tampung = products.filter(items => items.kategoriid === set)
        setHasil(tampung)

    }



  const handleClick = (a) => {
    setSet(a);
 
  };


  const getProduct = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product`);
      setProducts(response.data);
      const a = products.length
        setItems(a)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  // Banyak Dont click
  useEffect(() => {

    if (set === 'Education') {
      setClicked(true);
      setClicked2(false);
      setClicked3(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
      setClicked7(false);
      setClicked8(false);
      
    } else if (set == 'e-commerce') {
        setClicked(false);
        setClicked2(true);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
      setClicked8(false);
    } else if (set == 'Portofolio') {
        setClicked(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(true);
        setClicked6(false);
        setClicked7(false);
      setClicked8(false);
    } else if (set == 'UI/UX') {
        setClicked(false);
        setClicked2(false);
        setClicked3(true);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
      setClicked8(false);
    } else if (set == 'Aplication') {
        setClicked(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(true);
      setClicked8(false);
    } else if (set == 'Blog') {
        setClicked(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(true);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
      setClicked8(false);
    } else if (set == 'Tools') {
        setClicked(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(true);
        setClicked7(false);
        setClicked8(false);
    } else if (set == 'Lain') {
        setClicked(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
        setClicked5(false);
        setClicked6(false);
        setClicked7(false);
        setClicked8(true);
    } else {
      console.log('error');
    }
  }, [set]);
  

  return (
    <div className='overflow-hidden'>
        <div className='w-[23.7rem] dm:w-[65rem] h-screen mx-auto'>
            <div className='w-[23.7rem] dm:w-[65rem] h-1/4 pt-10'>
                <div className='w-full h-[3rem] dm:h-[5rem]'>
                    <div className='w-full h-[5px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink' ></div>
                    <div className='flex justify-between'>
                    <h1 className='my-2 dm:my-4 ml-4 dm:text-xl font-Montserrat font-bold'> MY PORTOFOLIO</h1>
                    <div className='flex'>
                        <h1 className='m-auto text-[.7rem] dm:text-[.9rem]'>{items} Items</h1>
                    </div>
                    </div>
                </div>
                <div className='overflow-auto text-biru'>
                    <div className='flex py-1 dm:justify-center w-full  animate-fadeIn h-[2rem] dm:h-[2rem] gap-x-2.5 dm:gap-2 px-2 dm:w-full text-[10px] dm:text-[16px] bg-gray-100 bg-opacity-50 '>
                        <div className={`flex justify-center items-center gap-2 px-2  ${clicked ? 'bg-slate-200' : ''}`}>
                            <button className='w-[4rem] dm:w-[6rem] ' onClick={() => {  handleClick('Education'); handle();  }} >
                            Education 
                            </button>
                            <MdHail />
                        </div> 
                        <div className={`flex justify-center  items-center gap-2 px-2   ${clicked2 ? 'bg-slate-200' : ''}`}>
                            <button className='w-[4rem] dm:w-[6rem] ' onClick={() => { handleClick('e-commerce');  handle();}}  >
                            E-commerce 
                            </button>
                            <IoSchoolSharp />
                        </div>
                        <div className={`flex justify-center items-center gap-2 px-2 ${clicked3 ? 'bg-slate-200' : ''}`}>
                            <button className='w-[2rem] dm:w-[4rem] ' onClick={() => {  handleClick('UI/UX'); handle() }} >
                            UI/UX 
                            </button>
                            <RxCodesandboxLogo />
                        </div>
                        <div className={`flex justify-center items-center gap-2 px-2 ${clicked4 ? 'bg-slate-200' : ''}`}>
                            <button className='w-[2rem] dm:w-[4rem] ' onClick={() => { handleClick('Blog'); handle() }} >
                            Blog 
                            </button>
                            <FaBlogger />
                        </div>
                        <div className={`flex justify-center items-center gap-2 px-2 ${clicked5 ? 'bg-slate-200' : ''}`}>
                            <button className='w-[4rem] dm:w-[6rem] ' onClick={() => {  handleClick('Portofolio'); handle() }} >
                            Portofolio 
                            </button>
                            <CgWebsite />
                        </div>
                        <div className={`flex justify-center items-center gap-2 px-2 ${clicked6 ? 'bg-slate-200' : ''}`}>
                            <button onClick={() => {  handleClick('Tools'); handle()}} >
                            Tools 
                            </button>
                            <GiToolbox />
                        </div>
                        <div className={`flex justify-center items-center gap-2 px-2 ${clicked7 ? 'bg-slate-200' : ''}`}>
                            <button onClick={() => {  handleClick('Aplication'); handle() }} >
                            Aplication 
                            </button>
                            <ImAndroid />
                        </div>
                        <div className={`flex justify-center items-center gap-2 px-2 ${clicked8 ? 'bg-slate-200' : ''}`}>
                            <button onClick={() => {  handleClick('Lain'); handle() }} >
                            Lainya 
                            </button>
                            <FaAward />
                        </div>

                    </div>
                    <h1 className=' dm:hidden fixed right-2 text-sm animate-pulse text-gray-300'>swipe</h1>
                </div>
            </div>
            <div className='w-[23.7rem] dm:w-[65rem] dm:h-[55rem] overflow-auto '>
            

                <div className={`h-full grid grid-cols-2  dm:grid-cols-3 gap-4 py-4 px-2  `}>
                { hasil && hasil.map((item) => (
                <div className={`w-[11rem] h-[16rem] dm:w-[20rem] dm:h-[26rem] py-3 bg-gray-100 bg-opacity-50 rounded-xl  ${resetElement ? 'animate-fadeIn ' : ' opacity-0'}  `}>
                    <img src={item.gambar} alt="" className='mx-auto h-[10rem] dm:h-[16.5rem] rounded-t-lg'/>
                    <div className='h-1/3 flex flex-col justify-center items-enter  text-black'>
                        <div className='h-[6rem] dm:h-[5rem]  w-full flex dm:justify-center justify-center pt-2 gap-x-2'>
                            <div className='flex flex-col justify-center items-center dm:gap-2 h-[2rem] dm:h-[4rem] gap-1 dm:w-[6.5rem]'>
                                <p className='text-[9px] dm:text-[12px]  text-ungu px-2 '>Responsive</p>
                                <div className='flex items-center space-x-1'>
                                    <div className='flex'><MdVerified className='text-biru size-3 dm:size-4'/> <RiComputerLine className=' size-3 dm:size-4'/> </div>
                                    <div className='flex'> <MdOutlineNotInterested className='text-red size-3 dm:size-4' /><FaMobileAlt className='size-3 dm:size-4'/> </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center h-[2rem] sm:h-[4rem] dm:w-[6.5rem] dm:gap-1'>
                                <p className='text-[9px] dm:text-[12px] text-ungu px-1'>Tecnology</p>
                                <div className='text-[12px] dm:text-[12px]'> 
                                    <div className='flex justify-center items-center dm:w-[6rem] gap-1'>
                                        <p>Javascript</p> <IoLogoJavascript className='size-3 dm:size-4 text-yellow-500 bg-black'/>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className='h-1/3 w-full flex justify-center items-center gap-8 dm:gap-14 text-white font-Montserrat '>
                            <Link to={`/detail/${item.uuid}`}><button className='bg-ungu dm:px-4 dm:text-[1.2rem] dm-y-1 px-2 rounded-lg'>Detail</button></Link>
                            <a href={item.link}><button className='bg-pink dm:px-6 dm:text-[1.2rem] dm-y-1 px-3 rounded-lg'>Site</button></a>
                           
                        </div>
                    </div>
                  </div>
                  ))}
                </div>
                
                


            </div>
        </div>
    </div>
  )
}
