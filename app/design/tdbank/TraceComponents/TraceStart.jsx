import React from 'react'
import { motion } from 'framer-motion'
const TraceStart = () => {
  return (
    <div>
<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">

    <div className="pt-16 md:pt-32 font-semibold text-3xl text-stone-800">TLDR</div>
    <div className='text-stone-600 text-base pt-8'>{"Integrated Trace, a sustainability-focused rewards platform, into TD’s U.S. Mobile Banking App to support local businesses and advance TD’s ESG goals."}</div>
    <div className='text-stone-600 text-base pt-2'>{"Defined the MVP and future open-banking flows for the TD mobile banking app under a 4-month timeline, working across designers, PMs, and engineers to enable internal demos and stakeholder buy-in across multiple lines of business."}</div>



</div>

<div className='pt-16 md:pt-32'>

  <div className="w-full md:w-1/2 mx-auto p-8 md:p-0">
     <div className='text-stone-900 text-3xl font-semibold pb-8'>Overview</div>

     <div className='text-red-800 text-2xl pb-4'>Context</div>
     <div className='text-stone-700 text-base'>{"This project took place within TD’s innovation ecosystem, where Trace had already proven value as a standalone product but faced adoption and scalability challenges."}</div>
    <div className='text-stone-700 text-base pt-2'>{"While Trace aligned strongly with sustainability and community impact, the standalone app introduced friction: users needed to download, onboard, and maintain a separate product outside of their primary financial tools. Integrating Trace into TD’s mobile banking app presented an opportunity to reduce friction, increase visibility, and embed sustainable spending directly into users’ existing financial routines."}</div>
</div>
</div>


{/*understanding the space section and key challenges*/}

<div className='w-full md:w-1/2 mx-auto pt-8 md:pt-16 p-8 md:p-0'>

    <div className='text-red-800 text-2xl pb-4'>Understanding the Space</div>
    <div className='text-stone-700 text-base'>{"Trace sits at the intersection of financial behavior, sustainability, and local commerce. While the product’s mission was rooted in sustainability, early research revealed that leading with sustainability alone limited engagement across broader user groups."}</div>

    <div className='text-stone-700 text-base pt-3 pb-3'>{"Through user interviews and internal discussions, I identified a key insight:"}</div>
    <div className='border-l-4 border-red-800 p-2 text-stone-700 text-base'>{"Users were more motivated by local relevance and tangible rewards than abstract sustainability benefits."}</div>
    <div className='text-stone-700 text-base pt-4 pb-16'>{"This led to a strategic pivot toward a local-first framing, where sustainability became an embedded outcome rather than the primary entry point."}</div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* column 1 */}
        <div>

            <div className='text-red-800 text-2xl pb-4'>Key Challenges Identified</div>
            <div className='text-stone-700 text-base'>{"The following challenges were identified during the initial research phase."}</div>

        </div>

        {/* column 2 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-red-800 text-base pb-4 font-semibold'>Habit Driven Banking Behaviour</div>
            <div className='text-stone-700 text-base'>{"TD mobile users open the app with specific goals (check balances, move money). Any new feature needed to respect these routines rather than compete with them."}</div>
        </div>
        </div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {/* column 1 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-red-800 text-base pb-4 font-semibold'>{"Discoverability Without Disruption"}</div>
            <div className='text-stone-700 text-base'>{"Trace needed to be visible enough to drive engagement, but subtle enough to avoid overwhelming or confusing users."}</div>
        </div>

        {/* column 2 */}
        <div className='bg-stone-100 border-2 border-stone-200 shadow-lg rounded-lg p-4'>

            <div className='text-red-800 text-base pb-4 font-semibold'>{"Multiple Stakeholders, Multiple Incentives"}</div>
            <div className='text-stone-700 text-base'>{"The experience needed to resonate with TD customers interested in rewards and local spending, non-TD users who could be converted through Trace, internal lines of business evaluating ROI, risk, and brand alignment"}</div>
        </div>
        </div>

      {/*hmw section*/}
      <div className='pt-16'>
        <div className='text-red-800 text-2xl pb-4'>HMW Statement</div>
        <div className='text-stone-700 text-base'>{"How might we integrate a sustainability-driven rewards platform into TD’s mobile banking app in a way that:"}</div>
        <ul className='list-disc list-inside text-stone-700 text-base pt-4'>
            <li>{"feels native to existing banking workflows"}</li>
            <li>{"increases engagement with local businesses"}</li>
            <li>{"and supports TD’s ESG and U.S. expansion goals, without disrupting user trust or habits?"}</li>
        </ul>
      </div>
    

</div>




</div>


  )

}

export default TraceStart