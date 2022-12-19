import React from 'react';
import logo from '../../assets/nervelogo.png';

const Navbar = () => {
    return (
        <div className=''>
            <div class="navbar lg:pl-32  lg:py-3 bg-base-100 shadow-xl ">
                <a className=" lg:pl-32 pl-10 text-xl " ><img className='' src={logo} alt="" /></a>
            </div>
        </div>
    )
}

export default Navbar