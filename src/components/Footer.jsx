import React from 'react'

function Footer() {
  return (
    <>
      <div className='mt-20 md:mt-36'>
        <img src='\src\images\image(1).jpeg.jpg' className='h-20 w-60 md:h-28 md:w-80'></img>
        <div className=' md:justify-between md:flex'>
        <div className='ml-5 md:ml-14'>
<ul className='flex space-x-3 text-xs font-bold text-indigo-900 md:space-x-6 md:text-sm'>
  <li>Help</li>
  <li>Contact</li>
  <li>Fees</li>
  <li>Security</li>
  <li>Apps</li>
  <li>Shop</li>
  <li>Enterprise</li> 
  <li>Partners</li>
</ul>
        </div>
        <div className=' ml-96'>
          <img src='\public\WhatsApp Image 2024-04-08 at 23.53.48_654e0f11.jpg' className='w-4 h-3 ml-10'></img>
        </div>
        </div>
        <hr className='mb-2 md:mb-3 md:mt-4'></hr>
        
        <div className='md:flex'>
        <div className='ml-5 md:ml-14'>
<ul className='flex space-x-1 text-xs font-bold text-indigo-900 md:text-sm md:space-x-6'>
  <li>About</li>
  <li>Newsroom</li>
  <li>Jobs</li>
  <li>Investor Relations</li>
  <li>Values in Action</li>
  <li>Public Policy</li>
  <li>Enterprise</li> 
  <li>Sitemap</li>
</ul>
        </div>
        <div>
          <ul className='flex ml-24 space-x-2 text-xs font-bold text-indigo-900 md:text-sm md:space-x-6 md:ml-28'>
            <li className='font-medium text-slate-500'>&copy; 1999-2022</li>
            <li>Accessibility</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Legal</li>
          </ul>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer

