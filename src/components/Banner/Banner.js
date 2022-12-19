import React from 'react';
import bg from '../../assets/bg-abstract.jpg';
import sideimage from '../../assets/nerve-control-911.png';
import './Banner.css';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} className=' !bg-cover !bg-no-repeat'>
            <div class="bg-gray-300 bg-opacity-25">
                <div className='flex flex-col lg:flex-row   lg:py-16 mx-16 gap-10 lg:px-32'>
                    <div className='lg:ml-10 lg:py-3 lg:w-2/3'>
                        <h1 className='lg:text-3xl text-center mt-5'>
                            Nerve Control 911™:
                        </h1>
                        <h2 className='lg:text-4xl lg:mt-2 text-center text-xl font-semibold leading-normal nerve'>A Nerve Health Breakthrough
                            To Produce FAST Results!</h2>
                        <div className='lg:flex justify-center lg:mt-8'>
                            <ul className='lg:pl-5 lg:pr-3 font-semibold lg:text-lg text-xs'>
                                <li><i class="fa-solid fa-check pr-3"></i><span>Improves the body's muscles</span></li>
                                <li><i class="fa-solid fa-check pr-3"></i>Controls voluntary movements and reflexes</li>
                                <div className='flex'><i class="fa-solid fa-check pr-3 lg:mt-2"></i> <p>Transmits the information to and from the  central nervous system to the rest of the body</p></div>
                            </ul>
                            <ul className='font-semibold lg:text-lg text-xs'>
                                <div className='flex'>
                                    <i class="fa-solid fa-check pr-3 lg:mt-2"></i><p>Sends nerve signals to the organs and muscles</p></div>
                                <div className='flex'>
                                    <i class="fa-solid fa-check pr-3 lg:mt-2"></i><p>Assists with visual perception</p></div>

                                <li><i class="fa-solid fa-check pr-3"></i>Reduces Inflammation</li>
                                <li><i class="fa-solid fa-check pr-3"></i>Curbs Insomnia</li>
                                <div className='flex'><i class="fa-solid fa-check pr-3 lg:mt-2"></i><p>Lowers Anxiety and Blood Pressure</p>
                                </div>
                            </ul>
                        </div>

                        <div className='text-center mt-5 '>
                            <a href="#" className='relative group'>
                                <div className='banner-btn w-4/5 text-white ml-5 py-3 '><p className='lg:text-2xl text-xl btn-familly '>Get Yours from Official Website</p> <p className='text-xs'>Limited Stock Available</p></div>
                            </a>
                        </div>
                    </div>

                    <div className='pl-30 !mx-auto justify-center'>
                        <img className="banner-img lg:w-fit w-64" src={sideimage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner