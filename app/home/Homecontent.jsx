import React from 'react';
import Image from 'next/image';
import Headingscroll from "../components/scrolls/Headingscroll";
import Trace from "../components/projects/Trace";
import WealthyPlanet from '../components/projects/Wealthyplanet';
import Uxapp from '../components/projects/Uxapp';

const Homecontent = () => {
  return (

    <div className=''>



    
    <div className="relative min-h-screen overflow-hidden"> 
      {/* 🌟 Background Image */}


      {/* ✨ Foreground Content */}
      <div className="relative z-10 bg-gradient-to-bl">

<div className="pb-8"></div>


        
        <div className='p-4 md:p-16'>
          
          <div className='h-screen'>
            <div className='pt-20 md:pt-32 text-left'>
              <div className='text-5xl font-apple pt-12 text-stone-900'>{"Welcome, I'm Vidhi. Nice to meet you."}</div>
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
          </div>


        </div>

      <div className='p-4 md:p-16'>
        <WealthyPlanet />
        <div className='pt-12'></div>
        <Uxapp />
        </div>

        <div className="flex justify-center items-center gap-4 pt-8 pb-4"></div>
      </div>
    </div>
    </div>
  );
};

export default Homecontent;
