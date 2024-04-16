import React, { useState, useEffect } from 'react';
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import dark1 from '../../assets/icons/dark2.png'

import { Button } from "@material-tailwind/react";
 


export const Darkmode = () => {
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
  };

  return (
    <div className={` ${darkMode ? 'dark':'bg-coba bg-no-repeat bg-cover'}`}>
      <div className='overflow-hidden pt-[3rem] dm:m-auto h-screen dark:bg-slate-700 transition duration-1000 '>
        <div className='flex flex-col space-y-2 dm:space-y-1 justify-center items-center dm:w-[66rem] dm:h-screen dm:mx-auto dm:font-Montserrat'>
          <Button onClick={toggleDisplayMode} className='bg-ungu dm:px-3 px-2 py-1 rounded-lg normal-case text-[15px] font-Montserrat text-white animate-lompat border'>
            <p>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
          </Button>
          <input
            class="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault01" />

            <div className=' flex justify-center w-[5rem] md:w-[12rem] md:ml-20 md:mt-10' >
                    
                    <label className=' relative inline-flex cursor-pointer select-none items-center'>
                        <input
                        type='checkbox'
                        name='autoSaver'
                        className='sr-only'
                        checked={isChecked}
                        onChange={toggleDisplayMode}
                       
                        />
                        <div className='md:flex'>
                        <span
                        className={`slider mr-3 flex h-[1.5rem] md:h-[26px] w-[3rem] md:w-[50px] items-center rounded-full p-1 duration-200 ${
                            isChecked ? 'bg-white' : 'bg-black'
                        }`}
                        >
                        <span
                            className={`  h-[1rem] md:h-[18px] w-[1rem] md:w-[18px] rounded-full dark:bg-black bg-white duration-200 ${
                            isChecked ? 'translate-x-6 ': 'bg-black'
                            }`}
                        ></span>
                        </span>
                        <span className='label flex items-center text-sm font-medium text-black dark:text-white '>
                        Mode <span className='pl-2'>
                        
                        {isChecked ? (
                          <div>
                            <img src={dark1} alt="" className='size-5' />
                          </div>

                        ):(
                          <div>
                            <MdOutlineLightMode className='size-5'/>
                          </div>
                        )} 
                        </span>
                        </span>
                        <div></div>

                        </div>
                    </label>
                </div>
        </div>
      </div>
    </div>
  );
};

