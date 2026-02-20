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
    <div className="relative overflow-hidden">
      {/* Background Video */}


<div className="pt-20 md:pt-8">

  <div className='p-8 md:p-16 text-stone-700 text-lg lg:pr-80'>
      <div className='text-fuchsia-900 font-medium text-3xl md:text-5xl pb-8 leading-none selection:bg-fuchsia-900 selection:text-fuchsia-50'>{"Vidhi Gokani is a fintech and enterprise designer, Systems Design Engineering student, building thoughtful products where design, systems, and storytelling meet."}</div>
  </div>



  <div className='md:pb-32'></div>

<div className='text-stone-800 text-xs font-medium px-4 md:px-16'>SELECTED WORK</div>
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
  <div className="flex flex-col md:flex-row w-full ">

    <div className="md:w-2/6 w-full py-4">
      <div className="text-lg text-stone-700 pb-2">
        {"Designing Acquisition + Onboarding During a Fintech Pivot"}
      </div>
      <div className="text-sm text-stone-400">
        {"WealthyPlanet | Fall 2024"}
      </div>
    </div>

    <div className="md:w-3/6 w-full py-4">
      <div className="text-sm text-stone-500 md:pr-16">
        {"Led a full website redesign for WealthyPlanet’s AI-driven financial platform. Delivered a cohesive experience that increased sign-ups 62% and session time 20%, from research to launch."}
      </div>
    </div>

    <div className='md:w-1/6 text-stone-500 text-sm font-medium py-4 md:pl-8 hover:text-fuchsia-600'>{"Read Case → "}</div>
  </div>

  {/* Centered video */}
  <div className="w-full flex justify-center pt-4">
    <video
      className="w-3/4 lg:w-1/2 h-full object-cover"
      src="/vpsmallerbid.mp4"
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
  <div className=''>

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
    <div className="flex flex-col md:flex-row w-full ">
      {/* Left column - 1/3 width on medium+ screens */}
      <div className="md:w-2/6 w-full py-4 md:pr-4">
        <div className="text-lg text-stone-700 pb-2">{"Integrating a Sustainability Rewards Platform Into Mobile Banking"}</div>
        <div className='text-sm text-stone-400'>{"Toronto-Dominion Bank | Winter 2024"}</div>
      </div>

      {/* Right column - 2/3 width on medium+ screens */}
      <div className="md:w-3/6 w-full py-4 md:pr-16">
        <div className="text-sm text-stone-500">{"Integrated a standalone app into TD Bank’s mobile banking ecosystem for the US market, creating a seamless, trust-driven experience. Aligned multi-disciplinary teams, and delivered a scalable UI framework to support future integrations."}</div>
      </div>

      <div className='md:w-1/6 text-stone-500 text-sm font-medium py-4 md:pl-8 hover:text-fuchsia-600'>{"Read Case → "}</div>
    </div>

<div className="flex flex-col md:flex-row w-full overflow-hidden gap-2 pt-4 pb-8">
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








  </div>




    </div>
  );
};

export default Homecontent;
