import React from 'react';
import Image from 'next/image';
import Headingscroll from "../components/scrolls/Headingscroll";
import Trace from "../components/projects/Trace";
import Uxapp from '../components/projects/Uxapp';
import Link from 'next/link';

const Homecontent = () => {
  return (
    <div className='relative'>
      {/* Background text */}

      <div className='text-4xl md:text-7xl text-stone-800 font-serif pl-4 pr-4 pt-24 md:pt-12 relative z-10 pb-4 border-b-2 border-pink-50'>
        <h2 className='font-garamond'>
          {"I’m a product designer who loves turning ideas into thoughtful, intuitive experiences that make a real difference in people’s lives."}        </h2>
      </div>

     

    <div className='pt-4'></div>
      <div className='bg-pink-200 pt-3 pb-3 rounded-lg'><Headingscroll/></div>

    <div className='pt-8 text-stone-800'>
      {"Currently, I'm working at WealthyPlanet Financial as the lead product designer. I am seeking"} <strong>Summer 2025 internships</strong> {"in product and/or design!"}
    </div>

    <div className='pt-8 text-stone-800 text-xl font-semibold'>{"View my projects below"}</div>

    <Trace/>
    <Uxapp/>

    <div className="flex justify-center items-center gap-4 pt-8 pb-4">

    <Link href="/design">
      <button className="btn bg-pink-100 hover:bg-pink-500 text-stone-800 text-xs border-none">
        View more design projects
      </button>
    </Link>

    <Link href="/moreprojects">
      <button className="btn bg-pink-100 hover:bg-pink-500 text-stone-800 text-xs border-none">
        View engineering projects
      </button>
      </Link>
      
    </div>



    </div>
  );
}

export default Homecontent;
