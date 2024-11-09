import React from 'react';
import Image from 'next/image';
import Headingscroll from "../components/scrolls/Headingscroll";


import Uxapp from '../components/projects/Uxapp';
import Trace from '../components/projects/Trace';

const Homecontent = () => {
  return (
    <div className='relative'>
      {/* Background text */}
      <div className='text-5xl md:text-6xl text-stone-900 font-serif pl-4 pr-4 pt-24 md:pt-12 relative z-10 pb-4'>
        <h2 className='font-garamond'>
          {"Hello, I'm Vidhi, an empathetic and strategic product designer passionate about turning complex ideas into seamless, meaningful experiences."}        </h2>
      </div>

      <div className='bg-pink-200 pt-3 pb-3 rounded-lg'><Headingscroll/></div>


      <div className='pt-8'>
        <div className='text-2xl text-stone-800 font-garamond'>{"view featured projects:"}</div>
        <div className='gap-4'>
          <Trace/>
          <Uxapp/>
        </div>
      </div>



    </div>
  );
}

export default Homecontent;
