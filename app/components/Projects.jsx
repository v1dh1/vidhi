'use client'
import React from 'react'
import Uxapp from './projects/Uxapp';
import Trace from './projects/Trace';
import Goco from './projects/Goco';
import Wealthyplanet from './projects/Wealthyplanet';
const Projects = () => {
  return (

    <div className='relative z-20 flex justify-center w-full'>
      <div className="w-full md:px-16 py-16 p-4"> {/*removed p-4*/}



            {/* Grid Item 1 */}
            <div className="">
            <h2 className="text-6xl md:text-6xl font-garamond text-stone-700 md:pt-4">Case Studies</h2>
            <p className='text-stone-700 text-sm pt-1'>{"I'm passionate about finding the intersection between accessibility and design for growth."}</p>        </div>






        <div className='pt-8'>
        <div className='pt-8'><Uxapp/></div>
        
        <div className='py-8'><Wealthyplanet/></div>
        <Trace/>

       
        </div>


    </div>


    </div>
  )
}

export default Projects