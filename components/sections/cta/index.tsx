"use client";
import React from 'react';
import Button from '@/components/ui/button';
import Data from '@/dictionaries/en.json';



const CTA = () => {
  return (
    <div className='w-screen flex flex-col items-center py-24 lg:py-20 gap-8 lg:gap-9 bg-cover bg-center '
   style={{backgroundImage:`url("/assets/images/cta-background.webp")`}}  
    
    >
        <h1 className='text-2xl md:text-4xl font-bold text-bg-100 text-center'>{Data.Cta.heading}</h1>
        <Button shape="filled" className='w-[154px]'>
              {Data.Cta.buttonText}
      </Button>
    </div>
  )
}

export default CTA