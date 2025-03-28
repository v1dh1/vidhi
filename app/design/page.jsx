'use client'

import React from 'react'

import Projects from '../components/Projects';

import Lefthome from '../home/Lefthome';
import LefthomeSmall from '../home/LefthomeSmall';

const Design = () => {
  return (


<div>
      {/* Small screens - LefthomeSmall as a top navbar */}
      <div className="">

        
        {/* Medium and larger screens - Show Lefthome */}
      <div className="hidden md:block">
        <Lefthome />
      </div>

      {/* Small screens - Show LefthomeSmall */}
      <div className="block md:hidden">
        <LefthomeSmall />
      </div>

        <div className=''>
          
        </div>
        
        


        <main className="bg-stone-50 p-4 overflow-y-auto">
          <Projects />

        </main>





      </div>



  </div>
  );
};

export default Design