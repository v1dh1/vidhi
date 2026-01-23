'use client';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Scrapbook from '../sticker/Scrapbook';
import ShinyText from '../components/ShinyText';
import Link from 'next/link';
import { motion } from "framer-motion";



const Homecontent = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });



  return (
    <div className="relative overflow-hidden ">
      {/* Background Video */}


<div className="pt-20 md:pt-8">

  <div className='p-8 md:p-16 text-stone-700 text-lg lg:pr-80'>
      <div className='text-red-800 text-4xl pb-8'><span className=''>{"Vidhi"}</span> {"is a designer"}  {" who crafts intuitive experiences backed by research, systems thinking, and cross-functional prototyping."}</div>
      <div className=''>{"Passionate about Fintech 🏦 and Enterprise 🏢 Design"}</div>
      <div className=''>{"Systems Design Engineering @UWaterloo"}</div>
      <div className=''>{"Currently Seeking 2026 New Grad Design & Product Roles"}</div>
  </div>

  <div className='md:pb-32'></div>

<div className='p-4 md:px-16'>
  <div className='border-t border-b border-stone-200 pb-8 pt-4'>

    <motion.div
      className='border-none shadow-none'
      whileHover={{
        scale: 0.95,
        y: -5,
        shadow: "none"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >

    <Link href="/design/wealthyplanet">
  <div className="flex flex-col md:flex-row w-full">
    <div className="md:w-1/3 w-full py-4">
      <div className="text-lg font-semibold text-stone-700">
        {"Web Redesign & Onboarding Experience"}
      </div>
      <div className="text-sm text-stone-400">
        {"WealthyPlanet | Fall 2024"}
      </div>
    </div>

    <div className="md:w-2/3 w-full py-4">
      <div className="text-sm text-stone-500">
        {"Built a unified design system and led a full website redesign for WealthyPlanet’s AI-driven financial platform. Delivered a cohesive experience that increased sign-ups 270% and session time 20%, from research to launch."}
      </div>
    </div>
  </div>

  {/* Centered video */}
  <div className="w-full flex justify-center mt-4">
    <video
      className="w-3/4 lg:w-1/2 h-full object-cover"
      src="/wpvid.mp4"
      autoPlay
      muted
      loop
      playsInLine
    ></video>
  </div>
</Link>

</motion.div>
  </div>
</div>






<div className='px-4 md:px-16'>
  <div className='border-b-2 border-stone-200'>

    <motion.div
      className='border-none shadow-none'
      whileHover={{
        scale: 0.95,
        y: -5,
        shadow: "none"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >

    <Link href="/design/tdbank">


    <div className="flex flex-col md:flex-row w-full">
      {/* Left column - 1/3 width on medium+ screens */}
      <div className="md:w-1/3 w-full py-4">
        <div className="text-lg font-semibold text-stone-700">{"Trace"}</div>
        <div className='text-sm text-stone-400'>{"Toronto-Dominion Bank | Winter 2024"}</div>
      </div>

      {/* Right column - 2/3 width on medium+ screens */}
      <div className="md:w-2/3 w-full py-4">
        <div className="text-sm text-stone-500">{"Integrated a standalone app into TD Bank’s mobile banking ecosystem for the US market, creating a seamless, trust-driven experience. Led the product from concept through prototyping and design thinking workshops, aligned multi-disciplinary teams, and delivered a scalable UI framework to support future integrations."}</div>
      </div>
    </div>

<div className="flex flex-col md:flex-row w-full overflow-hidden gap-2 pt-8 pb-8">
  <img
    src="/trace-before.png"
    alt="Before"
    className="w-full md:w-1/2 object-cover rounded-xl"
  />

  <img
    src="/trace-after.png"
    alt="After"
    className="w-full md:w-1/2 object-cover rounded-xl"
  />
</div>

</Link>
</motion.div>

  </div>
</div>



<div className="p-4 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

  {/* Left side text */}
  <div>
    <div className="text-stone-900 text-lg">
      {"liked what you saw?"}
    </div>
    <div className="text-stone-500 text-sm">
      {"learn more about me and how i approach design"}
    </div>
  </div>

  {/* Right side button */}
  <a
    href="/about"
    className="inline-block px-6 py-3 rounded-lg bg-red-50 border-2 border-red-100 text-red-950 text-sm hover:bg-red-200 transition"
  >
    About Me
  </a>

</div>





  </div>




    </div>
  );
};

export default Homecontent;
