'use client';
import Currentlyabout from './Currentlyabout';
import Values from './Values';
import Gallery from './Gallery';


import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Scrapbook from '../sticker/Scrapbook';
import ShinyText from '../components/ShinyText';
import Link from 'next/link';
import { motion } from "framer-motion";


const AboutMe = () => {

    const { ref, inView } = useInView({
      threshold: 0.9,
      triggerOnce: false,
    });
  
  
    useEffect(() => {
      console.log('Scrapbook inView:', inView);
    }, [inView]);
  


  return (

    <div className=' bg-stone-50 pt-20 md:pt-0'>

      <div className='h-9/10 flex flex-row p-4 md:p-16'>

<div class="flex flex-col md:flex-row w-full gap-4">
  <div class="md:w-1/3 w-full text-sm text-stone-700 md:pr-16">
    <div className=''>{"I have 2 years of design & product experience in fintech, logistics, and defense."}</div>
    <div className='pt-2'>{"I'm currently in my 4th year of Systems Design Engineering at the University of Waterloo."}</div>
    <div className='pt-8'>{"I’ve always been drawn to creating, whether it was doodling, building, or experimenting with different crafts. Over the years, exploring a wide variety of hands-on projects helped me realize that crafting isn’t just a hobby, it’s what I’m meant to do."}</div>
    <div className='pt-8'>{"I love turning ideas into tangible, thoughtful creations that spark joy and curiosity. Every piece I make is infused with intention, creativity, and a little bit of fun, because I believe that great design isn’t just seen; it’s felt."}</div>
  </div>
  
<div class="md:w-2/3 w-full h-96 bg-stone-200 rounded-lg border-2 border-stone-300 pl-0 md:pl-4 overflow-hidden">
   <img src="wallpic.png" alt="description"
       class="w-full h-full object-cover" />
</div>

</div> 
      </div>

    <Currentlyabout/> 
    <div className='p-4 md:p-16'><Values/></div>
    <Gallery/>

  




              {/* Foreground content */}
        
<div
  ref={ref}
  className="absolute bottom-8 left-8 z-10 pointer-events-none px-4 md:px-16 pt-40 md:pt-52"
>
  {inView && (
    <div className="pointer-events-auto">
      <Scrapbook />
    </div>
  )}
</div>

        
        

        </div>

  );
};

export default AboutMe;
