import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-12'>
        {/* Left Section: Contact Information */}
        <div className='space-y-8' data-aos="zoom-in-up">
          <h2 className='text-5xl text-gradient font-bold'>
            Get in touch
          </h2>
          <p className='text-gray-200 text-lg pt-2'>
            Drop me a line, give me a call, or send me a message by submitting the form below.
          </p>
          <div className='flex gap-3 items-center text-white text-lg hover:text-pink-400 transition duration-300'>
            <AiOutlineMail size={30} />
            <span className='hover:underline'>Rabixyz@gmail.com</span>
          </div>
          <div className='flex gap-3 items-center text-white text-lg hover:text-pink-400 transition duration-300'>
            <BsTelephone size={30} />
            <span className='hover:underline'>(0340-1352469)</span>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className='space-y-8' data-aos="zoom-in-up">
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-lg font-semibold text-gray-100'>
              Name
            </label>
            <input
              type="text"
              className='h-[40px] bg-transparent border-2 border-pink-500 rounded-lg text-white px-4 focus:outline-none focus:ring-2 focus:ring-pink-500'
              id='name'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-lg font-semibold text-gray-100'>
              Email
            </label>
            <input
              type="email"
              className='h-[40px] bg-transparent border-2 border-pink-500 rounded-lg text-white px-4 focus:outline-none focus:ring-2 focus:ring-pink-500'
              id='email'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="msg" className='text-lg font-semibold text-gray-100'>
              Message
            </label>
            <textarea
              className='bg-transparent border-2 border-pink-500 rounded-lg text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
              id='msg'
              rows={8}
              placeholder='Your message...'
            />
          </div>

          <button className='bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-6 rounded-lg hover:bg-gradient-to-l transition duration-300'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
