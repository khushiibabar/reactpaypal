import React from 'react'

function Midsection() {
  return (
    <>
      <div className='w-9/12 mt-10 md:justify-around md:flex md:ml-52 md:text-start '>
        {/* first ques list*/}
        <div className=''>
            <h6 className='h-10 px-4 pt-2 text-base font-bold text-indigo-700 border-l-4 border-indigo-700 w-52 ml-28 text bg-sky-100 md:ml-0'>
                Common Questions</h6>
            <ul>
                <li className='mt-2 mb-4 ml-32 md:ml-3'>PayPal Help Guides</li>
                <li className='mb-4 ml-32 text-base md:ml-3'>Payments & Transfers</li>
                <li className='mb-4 ml-32 text-base md:ml-3'>Disputes & Limitations </li>
                <li className='mb-4 ml-32 text-base md:ml-3'>My Account</li>
                <li className='mb-4 ml-32 text-base md:ml-3'>My Wallet</li>
                <li className='mb-4 ml-32 text-base md:ml-3'>Login & Security</li>
                <li className='mb-4 ml-32 text-base md:ml-3'>Seller Tools</li>
            </ul>
        </div>
        {/* sec ques list*/}
        <div className=''>
            <h1 className='text-2xl font-medium ml-28 md:ml-8 md:text-2xl '>
                Common Questions</h1>
            <ul>
                <li className='mt-4 mb-4 ml-32 font-bold text-blue-500 md:ml-8'>How do I open a case with  a seller?</li>
                <li className='mb-4 ml-32 font-bold text-blue-500 md:ml-8'>I forgot my password. How do I reset it?</li>
                <li className='mb-4 ml-32 font-bold text-blue-500 md:ml-8'>Why is my payment on hold or unavailable?</li>
                <li className='mb-4 ml-32 font-bold text-blue-500 md:ml-8'>I want my money back. Can I cancel a payment? </li>
                <li className='mb-4 ml-32 font-bold text-blue-500 md:ml-8'>Why I am receiving emails from PayPal when I don't have an account?</li>
                <li className='mb-4 ml-32 font-bold text-blue-500 md:ml-8'>How do I report an unauthorised transaction or account activity?</li>
                <li className='mb-4 ml-32 font-bold text-blue-500 md:ml-8'>Why is the payment I sent pending? Can I cancel it?</li>
                <li className='mb-4 ml-32 font-bold text-blue-500 md:ml-8'>How do I request a refund?</li>
                <li className='mb-4 ml-32 font-bold text-blue-500 md:ml-8'>Why was my payment declined?</li>
                <li className='mb-4 ml-32 font-bold text-blue-500 md:ml-8'>How do I change the name on my PayPal account?</li>
            </ul>
        </div>
        {/* log in box */}
        <div className='h-48 py-10 text-center w-60 ml-28 rounded-2xl bg-sky-50 opacity-4 md:ml-10'>
          <p className='px-5 font-serif text-xs font-semibold leading-5'> Get customised help with 
          your account and access your <br></br>
          message center.</p>
           <button className='w-16 h-8 pb-1 mt-5 text-sm font-medium text-center text-indigo-700 border-2 border-indigo-900 border-solid rounded-3xl' >
     
            Log In</button>
        </div>
      </div>
     
    {/* third last card */}
    
<div className=' md:mt-16 md:ml-20'>
  <div className='md:ml-96'>
<h1 className='mt-5 ml-20 text-3xl font-abc font-extralight md:ml-12'>More ways to get help</h1>
</div>
    <div className='text-center ml-28 md:flex md:ml-36 md:lg:w-10/12'>
        <div className='flex-col justify-between rounded-lg md:mt-3 h-18 w-60 shadow-slate-400'>
          <img src='\src\images\contact.jpeg.jpg' className='object-cover w-16 h-16 mt-2 ml-20'></img>
      <div className='px-3 py-1 ml-3'>
        <h6 className='text-base font-bold text-center text-sky-600'>Commnity Forum</h6>
      <p className='mt-2 text-sm text-slate-950'>Find answers or join the conversation</p>
      </div>
        </div>
        {/* //sec */}
        <div className='flex-col justify-between mt-5 rounded-lg shadow-sm md:mt-3 h-18 md:ml-14 w-60'>
          <img src='\src\images\hand.jpeg.jpg' className='object-cover w-16 h-16 mt-2 ml-24'></img>
      <div className='px-3 py-1 ml-5'>
        <h6 className='ml-2 text-base font-bold text-center text-sky-600'>Resolution Center</h6>
      <p className='mt-2 text-sm text-center text-slate-950'>Resolve transaction or account issues</p>
      </div>
        </div>
        {/* //third */}
        <div className='flex-col justify-between mt-5 rounded-lg md:mt-3 md:ml-7 h-18 w-60'>
          <img src='\src\images\question.jpeg.jpg' className='object-cover w-16 h-16 mt-2 ml-24 md:ml-28'></img>
      <div className='ml-5 md:ml-16' >
        <h6 className='text-base font-bold text-center text-sky-600'>Contact us</h6>
      <p className='mt-2 text-sm text-center text-slate-950'>Contact Customer Service</p>
      </div>
        </div>
      </div>
      {/* servey box */}
      <div className='mt-20 ml-4 text-center h-52 md:text-justify md:h-32 md:flex md:justify-around md:w-9/12 md:ml-36 bg-slate-100'>
        <div className=' md:mt-6 md:w-96'>
          <h3 className='py-3 text-xl md:py-0'>How are we doing?</h3>
          <p className='md:mt-2'>
            Help improve the <b className='font-medium'>PayPal Help Center experience</b> with some quick feedback.</p>
        </div>
        <div>
          <button className='h-12 px-8 pb-1 mt-10 font-medium text-center text-white bg-indigo-900 w-30 rounded-3xl'>
            Take the survey</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Midsection

