'use client'
import React from 'react'
import Uxapp from './projects/Uxapp';
import Trace from './projects/Trace';
import Goco from './projects/Goco';
const Projects = () => {
  return (

    <div className='relative z-20 flex justify-center w-full'>
      <div className="w-full p-4">



            {/* Grid Item 1 */}
            <div className="">
            <h2 className="font-semibold text-4xl text-stone-700 pt-16 md:pt-4">Case Studies</h2>
            <p className='text-stone-500 text-l pt-2'>{"I am passionate about finding the intersection between accessibility and design for growth."}</p>        </div>






        <div className='pt-4'>
        <Trace/>
        <Uxapp/>
        <Goco/>

       
        </div>


    </div>


    </div>
  )
}

export default Projects