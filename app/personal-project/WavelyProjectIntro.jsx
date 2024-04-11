import React from 'react'

const WavelyProjectIntro = () => {
  return (
    <div className='w-11/12 mx-auto'>

        <div className='text-6xl font-sofia text-center text-fuchsia-100 p-4'>Wavely</div>

        <div className="grid grid-cols-2 gap-4 p-4">
            <div className=''>
                
                <div className='text-xl text-stone-200'>Wavely App Design</div>
                <div className='text-4xl text-stone-100'>{"Sourcing hobby materials sustainably."}</div>

                <div className='flex flex-row gap-3 pt-4 '>
                    <div className="badge badge-outline border-fuchsia-100 text-fuchsia-100">Product Design</div>
                    <div className="badge badge-outline border-fuchsia-100 text-fuchsia-100">Branding</div>
                    <div className="badge badge-outline border-fuchsia-100 text-fuchsia-100">End to End</div>
                </div>

                <div className='text-stone-200 pt-4'>10 min read</div>

                <div className=''>
                    <div className='text-stone-100 pt-4'>TIMELINE</div>
                    <div className='text-stone-300'>Feb-April 2024</div>
                </div>

                <div className=''>
                    <div className='text-stone-100 pt-4'>DESIGN ROLE</div>
                    <div className='text-stone-300'>{"Product, UX/UI, Research, Branding"}</div>
                </div>

                <div className='pt-4'>
                    <button className="btn btn-xs text-stone-900 bg-fuchsia-100 hover:bg-fuchsia-300 sm:btn-sm md:btn-md lg:btn-md">View Figma File</button>
                </div>

            </div>

        <div className='bg-fuchsia-500'>fjen</div>
        </div>
    </div>
  )
}

export default WavelyProjectIntro