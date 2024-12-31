import React from 'react';
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];  
}

const Card: React.FC<propsType> = ({title, desc, img, tags}) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px] rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105' data-aos="zoom-in-up">
        <div>
            <Image 
                className='w-[300px] sm:w-[350px] h-auto rounded-t-lg'
                src={img}
                width={350}
                height={350}
                alt={title} 
            />
        </div>

        <div className='p-4 space-y-4'>
            <div className='text-4xl font-extralight text-gradient bg-clip-text text-transparent'>
                {title}
            </div>
            <div className='text-lg text-white'>
                {desc}
            </div>
            <div className='flex flex-wrap gap-2'>
                {tags.map((el) => (
                    <div className='bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white py-1 px-3 rounded-full text-sm shadow-md' key={el}>
                        {el}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Card;
