import React from 'react';
import NextImage from 'next/image';
import Avatar from '@/public/assets/images/avatar.webp';
import Data from '@/dictionaries/en.json';

const Testimonials = () => {
  return (
    <div className='w-full flex justify-center py-16 lg:py-20 px-3.5 lg:px-6'>
        <div className='w-full max-w-screen-xl flex flex-col items-center gap-9'>
            <div className='flex flex-col items-center gap-5'>
            <NextImage src={Avatar} alt="avatar" width={100} height={100} layout="responsive" className='max-w-[4.375rem]'/>
            <h1 className='font-bold text-xl text-bg-100'>{Data.Testimonials.name}</h1>
            <p className='font-medium text-lg text-bg-300'>{Data.Testimonials.position}</p>
            </div>
            <h1 className='font-semibold text-base text-bg-100 lg:text-3xl max-w-screen-lg text-center'>{Data.Testimonials.heading}</h1>
            <h1 className='font-semibold text-base text-bg-100 lg:text-3xl'>{Data.Testimonials.endtext}</h1>
        </div>
    </div>
  )
}

export default Testimonials