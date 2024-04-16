import React, { useState, useEffect } from 'react';

import { Navbar } from '../element/Navbar'
import { Footer } from '../element/Footer'
import { Home } from '../pages/Home'
import { Skills } from '../pages/Skills'
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import dark1 from '../../assets/icons/dark2.png';

 

export const Layout = ({children}) => {

  const [darkMode, setDarkMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    let saveMode = localStorage.getItem("displayMode");
    if (!saveMode) {
      saveMode = 'light';
      localStorage.setItem("displayMode", saveMode);
    }
    setIsChecked(saveMode === 'dark');
    setDarkMode(saveMode === 'dark')
    
  }, []);

   const toggleDisplayMode = () => {
    const newMode = darkMode ? 'light' : 'dark';
    setDarkMode(newMode === 'dark');
    localStorage.setItem("displayMode", newMode);
    setIsChecked(!isChecked)

    // return { darkMode }
    
  };


  return (
    <div className={`${darkMode ? 'dark ':''}`}>
      <div className={`overflow-hidden  dm:m-auto dark:bg-black dark:transition dark:duration-500 `}>
        {/* Ini tombolnya */}
        <div className='flex justify-end items-center w-full h-[2rem]  dm:h-[3rem] dm:w-[66rem] dm:mx-auto dm:font-Montserrat'>
          <div className=' flex justify-center w-[9rem] dm:w-[8rem]' >
                          
                          <label className=' relative inline-flex cursor-pointer select-none items-center '>
                              <input
                              type='checkbox'
                              name='autoSaver'
                              className='sr-only'
                              checked={isChecked}
                              onChange={toggleDisplayMode}
                            
                              />
                              <div className='md:flex flex  items-center'>
                              <span
                              className={`slider mr-3 flex h-[1rem] md:h-[26px] w-[2.5rem] md:w-[50px] items-center rounded-full dm:p-1 duration-200 ${
                                  isChecked ? 'bg-white' : 'bg-footer'
                              }`}
                              >
                              <span
                                  className={`  h-[.8rem] md:h-[18px] w-[.8rem] md:w-[18px] rounded-full dark:bg-footer bg-white duration-200 ${
                                  isChecked ? 'translate-x-6 ': 'bg-black'
                                  }`}
                              ></span>
                              </span>
                              <span className='label flex items-center text-sm font-medium text-black dark:text-white '>
                              Mode <span className='pl-2'>
                              
                              {isChecked ? (
                                <div>
                                  <img src={dark1} alt="" className='size-3 dm:size-5' />
                                </div>

                              ):(
                                <div>
                                  <MdOutlineLightMode className='size-3 dm:size-5'/>
                                </div>
                              )} 
                              </span>
                              </span>
                              <div></div>

                              </div>
                          </label>
          </div>
        </div>

      <Home />
      <Skills />
      <Footer />
      
      </div>
    </div>
  )
}
