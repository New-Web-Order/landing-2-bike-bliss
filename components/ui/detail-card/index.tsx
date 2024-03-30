"use client";
import React from 'react'
import NextImage from 'next/image';
import Button from "@/components/ui/button";

interface DetailCardProps {
    title: string;
    description: string;
    buttonText: string;
    image: string;


}

const DetailCard: React.FC<DetailCardProps> = ({
    title,
    description,
    buttonText,
    image,


  }) => {
    return (
      <div className='w-full flex items-center justify-center'>
      <div className='w-full max-w-screen-xl flex flex-col lg:flex-row justify-between items-center lg:pr-5 2xl:pr-0'>
      <NextImage 
  src={image} 
  alt="car image" 
  width={500} 
  height={500} 
  className='w-full h-full'
/>


        <div className='flex flex-col gap-4 w-full max-w-[31rem] '>
          <h1 className='font-semibold text-xl md:text-3xl text-bg-100'>{title}</h1>
          <p className='font-normal text-sm md:text-xl text-bg-200 '>{description}</p>
          <a
                      href='/'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full md:w-fit"
                    >
                     <Button shape="filled" className='w-[100%]'>
                      {buttonText}
                      </Button>

                    </a>

        </div>
      </div>
    </div>
    );
  };  


export default DetailCard;