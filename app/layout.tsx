import React, { PropsWithChildren } from "react";
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import "@/styles/globals.css"
import { Inter } from "next/font/google";

export const dynamic = "force-dynamic";

const inter = Inter({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const meta = {
  title: "Bike Bliss",
  description: "Bike Bliss Is Your Premier Riding Companion",
  icons: {
    icon: '/icon.png',
  },
};

export const metadata = {
  title: meta.title,
  description:meta.description,
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
 <html lang="en" className={`${inter.variable}`}>

      <body>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
};
export default RootLayout;