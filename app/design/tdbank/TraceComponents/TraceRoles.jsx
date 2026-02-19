import React from 'react'
import NextCaseCTA from '../../../components/NextCaseCTA';

const TraceRoles = () => {
  return (
    <div>
<div className="w-full md:w-1/2 mx-auto p-8 md:p-0">

    <div className="pt-16 md:pt-32 font-semibold text-3xl text-stone-800">Outcomes and Impact</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* column 1 */}
        <div>

            <div className='bg-white border-2 border-stone-200 rounded-lg p-4'>

            <div className='text-fuchsia-800 text-base pb-4 font-semibold'>Clear MVP Defintion</div>
            <div className='text-stone-700 text-base'>{"Established a well-scoped MVP that balanced sustainability goals with technical and regulatory constraints."}</div>
        </div>

        </div>

        {/* column 2 */}
        <div className='bg-white border-2 border-stone-200 rounded-lg p-4'>

            <div className='text-fuchsia-800 text-base pb-4 font-semibold '>Improved Discoverability Without Disruption</div>
            <div className='text-stone-700 text-base'>{"Reduced friction by allowing users to explore Trace features before committing to open-banking flows."}</div>
        </div>
        </div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {/* column 1 */}
        <div className='bg-white border-2 border-stone-200 rounded-lg p-4'>

            <div className='text-fuchsia-800 text-base pb-4 font-semibold'>{"Strong Cross-Functional Alignment"}</div>
            <div className='text-stone-700 text-base'>{"User flows and high-fidelity prototypes served as shared artifacts across design, product, and engineering."}</div>
        </div>

        {/* column 2 */}

        </div>

        <div className='text-base text-stone-700 pt-10'>{"This project strengthened my ability to design within complex systems, collaborate across disciplines, and make thoughtful tradeoffs under real-world constraints. It reinforced the value of adaptability, clarity, and user-centred decision-making when working on enterprise-scale products. "}</div>
        <div className='text-base text-stone-700 pt-4 pb-16'>{"A special thanks to Meghna Bellani for guiding me through this project <3"}</div>
    </div>


        
    </div>
  )
}

export default TraceRoles