import React from 'react';
import mainimg from '../../assets/nerve-control-9.png';
import gauranted from '../../assets/imgpsh_fullsize.png';
import imglogo from '../../assets/secure-300x74.png';
import './Mainbody.css';
import cristmas from '../../assets/mobail.png';
import bg from '../../assets/banner_side_dark.png';

const Mainbody = () => {
  return (
    <div className='bg-[#000000]'>
      <div className='text-center text-white py-10'>
      <div className='lg:border-0 border-2 border-black border-y-gray-800 py-2'>
      <h1 className='lg:text-4xl text-2xl font-bold px-3 lg:px-0 mb-2'>Discover The Secret of Nerve Control 911™</h1>
      </div>
        
        <div className='lg:border-0 border-2 border-black border-y-gray-800 py-2 px-5'>
        <h3 className='lg:text-xl font-semibold text-[#43f197] sale mb-2'>Flash Sale ONLY For Today - Special Offer</h3>
        <h4 className='lg:text-xl font-semibold text-[#0becf0] save mb-2'>Save Upto 90% OFF + Free US Shipping + 120 Days Suply </h4>
        <h4 className='lg:text-xl font-semibold text-[#0becf0] save mb-2'>+ Money Back Guarantee</h4>
        </div>
        <div className='flex flex-col gap-5 lg:flex-row justify-center'>
        <div className='text-center lg:mt-20 mt-8 '>
          <h1 className='lg:text-3xl text-xl christ'>Big Christmas offer</h1>
          
          <p className='lg:text-5xl text-3xl font-bold text-red-600'>SALE</p>
          {/* <p className='text-xl'>Up To 50% Off</p> */}
        </div>
        <a href="https://www.r3hlvtrk.com/3J67C/7ZRJQL1/">
        <img className='lg:w-56 w-28   mx-auto lg:mx-0 rounded-lg lg:mt-10 ' src={cristmas} alt="" />
        </a>
        
        </div>
        
        <div>
        <a href="https://www.r3hlvtrk.com/3J67C/7ZRJQL1/">
        <img className='mx-auto  lg:w-2/5 w-64  lg:my-16 my-10' src={mainimg} alt="" />
        </a>
        
        </div>
        
        <button className='px-3 py-2 lg:text-lg mx-10 lg:mx-0 rounded-lg mb-10 bg-[#0f8548] leading-normal  hover:bg-[#0f8548]'><a className='mb-2' href="https://www.r3hlvtrk.com/3J67C/7ZRJQL1/">Click Here and Access The Official Website Now</a></button>
        <a href="https://www.r3hlvtrk.com/3J67C/7ZRJQL1/">
        <img className='mx-auto mb-3 lg:w-96 w-1/2' src={gauranted} alt="" />
        </a>
        
        <a href="https://www.r3hlvtrk.com/3J67C/7ZRJQL1/">
        <img className='mx-auto mb-32 lg:w-96 w-1/2' src={imglogo} alt="" />
        </a>
        
        

        <div className='lg:text-lg text-sm lg:pt-32 pt-10'>
            <a href="https://www.r3hlvtrk.com/3J67C/7ZRJQL1/">Terms of Use </a>|
            <a href="https://www.r3hlvtrk.com/3J67C/7ZRJQL1/"> Privacy Policy</a>
        </div>
    </div>
    </div>
  )
}

export default Mainbody