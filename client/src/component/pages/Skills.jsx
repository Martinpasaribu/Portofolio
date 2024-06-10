import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import penyangga from '../../assets/Tols/penanggah.png'
import penyangga2 from '../../assets/Tols/penyangga.png'
import lucu from '../../assets/gif/males.gif'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import html from '../../assets/logo/html.png'
import css from '../../assets/logo/css.png'
import php from '../../assets/logo/php.png'
import ui from '../../assets/logo/ui.png'
import iot from '../../assets/logo/iot.png'
import database from '../../assets/logo/databse.png'
import host from '../../assets/logo/host.png'
import cloud from '../../assets/logo/clude.jpg'
import data from '../../assets/logo/data.jpg'
import tailwind from '../../assets/logo/tailwind.png'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export const Skills = () => {

const [ setbar , setBar ] = useState (1)
const [ cekbar , setCekBar ] = useState (false)
const [ cekbar2 , setCekBar2 ] = useState (false)

const [activeSection, setActiveSection] = useState(null);

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;

      if (top >= offset && top < offset + height) {
        setActiveSection(sec.id);

      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const bartoggle = (a) => {

    setBar(a)
}

useEffect (() => {
    if(setbar === 1){
        setCekBar(true)
        setCekBar2(false)
    }else if (setbar === 2){
        setCekBar2(true)
        setCekBar(false)
    }

    // console.log(setbar)

},[ setbar ])



  return (
    <div className='overflow-hidden'>
        <div className='w-[23.7rem] dm:w-[65rem] dm:h-[60rem] h-[45rem] mx-auto '>
            <div className='relative flex flex-col  w-[23.7rem] dm:w-[65rem] h-[10rem] dm:h-[12rem]  text-white'>
                <div className='w-full h-[10px] bg-slate-400'></div>
                <img src={penyangga2} alt="" className='size-[8rem] w-[15rem] mx-auto ' />
                <section id='div1' className={` ${activeSection === 'div1' ? 'absolute animate-atas my-auto mx-auto  dm:px-8  ml-[5rem]  dm:ml-[19rem] top-[3.49rem] dm:top-[2rem]':'opacity-0'}`}>
                    <h1 className={` ${activeSection === 'div1' ? 'animate-swing   font-ConcertOne text-[1.7rem] dm:text-[2.8rem] px-5  bg-biru rounded-lg':'opacity-0'}`}>MY Skills</h1>
                </section>
            </div>
            <div className='flex w-[23.7rem] dm:w-[65rem] h-[24rem] dm:h-[45rem] '>
                <div className='w-screen '>
                     { cekbar && (
                        <div className='flex flex-col font-ConcertOne'>
                            <div className='ml-5 w-[10rem] dm:w-[10.1rem] px-auto py-1 dm:text-lg text-biru  rounded-lg shadow-bayang  dark:bg-slate-400 dark:text-white'>
                                <h1 className=' '>Website Developer </h1>
                            </div>
                            <div className='flex flex-col dm:grid dm:grid-cols-2 dm:gap-y-[4rem] gap-y-[1rem] dm:pt-20 gap-x-2 dark:text-white'>
                                <div className='animate-geser1 flex justify-center  h-[5rem] items-center space-x-10 dm:text-xl hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>JavaScript</h1> <IoLogoJavascript className=' w-[3rem] h-[3rem] dm:w-[5rem] dm:h-[5rem] text-yellow-400'/> </div>
                                <div className='animate-geser2 flex justify-center  items-center space-x-10 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang '> <h1> React JS</h1> <FaReact className='w-[3rem] h-[3rem] dm:w-[5rem] dm:h-[5rem] text-react'/> </div>
                                <div className='animate-geser3 flex justify-center  items-center space-x-10 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>PHP </h1> <img src={php} alt="" className='w-[4rem] h-[3rem] dm:w-[5.5rem] dm:h-[4rem]'/>  </div>
                                <div className='animate-geser4 flex justify-center  items-center space-x-10 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>HTML </h1> <img src={html} alt="" className='w-[3.5rem] h-[3.5rem] dm:w-[5rem] dm:h-[5rem]'/></div>
                                <div className='animate-geser5 flex justify-center  items-center space-x-10 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>CSS</h1> <img src={css} alt="" className='w-[3.5rem] h-[3.5rem] dm:w-[5rem] dm:h-[5rem]'/></div>
                                <div className='animate-geser6 flex justify-center  items-center space-x-10 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>Tailwind</h1> <img src={tailwind} alt="" className='w-[4rem] h-[3rem] dm:w-[6rem] dm:h-[4rem]'/></div>
                            </div>
                        </div> 
                     )}
                     { cekbar2 && (
                        <div className='flex flex-col font-ConcertOne'>
                            <div className='ml-5 w-[9.1rem] dm:w-[10.1rem] dm:text-lg text-biru my-4 rounded-lg shadow-bayang px-2 dark:bg-slate-400 dark:text-white'>
                                <h1 className=''>Lainya</h1>
                            </div>
                            <div className='flex flex-col dm:grid dm:grid-cols-2 dm:gap-y-[4rem] gap-y-[1rem] dm:pt-20 gap-x-2 dark:text-white '>
                                <div className='animate-geser1 flex justify-center  items-center space-x-10 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>UI/UX</h1> <img src={ui} alt="" className='w-[4rem] h-[3rem] dm:w-[9.5rem] dm:h-[7rem]'/> </div>
                                <div className='animate-geser2 flex justify-center  items-center space-x-2 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>Sistem Tertanam</h1> <img src={iot} alt="" className='w-[4rem] h-[3rem] dm:w-[9.5rem] dm:h-[7rem]'/>  </div>
                                <div className='animate-geser3 flex justify-center  items-center space-x-8 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>Data Analis </h1> <img src={data} alt="" className='w-[4rem] h-[3rem] dm:w-[5.5rem] dm:h-[4rem]'/>  </div>
                                <div className='animate-geser4 flex justify-center  items-center space-x-0 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>Database SQL & NoSQL </h1> <img src={database} alt="" className='w-[3.5rem] h-[3.5rem] dm:w-[5rem] dm:h-[5rem]'/></div>
                                <div className='animate-geser5 flex justify-center  items-center space-x-10 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>Hosting</h1> <img src={host} alt="" className='w-[3.5rem] h-[3.5rem] dm:w-[5rem] dm:h-[5rem]'/></div>
                                <div className='animate-geser6 flex justify-center  items-center space-x-10 dm:text-xl h-[5rem]  hover:border  hover:scale-105 duration-300 hover:shadow-bayang'> <h1>Cloud server</h1> <img src={cloud} alt="" className='w-[4rem] h-[3rem] dm:w-[6rem] dm:h-[4rem]'/></div>
                            </div>
                        </div> 
                     )}
                     <div className=' group  flex justify-between items-end dm:space-x-2 dm:pt-[5rem] pr-4 '>
                        <button onClick={() => { bartoggle(1); }} className='flex justify-center items-center rounded-md border-2 dm:w-[6rem] focus:animate-jump h-[2.5rem]' ><GrFormPrevious className=' text-biru m-auto w-[2.5rem] h-[2.5rem] dm:w-[3rem] dm:h-[2rem]'/><h1 className='mr-[1rem] dark:text-white'>Prev</h1></button>
                        <button onClick={() => { bartoggle(2); }} className='flex justify-center items-center rounded-md border-2 dm:w-[6rem] focus:animate-jump h-[2.5rem]'><h1 className='ml-[1rem] dark:text-white'>Next</h1> <MdNavigateNext className=' text-biru m-auto w-[3rem] h-[2.5rem] dm:w-[3rem] dm:h-[2rem]'/></button>
                    </div>
                </div>
                <div className='dm:w-[50rem] w-[18rem] pt-10'>
                    <img src={lucu} alt="" className='size-[10rem] dm:size-[20rem]' />

                </div>
            </div>
        </div>
    </div>
  )
}
