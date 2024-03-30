import React from "react";
import WelcomeBanner from '@/components/sections/welcome-banner';
import BikeDetails from '@/components/sections/features';
import Testimonials from '@/components/sections/testimonials';
import FAQS from '@/components/sections/faqs';
import CTA from '@/components/sections/cta';

const Homepage = () => {
  return (
    <main className="bg-primary-1200 overflow-x-hidden">
      <WelcomeBanner/>
      <BikeDetails/>
      <Testimonials/>
      <FAQS/>
      <CTA/>
    </main>
  );
}
export default Homepage;
