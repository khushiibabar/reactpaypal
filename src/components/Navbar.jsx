import React from 'react'

function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-between w-full px-4 bg-white h-14'>
        <div className='flex justify-between md:mx-10 md:mt-7'>
          <div className='flex justify-around space-x-10'>
          <img src="\src\images\paypal-icon-logo-svgrepo-com (1).svg" alt="" srcset="" 
className='w-8 h-8 md:ml-7'/>
  <ul 
        className='hidden font-medium text-blue-900 cursor-pointer md:space-x-10 md:flex md:mx-10 '
        >
    <li className='mx-[10px] '>Personal</li>
    <li className='mx-[10px]'>Business</li>
    <li className='mx-[10px]'>Developer</li>
    <li className='mx-[10px]'>Help</li>
</ul>
          </div>
        </div>
        
<div className='flex justify-between space-x-5 md:ml-72 md:mx-10 md:mt-5'>
    <button
     className='h-12 px-8 pb-1 font-medium text-center text-indigo-900 border-2 border-indigo-700 border-solid w-30 rounded-3xl' 
     >
      Log In
      </button>
    <button className='hidden h-12 px-8 pb-1 font-medium text-center text-white bg-indigo-900 w-30 rounded-3xl md:block'>
      Sign Up
      </button>
</div>
<div className='text-4xl text-indigo-800 bg-yellow md:hidden'>
  <a href='#'>☰</a>
</div>
      </nav>
      <hr className='mt-10'></hr>
    </>
  )
}

export default Navbar
