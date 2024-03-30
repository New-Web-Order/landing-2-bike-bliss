"use client";
import React from 'react';
import Button from '@/components/ui/button';
import Data from '@/dictionaries/en.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const FAQS = () => {
  return (
        <div className='w-full flex justify-center py-16 lg:py-20'>
        <div className='w-full max-w-screen-lg flex flex-col items-center px-3.5 lg:px-6 gap-y-6 lg:gap-y-16'>
        <div className='w-full flex flex-col items-center gap-4'>
            <h1 className='text-3xl lg:text-4xl text-bg-100 font-bold text-center'>{Data.Accordion.heading}</h1>
            <p className='text-base lg:text-lg text-bg-200 font-medium text-center'>{Data.Accordion.subheading}</p>
          </div>
          <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

          <div className='w-full flex flex-col items-center gap-4 lg:gap-8'>
          <h1 className='text-3xl lg:text-4xl text-bg-100 font-bold text-center'>{Data.Accordion.question}</h1>
          <p className='text-base lg:text-lg text-bg-200 font-medium text-center'>{Data.Accordion.endtext}</p>
          <a href='/' target='_blank' rel='noopener noreferrer' className='flex items-center w-full justify-center'>
      <Button shape="surface" className='w-[154px]'>
              {Data.Accordion.buttonText}
      </Button>
      </a>

          </div>
        </div>
        </div>
  )
}

export default FAQS