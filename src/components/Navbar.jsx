import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/img/logo 1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white md:p-12 p-4'>
      <div>
        <img src={logo} alt='/' />
      </div>
      <ul className='hidden sm:flex px-4 gap-12 font-dm_sans sm:text-lg'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='#landlord'>Landlord</a>
        </li>
        <li>
          <a href='#tenants'>Tenants</a>
        </li>
        <li>
          <a href='#contact'>Contact Us</a>
        </li>
      </ul>
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8'>
            <a href='/'>Home</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#landlord'>Landlord</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#tenants'>Tenants</a>
          </li>

          <li className='text-2xl py-8'>
            <a href='#contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
