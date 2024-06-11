import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../Url.js";
import { toast, Toaster } from 'react-hot-toast';


import martin from '../../assets/foto/martin.png'
import ungu from '../../assets/foto/ungu.png'
import biru from '../../assets/foto/biru.png'
import { IoSchoolSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { MdHail } from "react-icons/md";
import TypeIt from "typeit-react";
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import  Layout  from '../layout/Layout'
import { Textarea } from "@material-tailwind/react";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import indeed from '../../assets/logo/ind.png'
import glints from '../../assets/logo/glints.png'



export const Home = () => {

  // const { darkMode } = Layout()
  const [darkMode, setDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSerti, setShowSerti] = useState(false);
  const [set, setSet] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [showcontac, setShowContac] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [work, setWork] = useState(false);
  const [pesan, setPesan] = useState(null);
  const [email, setEmail] = useState(null);
  const [msg, setMsg] =useState("");

  useEffect(() => {

  if (set === 1) {
    setShowIntro(true);
    setShowEducation(false);
    setShowSerti(false);
    setClicked(true);
    setClicked2(false);
    setClicked3(false);
  } else if (set == 2) {
    setShowIntro(false);
    setShowEducation(true);
    setShowSerti(false);
    setClicked(false);
    setClicked2(true);
    setClicked3(false);
  } else if (set == 3) {
    setShowIntro(false);
    setShowEducation(false);
    setShowSerti(true);
    setClicked(false);
    setClicked2(false);
    setClicked3(true);
  } else {
    console.log('error');
  }
}, [set]);


  // Fungsi untuk menampilkan gambar kedua setelah 2 detik
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSecondImage(true);
    }, 2000);

    // Membersihkan timeout jika komponen di-unmount atau timeout tidak lagi diperlukan
    return () => clearTimeout(timeoutId);
  }, []); // Kosongkan array dependensi untuk memastikan efek hanya dijalankan sekali saat komponen dipasang

  const handleClick = (a) => {
    setSet(a);
  };

  useEffect(() => {
    const a = localStorage.getItem('displayMode')
    if(a === 'light'){
      setDarkMode(true)
    }else if(a === 'dark'){
      setDarkMode(false)
    }

  })


  const toggleShowContac = () => {
    setShowContac(!showcontac)
  }

  const toggleWork = () => {
    setWork(!work)
  }

  useEffect ( ()=> {
    

  },[])


  const saveUser = async (e) => {
    e.preventDefault();
    
      try {
        await axios.post(`${BASE_URL}/pesan`, { email: email, pesan: pesan });
        // Menampilkan toast loading sebelum request dikirim
        const promise = new Promise((resolve) => {
          setTimeout(resolve, 1000); // Mengatur timeout untuk menampilkan pesan loading selama 1 detik
        });

        // Menampilkan toast loading
        toast.promise(
          promise,
          {
            loading: 'Mengirim...', // Pesan loading
            success: <b>Pesan anda dikirim!</b>, // Pesan sukses
            error: <b>Could not save.</b>, // Pesan error
          }
        );

        setEmail('')
        setPesan('')
       
  } catch (error) {    
          if (error.response) {
        toast.error(error.response.data.msg);
          } 
        }
    }
  

  return (
<div className=''>
 <div className={`overflow-hidden  dm:m-auto  ${darkMode ? 'bg-coba bg-no-repeat bg-cover transition duration-500 ':'dark'}  dark:bg-black dark:transition dark:duration-2000  `}>

  <div className='flex flex-col space-y-2 dm:space-y-1  justify-center items-center dm:w-[66rem] dm:h-screen dm:mx-auto dm:font-Montserrat'>
    <div className=' flex flex-col dm:flex-row justify-center items-center dm:w-[60rem] dm:h-[29rem]'>
        <div className='dm:w-1/2 w-[15rem] dm:mr-10 flex relative mr-5 h-[17rem]  dm:h-[30rem] items-center'>
          <img src={ungu} alt="" className='w-[8rem] dm:w-[13rem] animate-atas mt-5 dm:mt-0] ml-2 dm:ml-20 ' />         
          <img src={biru} alt="" className='w-[10rem] dm:w-[14.8rem] mx-auto animate-bawah absolute ml-[3rem] dm:ml-[10rem] dm:mt-5' />
          {showSecondImage && (
        <img src={martin} alt="" className="animate-muncul absolute w-[11rem] dm:w-[17rem] top-[.1rem] dm:top-[1.95rem] left-[6rem] dm:left-[14rem]" />
          )}
          </div>
        <div className='space-y-3 dm:space-y-10 mt-4 dm:m-0 dm:w-[28rem] '>
          <div className='flex flex-col text-center dm:text-left w-full h-1/2 text- dm:text-[2rem] dm:gap-2 dark:text-ungu '>
            <h1 className='animate-atas'> Hello <span className='animate-fadeIn'></span> </h1>
            

            <div className="w-full  font-bold " >
                
                <TypeIt option={{ loop:true}} 
                getBeforeInit={(instance) => {
                    instance

                        .type("Martin " )
                        .pause(750)
                        .move(-13)
                        .pause(500)
                        .type("I am ")
                        .pause(750)
                        .move(13)
                        .pause(500)
                        .type("Pasaribu ")
            
                    // Remember to return it!
                    return instance;
                    }}
                />
            
                  </div>
          </div>
          <div className=' flex w-full gap-4 dm:gap-8 h-1/2 py-5 dm:text-lg text-[12px] font-Montserrat font-bold'>
            <Button color="red" className='bg-ungu dark:bg-biru dark:border-hidden dark:hover:shadow-xl dark:hover:shadow-biru dm:px-3 px-2 py-1  rounded-lg normal-case text-[15px] font-Montserrat  text-white animate-lompat '><Link to={'/portofolio'}> Portofolio</Link> </Button>
            <button onClick={toggleShowContac} className=' dm:px-3 px-2 py-1 rounded-lg text-black dark:text-white   text-[15px] animate-lompat2 hover:text-white  hover:border-white border-2 dark:border-gray-200 hover:dark:bg-white hover:dark:text-black hover:bg-black'><Link to={''}>Contac me</Link></button>
            <button onClick={toggleWork} className='hover:shadow-biru hover:shadow-bayang hover:animate-jump text-black dm:px-3 px-2 py-1 rounded-lg group'> <MdWork className=' w-[2rem] h-[2.1rem] text-cokelat'/>
                    <div className='hidden absolute inset-x-[-30px] mt-2 button-0 md:mt-[1rem]  group-hover:block group-hover:animate-kerja text-abu w-[7rem] h-[2rem] text-[15px] dm:mx-1 rounded-xl'>
                      Profile 
                    </div>

            </button>
            
            { work && (
              <div className=''>
                <div className='absolute inset-y-0 right-2 dm:right-[25rem] top-[17rem] lg:top-[20rem] grid  gap-4 content-between items-center dm:w-[10rem] dm:h-[8rem] w-[5rem] h-[6rem]'>
                <button className=' animate-bawah2 dm:animate-miringatas'><img src={indeed} alt="" className='w-[4rem] h-[1.7rem] dm:w-[5rem] dm:h-[2rem] mx-auto'/></button>
                <button className=' animate-bawah2 dm:animate-miringtengah'><img src={glints} alt="" className='w-[4rem] h-[2rem] dm:w-[5rem] dm:h-[2.6rem] mx-auto'/></button>
                <button className=' animate-bawah2 dm:animate-miringbawah'> <FaLinkedin className='w-[4rem] h-[1.5rem] dm:w-[5rem] dm:h-[2rem] mx-auto text-blue-700'/> </button>
                </div>
              </div>
            )}

          </div>
        </div>
    </div>
  <div className=' w-[23rem] h-[15rem] dm:w-[66rem] dm:h-[20rem] dm:pt-0 '>
  
    <div className='flex justify-center dm:justify-start animate-fadeIn h-[2rem] dm:h-[3rem] dm:pl-[4rem] dm:gap-8  dm:w-full bg-gray-300 dark:bg-slate-400 dark:bg-opacity-20 bg-opacity-20 text-[12px] dm:text-[20px]'>
      <div className={`flex justify-center items-center gap-2 px-2 hover:translate-y-[-8px] hover:bg-biru hover:bg-opacity-10 dark:hover:bg-opacity-0 transition-transform duration-500 transform dark:hover:translate-y-[-8px] dark:hover:shadow-bayang dark:rounded-lg dark:hover:shadow-ungu ${clicked ? 'bg-slate-200 dark:bg-gray-400 ' : ''}`}>
        <button onClick={() => { handleClick(1) }} className={` ${clicked ? 'dark:text-white' : 'dark:text-biru'}`} >
          introduce 
          </button>
          <MdHail className='dark:text-biru'/>
      </div> 
      <div className={`flex justify-center items-center gap-2 px-2 hover:translate-y-[-8px] hover:bg-biru hover:bg-opacity-10  dark:hover:bg-opacity-0 transition-transform duration-500 transform dark:hover:translate-y-[-8px] dark:hover:shadow-bayang dark:rounded-lg dark:hover:shadow-ungu ${clicked2 ? 'bg-slate-200 dark:bg-gray-400' : ''}`}>
      <button onClick={() => { handleClick(2) }} className={`${clicked2 ? 'dark:text-white' : 'dark:text-biru'}`} >
          Education 
          </button>
          <IoSchoolSharp className='dark:text-biru'/>
      </div>
      <div className={`flex justify-center items-center gap-2 px-2 hover:translate-y-[-8px] hover:bg-biru hover:bg-opacity-10  dark:hover:bg-opacity-0 transition-transform duration-500 transform dark:hover:translate-y-[-8px] dark:hover:shadow-bayang dark:rounded-lg dark:hover:shadow-ungu  ${clicked3 ? 'bg-slate-200 dark:bg-gray-400' : ''}`}>
      <button onClick={() => { handleClick(3) }} className={`${clicked3 ? 'dark:text-white' : 'dark:text-biru'}`} >
          Sertificate 
          </button>
          <FaAward className='dark:text-biru'/>
      </div>

    </div>
    <div  className='flex w-full justify-center items-center   '>

    {showIntro && (
      <div id='intro' className=' px-[1rem] w-full h-full dm:px-[4.5rem] py-4  text-justify text-[12px] dm:text-lg bg-gray-200 bg-opacity-30'>
        <p  className='dark:text-white'> Saya berusia 23 tahun dan saya memiliki spesialisasi dalam bidang Website developer, Database management, embedded systems, information systems and computer networks. Telah mendesain dan mengembangkan sistem untuk meningkatkan efisiensi kerja. Saya pernah aktif dalam kegiatan organisasi untuk memperkaya keterampilan kepemimpinan, manajemen waktu, dan komunikasi yang baik. </p>
      </div>
    )}
    {showEducation && (
      <div id='intro' className='flex flex-col px-[1rem]  dm:px-[4.5rem] w-full py-4  space-y-2 text-[12px] dm:text-lg bg-gray-200 bg-opacity-30  dark:text-white'>
        <div className=''>
          <p className='dark:text-white'>  Bachelor's degree at the Sumatra Institute of Technology </p>
          <p>  2019 - 2023  </p>
        </div>
        <p> Major : Informatics Engineering </p>
      </div>
    )}
    {showSerti && (
      <div id='intro' className='flex space-x-8 justify-end dm:justify-start w-full dm:space-x-10  dm:px-[5.5rem] py-4  text-[12px] dm:text-lg bg-gray-200 bg-opacity-30  dark:text-white'>
        <ul className='list-disc'>
          
          <li>Javascript </li>
          <li>React JS </li>
          <li>Node JS </li>
          <li>Vue Js </li>
          <li>PHP </li>
          

        </ul>
        <ul className='list-disc '>
          <li>Cyber Security </li>
          <li>Data Analyts</li>
          <li>Introduction SQL</li>
          <li></li>

        </ul>
        <p> 
            
            
            
            
            

        </p>
      </div>
    )}

    </div>
  </div>
  </div>

  {showcontac && (
      <div>
      <div onClick={toggleShowContac} className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"></div>
      <div><Toaster/></div>

        <form onSubmit={saveUser} className=' absolute inset-x- dm:inset-x-0 top-[5rem] flex flex-col space-y-2 dm:space-y-5 justify-center items-center w-[23rem] h-[23rem] dm:w-[32rem] dm:h-[23rem] dm:mx-auto dm:font-Montserrat bg-white rounded-lg animate-contac '>
          <div>{msg}</div>
        <div className='flex justify-around w-[18rem] dm:w-[18.2rem] h-10 dm:h-[2rem] mb-[2rem]'>
          <FaInstagram className='w-[1.4rem] h-[2rem]'/>
          <FaXTwitter className=' w-[1.4rem] h-[2rem]' />
          <FaFacebook className=' w-[1.5rem] h-[2rem] '/>
          <BiLogoGmail className=' w-[1.6rem] h-[2.1rem] '/>
          
        </div>
        <div className="flex flex-col gap-y-">
            <label className=" mx-auto text-ungu"></label>
            <div className=" h-7">
                <input
                    placeholder='Email'
                    name="keterangan"
                    id="keterangan"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-[18rem] dm:w-[22rem] h-10 dm:h-[2rem] rounded-md border-solid border-2 border-ijo4 pl-2 '
                    required
                >
                </input>
            </div>
        </div>

        <div className="flex flex-col gap-y-3">
            <label className=" mx-auto text-ungu"></label>
            <div className=" h-7">
                <textarea
                    placeholder='Pesan'
                    name="keterangan"
                    id="keterangan"
                    cols="30"
                    rows="10"
                    value={pesan}
                    
                    onChange={(e) => setPesan(e.target.value)}
                    className='w-[18rem] h-20 dm:w-[22rem] dm:h-[6rem] rounded-md border-solid border-2 border-ijo4 pl-2 resize-none'
                >
                </textarea>
            </div>
        </div>

        <div className=''><button type='submit' className='w-[18rem] h-10 dm:w-[22rem] dm:h-10 text-white font-bold rounded-lg bg-ungu mt-16'><h1>Kirim</h1></button></div>

        </form>
      </div>

  )}

 </div>
 </div>
    

  )
}
