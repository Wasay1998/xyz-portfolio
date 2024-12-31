import React from 'react';

const About = () => {
  return (
    <div id='about' className='container pt-32'>
      <h2 
        className='text-4xl md:text-5xl text-gradient bg-clip-text text-transparent hover:text-blue-500 cursor-pointer' 
        data-aos="zoom-in-up"
      >
        About Me
      </h2>
      <p 
        className='text-white pt-4 text-lg leading-relaxed' 
        data-aos="zoom-in-up"
      >
        I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, & Metaverse. 
        I am passionate about technology and always eager to learn new skills to stay up-to-date with the latest innovations. 
        My interests include exploring emerging technologies and working on cutting-edge projects that shape the future of the digital world.
      </p>
    </div>
  );
}

export default About;
