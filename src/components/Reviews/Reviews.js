import React from 'react';
import review from '../../assets/ocp.png';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className=''>
    <div className='flex flex-col justify-center lg:flex-row mx-32 py-16'>
        <div>
            <img width={1500} src={review} alt="" />
        </div>
        <div>
            <h2 className='mb-2'><span className='font-semibold'>Nerve Control 911™</span> not only contains marshmallow root and passion flower, the secret ingredients that your body's central nervous system so direly needs, but it contains them in a form that will deliver your body maximum absorption, so you can fully support your nerve health.</h2>
            <h2 className='font-semibold mb-2'>PhytAge Laboratories uses only the very best ingredients, all of which are manufactured in state-of-the-art facilities, with strict adherence to good manufacturing practices (GMP). We're very confident that you'll love this product, and because of that we offer a 100% money-back guarantee.</h2>
            <ul className='mb-2'>
                <li><i class="fa-solid fa-check pr-3"></i>100% American Made</li>
                <li><i class="fa-solid fa-check pr-3"></i>Distilled to the highest possible purity</li>
                <li><i class="fa-solid fa-check pr-3"></i>Made with all-natural, high-quality ingredients</li>
            </ul>

            <h2 className='text-2xl mb-2 text-center'>Change your life for the better. Change your life today.</h2>
<h1 className='text-3xl mb-3 text-center'>Get <span className=' text-purple-600'>Nerve Control 911™</span> now.</h1>
<div className='text-center'>
<button className='btn uppercase text-white  rounded-full mr-5'><i class="fa-solid fa-cart-shopping pr-3"></i>Order Now</button>
<button className='btn uppercase text-white rounded-full ml-5'><i class="fa-solid fa-eye pr-3"></i>See More</button>
</div>
        </div>
    </div>
    </div>
  )
}

export default Reviews