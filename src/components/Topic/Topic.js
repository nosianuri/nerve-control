import React from 'react';
import bg from '../../assets/v2-2e.jpg';
import img from '../../assets/doctor.png';

const Topic = () => {
  return (
    <div style={{
      background: `url(${bg})`
    }} className=' !bg-cover !bg-no-repeat'>
      <div className='flex flex-col justify-center lg:flex-row mx-32 pt-5'>
        <div>
          <div className='text-center ml-32 pl-10 text-white text-lg mt-10 '>
            “This unique blend of all-natural ingredients, including corydalis powder, prickly pear extract, California poppy seed, and marshmallow root, can help to improve muscle performance, curb insomnia, and lower anxiety and blood pressure.”
          </div>
          <div className='flex text-white justify-center ml-32 pl-32 mt-5'>
            <ul className='px-5'>
              <li><i class="fa-solid fa-check pr-3"></i><span>Improves the body's muscles</span></li>
              <li><i class="fa-solid fa-check pr-3"></i>Controls voluntary movements and reflexes</li>
              <div className='flex'><i class="fa-solid fa-check pr-3 mt-2"></i> <p>Transmits the information to and from the  central nervous system to the rest of the body</p></div>
            </ul>
            <ul>
              <div className='flex'><i class="fa-solid fa-check pr-3 mt-2"></i><p>Sends nerve signals to the organs and muscles</p></div>
              <li><i class="fa-solid fa-check pr-3"></i>Assists with visual perception</li>
              <li><i class="fa-solid fa-check pr-3"></i>Reduces Inflammation</li>
              <li><i class="fa-solid fa-check pr-3"></i>Curbs Insomnia</li>
              <div className='flex'><i class="fa-solid fa-check pr-3 mt-2"></i><p>Lowers Anxiety and Blood Pressure</p>
              </div>
            </ul>
          </div>
        </div>
        <div className=''>
          <img width={600} src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Topic