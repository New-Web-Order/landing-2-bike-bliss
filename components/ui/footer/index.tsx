import React from 'react';
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import Link from 'next/link';
import Data from "@/dictionaries/en.json";
import Logo from "@/public/assets/icons/bike-logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
};


const Footer = () => {
  const router = useRouter();

  return (
    <div className='w-full flex justify-center px-3.5 lg:px-6 py-16 lg:py-20  bg-primary-1200 '>
      <div className='w-full max-w-screen-xl flex flex-col  items-center gap-y-7 lg:gap-y-9'>
        <div className='w-full flex-col md:flex-row flex justify-between items-center gap-y-7'>
      <div
                  onClick={() => router.push("/")}
                  className="w-fit flex cursor-pointer items-end gap-x-1.5"
                >
                  
                  {/* <Logo className="h-[1.406rem] w-[1.406rem]" /> */}
                  <NextImage src={Logo} 
                  alt="logo"
                  className="max-w-11 max-h-11  "
                  />
                  <p className="font-medium text-lg lg:text-xl text-primary-100 ">{Data.navbar.logoText}</p>

      </div>
      <div className='w-fit flex gap-4'>
        <p className='text-base md:text-lg font-medium text-bg-100 cursor-pointer'>{Data.Footer[1]}</p>
        <p className='text-base md:text-lg font-medium text-bg-100 cursor-pointer'>{Data.Footer[2]}</p>
        <p className='text-base md:text-lg font-medium text-bg-100 cursor-pointer'>{Data.Footer[3]}</p>
      </div>
      <div className="w-fit flex items-center gap-3 text-bg-200">
            {Data.Footer.SocialMediaLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-300"
              >
                {link.name === "facebook" && <FaFacebook />}
                {link.name === "instagram" && <FaInstagram />}
                {link.name === "twitter" && <FaXTwitter />}
                {link.name === "linkedin" && <FaLinkedin />}
                {link.name === 'youtube' && <FaYoutube />}
              </Link>
            ))}
        </div>
    </div>


        <div className='w-full border-t border-bg-900 pt-8 flex items-baseline justify-center gap-6'>
        <p className='text-sm md:text-base font-medium text-bg-200 cursor-pointer'>{Data.Footer[4]}</p>
        <p className='text-sm md:text-base font-medium text-bg-200 cursor-pointer'>{Data.Footer[5]}</p>
        <p className='text-sm md:text-base font-medium text-bg-200 cursor-pointer'>{Data.Footer[6]}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer