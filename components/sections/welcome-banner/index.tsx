"use client";
import React from 'react';
import NextImage from 'next/image';
import Button from '@/components/ui/button';
import WelcomeImage from '@/public/assets/images/welcome-banner.webp'
import WelcomeBackground from '@/public/assets/images/welcome-background.webp'
import Data from '@/dictionaries/en.json'


const WelcomeBanner = () => {
  return (
    <div className='w-full flex items-center justify-center px-3.5 lg:px-6'>
        <div className='w-full max-w-screen-xl flex flex-col items-center py-20 gap-5'>
        <div className='w-full max-w-screen-md flex flex-col items-center gap-6 z-10'>
            <h1 className='font-bold text-3xl lg:text-6xl text-bg-100 text-center max-w-[34.75rem]'>{Data.WelcomeBanner.heading}</h1>
            <p className='font-medium text-base lg:text-xl text-bg-100 text-center'>{Data.WelcomeBanner.subheading}</p>
            <a href='/' target='_blank' rel='noopener noreferrer'>
      <Button shape="filled" className='w-[140px]'>
      {Data.WelcomeBanner.buttonText}
      </Button>
             </a>
        </div>

      <div className='relative flex items-center justify-center'>
        <NextImage src={WelcomeBackground} alt="car image"
       className='w-full h-full absolute'
      />
        <NextImage src={WelcomeImage} alt="car image"
       className='w-full h-full max-w-[42rem] lg:max-w-[52rem] xl:max-w-[58rem] z-10'
      />
        </div>

        </div>
    </div>
  )
}

export default WelcomeBanner