import React from 'react';

const Skills = () => {
  return (
    <div className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl text-gradient bg-clip-text text-transparent'>
                    Technologies I work with
                </h2>
                <p className='text-white pt-2'>
                    I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to
                    using frameworks like React and Next.js to create dynamic and user-friendly applications. I&apos;m also proficient in
                    Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest
                    technologies to enhance my skill set and contribute effectively to projects.
                </p>
            </div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up" className='text-pink-500 hover:text-pink-600 transition-colors duration-300'>TypeScript</h2>
                    <h2 data-aos="zoom-in-up" className='text-blue-500 hover:text-blue-600 transition-colors duration-300'>CSS</h2>
                    <h2 data-aos="zoom-in-up" className='text-yellow-500 hover:text-yellow-600 transition-colors duration-300'>HTML</h2>
                    <h2 data-aos="zoom-in-up" className='text-green-500 hover:text-green-600 transition-colors duration-300'>Node.js</h2>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;
