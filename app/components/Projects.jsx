'use client'
import React from 'react'
import Uxapp from './projects/Uxapp';
import Trace from './projects/Trace';
import Goco from './projects/Goco';
import Wealthyplanet from './projects/Wealthyplanet';
const Projects = () => {
  return (

    <div className='relative z-20 flex justify-center w-full'>
      <div className="w-full p-16"> {/*removed p-4*/}



            {/* Grid Item 1 */}
            <div className="">
            <h2 className="text-3xl md:text-3xl font-semibold text-stone-700 md:pt-4 font-apple">Case Studies</h2>
            <p className='text-stone-700 text-sm pt-1'>{"I'm passionate about finding the intersection between accessibility and design for growth."}</p>        </div>






        <div className='pt-16'>
        <Uxapp/>
        <Wealthyplanet/>
        <Trace/>

       
        </div>


    </div>


    </div>
  )
}

export default Projects