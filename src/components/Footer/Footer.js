import React from 'react';
import logo from '../../assets/nervelogo.png';

const Footer = () => {
  return (
    <div>
      <div className='mt-5'>
        <div className='text-center mb-4 px-32 mx-32'>
        <h4 className='text-xs py-2 w-2/3  border-2 text-center mx-auto border-gray-400'>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</h4>
          <h3 className='text-xs mt-3'>The information provided on this site is for informational purposes only and any likeness to any individual (living or dead) mentioned in the above content is entirely coincidental. This is not intended as a substitute for advice from your physician or other health care professional or any information contained on or in any product label or packaging. You should not use the information on this site for diagnosis or treatment of any health problem or for prescription of any medication or other treatment. You should consult with a healthcare professional before starting any diet, exercise or supplementation program, before taking any medication, or if you have or suspect you might have a health problem. You should not stop taking any medication without first consulting your physician. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using this product.</h3>
          <p className='text-xs mt-4'><a href="#"><span className='text-purple-900'>Click here</span></a> to find evidence of a test, analysis, research, or study describing the benefits, performance or efficacy of our ingredients based on the expertise of relevant professionals.</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-around'>
          <img src={logo} alt="" />
          <ul className='flex gap-5 mt-5'>
            <li>Home</li>
            <li>The Difference</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
            <li>Faq</li>
            <li>Affiliates</li>
          </ul>
          
        </div>
        <div class="divider border-gray-700 px-32 mx-16"></div> 
        <div className='text-center pb-5'>© 2022 PhytAge Laboratories</div>
      </div>
    </div>
  )
}

export default Footer