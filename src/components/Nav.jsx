import React from 'react'
import logo from '../img/logo.svg';

const Nav = (props) => {
  return (
    <div className={`flex justify-between py-4 shadow-md ${props.darkMode ? 'bg-[#21222A]' : 'bg-[#ffffff]'}`}>
      <div className='flex text-[#00ABCA] md:mx-24'>
        <img 
          src={logo} 
          className='w-16 md:w-32'
          alt='react image logo'
        />
        <h2 className='self-center text-xl font-bold md:text-4xl'>ReactFacts</h2>
      </div>
      <div className='flex self-center mx-2 text-xs font-bold md:mx-32 md:text-lg'>
        <p className='text-[#ffffff]'>Light</p>
        <div
          onClick={props.handleClick} 
          className={`w-8 h-4 mx-2 rounded-md cursor-pointer md:w-12 md:mx-4 md:h-6 transition-all duration-500 ${props.darkMode ? ' bg-[#f5f5f5]' : 'bg-[#282D35]'}`}>
          <div className={`w-4 h-4 rounded-full md:w-6 md:h-6 transition-all duration-500 ${props.darkMode ? 'float-right bg-[#282D35]' : 'float-left bg-white'}`}></div>
        </div>
        <p className='text-[#21222A]'>Dark</p>
      </div>
    </div>
  )
}

export default Nav