import React from 'react';
import Image from 'next/image';
import Headingscroll from "../components/scrolls/Headingscroll";
import Trace from "../components/projects/Trace";
import WealthyPlanet from '../components/projects/Wealthyplanet';
import Uxapp from '../components/projects/Uxapp';

const Homecontent = () => {
  return (
    
    <div className="relative min-h-screen overflow-hidden"> 
      {/* 🌟 Background Image */}


      {/* ✨ Foreground Content */}
      <div className="relative z-10 bg-gradient-to-bl">
        <div className='grid grid-cols-1 md:grid-cols-12 pt-20'>
          <div className='col-span-1 md:col-span-3'></div>
          
          <div className='col-span-1 md:col-span-6'>
              <div className='text-3xl font-inter pt-12 text-stone-900'>{"Welcome, I'm Vidhi. Nice to meet you."}</div>
              <div className='text-l pt-4 text-stone-600'>{"I’m a product enthusiast who loves turning ideas into thoughtful, intuitive experiences that make a real difference in people’s lives."}</div>
              <div className='text-l pt-2 text-stone-600'>
                {"Currently, I'm working at WealthyPlanet Financial as the lead product designer. I am "}
                <strong>seeking Summer 2025 internships</strong>
                {" in product and/or design!"}
              </div>
              <div className='pt-4'>
                <div className='bg-pink-100 pt-2 pb-2 rounded-lg'>
                  <Headingscroll />
                </div>
              </div>
              <div className='text-l pt-8 pb-12 text-stone-800 font-semibold'>{"View my projects below"}</div>
          </div>

          <div className='col-span-1 md:col-span-3'></div>
        </div>

        <WealthyPlanet />
        <Uxapp />

        <div className="flex justify-center items-center gap-4 pt-8 pb-4"></div>
      </div>
    </div>
  );
};

export default Homecontent;
