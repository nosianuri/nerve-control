import React from 'react';
import offerimg from '../../assets/buy-nerve-control-911.png';
import offerbg from '../../assets/bg-gray.jpg';

const Offer = () => {
    return (
        <div style={{
            background: `url(${offerbg})`
        }} className=' !bg-cover !bg-no-repeat'>
            <div className='flex flex-col justify-center lg:flex-row py-5 gap-32'>
                <div>
                    <img src={offerimg} alt="" />
                </div>
                <div className='text-white items-center mt-16'>
                    <h2 className='text-3xl'>Get Nerve Control 911™ Now!
                    </h2>
                    <h2 className='text-3xl mb-3'>100% Guaranteed.</h2>
                    <button className='btn text-white  uppercase rounded-full'><i class="fa-solid fa-cart-shopping pr-3"></i>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Offer