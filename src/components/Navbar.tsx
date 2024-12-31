import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        
        <div className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-rose-500'>
          Laraib Rizwan
        </div>

        
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menuLink text-white hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out transform'>
            <a href="#hero">Home</a>
          </li>
          <li className='menuLink text-white hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out transform'>
            <a href="#about">About</a>
          </li>
          <li className='menuLink text-white hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out transform'>
            <a href="#projects">Projects</a>
          </li>
          <li className='menuLink text-white hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out transform'>
            <a href="#skills">Skills</a>
          </li>
          <li className='menuLink text-white hover:text-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out transform'>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        
        <AiOutlineMenu className='md:hidden text-rose-500 hover:text-pink-500 hover:scale-110 transition-all duration-300 ease-in-out shadow-lg' size={35} />
      </div>
    </div>
  );
}

export default Navbar;
