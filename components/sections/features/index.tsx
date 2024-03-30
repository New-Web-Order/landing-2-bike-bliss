"use client";
import React from 'react';
import Button from '@/components/ui/button';
import DetailCard from '@/components/ui/detail-card';
import NextImage from 'next/image';
import Data from '@/dictionaries/en.json';

const BikeDetails = () => {
  return (
    <div className='w-full flex justify-center px-3.5 lg:px-6'>
        <div className='w-full max-w-screen-xl flex flex-col items-center py-16 lg:py-20 gap-6 lg:gap-12 '>
          <div className='w-full flex flex-col items-center gap-3'>
            <p className='font-medium lg:font-semibold text-base lg:text-sm text-primary-300'>{Data.BikeDetails.heading}</p>
            <h1 className='font-bold text-3xl lg:text-4xl text-bg-100 text-center'>{Data.BikeDetails.subheading}</h1>
            <p className='font-medium text-base lg:text-lg text-bg-200 text-center'>{Data.BikeDetails.toptext}</p>
          </div>
{Data.BikeDetails.details.map((option, index) => (
<React.Fragment key={index}>
{index === 1 ? ( 
  <div className='w-full max-w-screen-xl flex flex-col-reverse lg:flex-row justify-between items-center lg:pl-5 2xl:pl-0'>
    <div className='flex flex-col gap-4 w-fit max-w-[31rem]'>
      <h1 className='font-semibold text-xl md:text-3xl text-bg-100'>{option.title}</h1>
      <p className='font-normal text-sm md:text-xl text-bg-200 '>{option.description}</p>
      <a href='/' target='_blank' rel='noopener noreferrer' className='flex items-center w-full md:w-fit'>
      <Button shape="filled" className='w-[100%]'>
                      {option.buttonText}
      </Button>
      </a>
    </div>
    <div className='w-full h-full'>
      <NextImage src={option.image} alt='car image' width={500} height={500}  className='w-full h-full' />
    </div>
  </div>
) : (
  <DetailCard
    key={index}
    image={option.image}
    title={option.title}
    description={option.description}
    buttonText={option.buttonText}
  />
)}
</React.Fragment>
        ))}

            
        </div>
    </div>
  )
}

export default BikeDetails