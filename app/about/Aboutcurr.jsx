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
          <Image
                      src="/recwnt.jpg" // The path to your image
                      alt="Vidhi Gokani"
                      layout="fit" // This makes the image fill the container
                      objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                      className="rounded-lg mx-auto" // Ensures the image has rounded corners like the container
                      height={600}
                      width={600}
                      />
        </div>

        <div className="p-4 text-sm text-stone-600">

            <div className='pb-2'>{"I’m a product designer with 2+ years of experience designing complex systems in fintech, logistics, and defence. I’m currently in my 4th year of Systems Design Engineering at the University of Waterloo, where I bring structured problem-solving into human-centered product work. "}</div>
            <div className=''>{"I designed and built this site end-to-end. The technical choices reflect the same principles I care about in products: fast load times, readable structure, and minimal abstraction. The stack is modern but boring on purpose."}</div>
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