import React from 'react'
import logo from '../img/logo.svg';

const Nav = (props) => {
  return (
    <div className={
      props.darkMode 
      ? 'bg-[#21222A] flex justify-between py-4 shadow-md' 
      : 'bg-[#ffffff] flex justify-between py-4 shadow-md' 
    }>
      <div className='flex text-[#00ABCA] md:mx-24'>
        <img 
          src={logo} 
          className='w-16 md:w-32'
        />
        <h2 className='self-center text-xl font-bold md:text-4xl'>ReactFacts</h2>
      </div>
      <div className='flex self-center mx-2 text-xs font-bold md:mx-32 md:text-lg'>
        <p className='text-[#ffffff]'>Light</p>
        <div
          onClick={props.handleClick} 
          className={
            props.darkMode
            ? 'w-8 h-4 mx-2 rounded-md bg-[#f5f5f5] cursor-pointer md:w-12 md:mx-4 md:h-6'
            : 'w-8 h-4 mx-2 rounded-md bg-[#282D35] cursor-pointer md:w-12 md:mx-4 md:h-6' 
          }
        >
          <div 
            className={
              props.darkMode 
              ? 'float-right w-4 h-4 bg-[#282D35] rounded-full md:w-6 md:h-6'
              : 'float-leftt w-4 h-4 bg-white rounded-full md:w-6 md:h-6'
            }
          ></div>
        </div>
        <p className='text-[#21222A]'>Dark</p>
      </div>
    </div>
  )
}

export default Nav