import React from 'react'


const Main = (props) => {
  
  return (
    <div 
      className={
        props.darkMode
        ? 'py-8 px-2 bg-right-bottom bg-no-repeat bg-auto md:bg-contain bg-hero-black md:py-20 bg-[#282D35] h-screen'
        : 'py-8 px-2 bg-right-bottom bg-no-repeat bg-auto md:bg-contain bg-hero-white md:py-20 bg-[#ffffff] h-screen'
      }
    >
      <div className={
        props.darkMode
        ? 'w-full md:w-[45%] mx-auto text-[#ffffff]'
        : 'w-full md:w-[45%] mx-auto text-[#2B283A]'
      }>
        <h2 className='my-6 text-2xl font-bold md:text-6xl'>Fun facts about React</h2>
        <ul className='ml-6 list-disc marker:text-[#00ABCA] marker:text-[30px] md:text-3xl md:marker:text-[55px] md:mx-16 md:leading-[45px]'>
          <li>Was first released in 2013</li>
          <li>Was originaly created by jordan walke</li>
          <li>Has over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  )
}

export default Main