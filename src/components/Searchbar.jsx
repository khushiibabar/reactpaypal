import React from 'react'


function Searchbar() {
  return (
    <>
      <div> 
        <h6 
        className='hidden mt-2 font-semibold ml-36 text-sky-600 md:block'>
          Help center
        </h6>
  {/* here we create search section and alert */}
  
        <div className='text-center '>
          <h1 className='mt-5 font-medium md:text-2xl md:mt-1 '>
            How can we help?</h1>
          
<div className='flex w-2/5 h-12 pt-2 pl-4 text-sm rounded-3xl ml-36 md:ml-96 outline outline-offset-2 outline-1 outline-zinc-400 text-zinc-500 mt-7'>
 <img src='\src\images\629578-200 (1).png' className='w-5 h-5 mt-1 mr-2'></img>
<p className='pt-1'>Search by keyboard</p>
</div>


<div className='w-9/12 h-20 mt-8 text-center'>
<img src='\src\images\alert para.jpeg.jpg' className='text-2xl ml-14 md:ml-36'></img>
</div>
        </div>
      </div>
      {/* here we create card */}

      <div className='ml-20 md:lg:w-10/12 md:flex md:ml-44'>
      
        
        <div className='flex justify-between rounded-lg shadow-sm md:mt-16 h-18 w-72 shadow-slate-400'>
          <img src='\src\images\image1.jpeg.jpg' className='object-cover mt-2 ml-4 w-14 h-14'></img>
      <div className='px-3 py-2 ml-3'>
        <h6 className='text-sm font-bold text-gray-950'>Resolution center</h6>
      <p className='text-sm text-slate-950'>Resolve transaction and account issues</p>
      </div>
        </div>
        {/* //sec */}
        <div className='flex justify-between mt-5 rounded-lg shadow-sm md:mt-16 h-18 shadow-slate-400 md:ml-7 w-72'>
          <img src='\src\images\image2.jpeg.jpg' className='object-cover mt-2 ml-4 w-14 h-14'></img>
      <div className='px-3 py-2 ml-3'>
        <h6 className='text-sm font-bold text-gray-950'>Ask the Community</h6>
      <p className='text-sm text-slate-950'>Find answers and join the conversation</p>
      </div>
        </div>
        {/* //third */}
        <div className='flex justify-between mt-5 rounded-lg shadow-sm md:mt-16 md:ml-7 h-18 shadow-slate-400 w-72'>
          <img src='\src\images\image3.jpeg.jpg' className='object-cover mt-2 ml-4 w-14 h-14'></img>
      <div className='px-1 py-2 ml-3'>
        <h6 className='text-sm font-bold text-gray-950'>Message center</h6>
      <p className='text-sm text-slate-950'>Send, receiveand view your PayPal messages</p>
      </div>
        </div>
      </div>
      {/* here we create button part */}

      <div className='flex justify-between h-12 md:w-2/5 rounded-3xl mt-7 bg-zinc-200 md:ml-96'>
        <button className='h-10 px-5 mt-1 ml-1 text-sm font-bold text-indigo-900 bg-white rounded-full w-36'>
          Personal Help
          </button>
        <button className=''>Business Help</button>
        <button className='mr-14'>Technical Help</button>
      </div>
    </>
  )
}

export default Searchbar
