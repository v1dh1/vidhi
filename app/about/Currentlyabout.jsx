import React from 'react'
import Twocardcol from './Twocardcol'

const Currentlyabout = () => {
  return (
        
<div className='p-4 md:p-24'>

    <div className='text-red-800 text-3xl'>{"my experience,"} <span className="text-stone-800">in detail</span></div>

    <div class="flex flex-col md:flex-row w-full gap-4 pt-4 md:pt-16">
      <div className='md:w-1/3 border border-stone-300 bg-stone-100 rounded-md p-4'>

          <div className='text-stone-800 text-base'>{"Product Manager Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Purolator | May to August 2025"}</div>
          <div className='text-stone-500 text-sm pt-2'>{"Built PowerBI dashboards, market gap and competitive analysis, worked on long term product roadmap"}</div>
      </div>

      <div className='md:w-1/3 border border-stone-300 bg-stone-100 rounded-md p-4'>

          <div className='text-stone-800 text-base'>{"Product Designer Intern"}</div>
          <div className='text-stone-500 text-sm'>{"WealthyPlanet | September to December 2024"}</div>
          <div className='text-stone-500 text-sm pt-2'>{"End to end product design (website and onboarding) for an AI fintech platform"}</div>

      </div>

      <div className='md:w-1/3 border border-stone-300 bg-stone-100 rounded-md p-4'>

          <div className='text-stone-800 text-base'>{"Product Designer Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Toronto-Dominion Bank | January to April 2024"}</div>
          <div className='text-stone-500 text-sm pt-2'>{"Integrating a standalone app into the existing TD Mobile Banking App"}</div>

      </div>
    </div>

    
    <div class="flex flex-col md:flex-row w-full gap-4 pt-4">
      <div className='md:w-1/3 border border-stone-300 bg-stone-100 rounded-md p-4'>
          <div className='text-stone-800 text-base'>{"Product Manager Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Openlane | May to August 2023"}</div>
          <div className='text-stone-500 text-sm pt-2'>{"Created a post-aquisition subscription model spanning digital + physical auctions, increasing cross-service utilization"}</div>

      </div>

<div className='md:w-1/3 border border-stone-300 bg-stone-100 rounded-md p-4'>
          <div className='text-stone-800 text-base'>{"Product Designer Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Canadian Air Force | September to December 2022"}</div>
          <div className='text-stone-500 text-sm pt-2'>{"Cut mission-planning time for Royal Canadian Air Force Search and Rescue squadron"}</div>

      </div>

<div className='md:w-1/3 border border-stone-300 bg-stone-100 rounded-md p-4'>
          <div className='text-stone-800 text-base'>{"Business Systems Analyst Intern"}</div>
          <div className='text-stone-500 text-sm'>{"Toronto-Dominion Bank | January to April 2022"}</div>
          <div className='text-stone-500 text-sm pt-2'>{"Streamlined tax form systems for AML stakeholders"}</div>

      </div>
    </div>


    </div>
  )
}

export default Currentlyabout