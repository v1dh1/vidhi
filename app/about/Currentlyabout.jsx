import React from 'react'
import Twocardcol from './Twocardcol'

const Currentlyabout = () => {
  return (
        
<div className='p-4 md:p-16'>

    <div className='text-stone-700 text-lg'>my experience</div>

    <div class="flex flex-col md:flex-row w-full gap-4 pt-4">
      <div className='md:w-1/3 border-2 border-stone-300 bg-stone-200 rounded-md p-4'>

          <div className='text-stone-800 text-base'>{"Product Manager Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Purolator | May to August 2025"}</div>
      </div>

      <div className='md:w-1/3 border-2 border-stone-300 bg-stone-200 rounded-md p-4'>

          <div className='text-stone-800 text-base'>{"Product Designer Intern"}</div>
          <div className='text-stone-500 text-sm'>{"WealthyPlanet | September to December 2024"}</div>
      </div>

      <div className='md:w-1/3 border-2 border-stone-300 bg-stone-200 rounded-md p-4'>

          <div className='text-stone-800 text-base'>{"Product Designer Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Toronto-Dominion Bank | January to April 2024"}</div>
      </div>
    </div>

    
    <div class="flex flex-col md:flex-row w-full gap-4 pt-4">
      <div className='md:w-1/3 border-2 border-stone-300 bg-stone-200 rounded-md p-4'>
          <div className='text-stone-800 text-base'>{"Product Manager Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Openlane | May to August 2023"}</div>
      </div>

<div className='md:w-1/3 border-2 border-stone-300 bg-stone-200 rounded-md p-4'>
          <div className='text-stone-800 text-base'>{"Product Designer Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Canadian Air Force | September to December 2022"}</div>
      </div>

<div className='md:w-1/3 border-2 border-stone-300 bg-stone-200 rounded-md p-4'>
          <div className='text-stone-800 text-base'>{"Product Designer Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Toronto-Dominion Bank | January to April 2022"}</div>
      </div>
    </div>


    </div>
  )
}

export default Currentlyabout