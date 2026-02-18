import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Scrapbook from '../sticker/Scrapbook';

const Aboutcurr = () => {

    const { ref, inView } = useInView({
      threshold: 0.9,
      triggerOnce: false,
    });
  
  
    useEffect(() => {
      console.log('Scrapbook inView:', inView);
    }, [inView]);
  
  return (

    
    <div>
       
    <div className='md:px-24 md:pt-24'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4">
            <div className='text-stone-800 text-3xl'> <span className=' text-fuchsia-800'>Designer</span> who enjoys working with code</div>
        </div>

        <div className="p-4">
            <div className='text-sm text-stone-600'>{"I have 2 years of design and product experience in fintech, logistics, and defence. I'm currently in my 4th year of Systems Design Engineering at the University of Waterloo. I’ve always been drawn to creating, whether it was doodling, building, or experimenting with different crafts. Over the years, exploring a wide variety of hands-on projects helped me realize that crafting isn’t just a hobby, it’s what I’m meant to do. I love turning ideas into tangible, thoughtful creations that spark joy and curiosity. Every piece I make is infused with intention, creativity, and a little bit of fun, because I believe that great design isn’t just seen; it’s felt."}</div>
        </div>

        <div className="p-4 text-sm text-stone-600">


            <div className=''>{"I designed and built this site end-to-end. The technical choices reflect the same principles I care about in products: fast load times, readable structure, and minimal abstraction. The stack is modern but boring on purpose."}</div>
            <div className='pt-2'>{"Built with Next.js, TypeScript, and Tailwind."}</div>
        </div>
        </div>
</div>

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
  )
}

export default Aboutcurr