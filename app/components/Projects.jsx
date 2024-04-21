import React from 'react'
import Uxapp from './projects/Uxapp';
import Trace from './projects/Trace';

const Projects = () => {
  return (

    <div className='relative z-20 flex justify-center w-full'>
      <div className="w-full md:w-3/4 p-4">

      <div className="p-4">


        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Grid Item 1 */}
            <div className="">
            <h2 className="font-semibold text-4xl mb-2 text-fuchsia-100 font-sofia">Work</h2>
            <p className='text-stone-300'>I am passionate about finding the intersection between accessibility and design for growth.</p>        </div>

            {/* Grid Item 2 */}
            <div className=" ">
                <p className='text-stone-200 font-serifDisplay pt-4 text-xl'>Currently:</p>
                <p className='text-stone-300'>Designing @ TD Innovation Lab</p>
                <p className='text-stone-200 font-serifDisplay pt-4 text-xl'>Previously:</p>
                <p className='text-stone-300'>PM @Openlane <br/> Design and PM @Department of National Defence</p>
            </div>

            {/* Additional grid items can be added here following the same structure */}
        </div>

        </div>

        </div>

        <div className='pt-4'>
        <Trace/>
        <Uxapp/>
        </div>


    </div>


    </div>
  )
}

export default Projects