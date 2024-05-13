import React from 'react'
import Image from 'next/image'

const WavelyProjectIntro = () => {
  return (
    <div className='w-3/4 mx-auto'>

        <div className='text-6xl font-sofia text-center text-fuchsia-100 p-4'>Wavely</div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 pb-4">
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
                    <button className="btn btn-xs text-stone-900 bg-fuchsia-100 hover:bg-fuchsia-300 sm:btn-sm md:btn-md lg:btn-md"><a href='https://www.figma.com/proto/klRcf3GeY1OJfcTpiTqPx3/Weavely-App-Design?type=design&node-id=0-1&viewport=-1327%2C-997%2C0.13&t=91XcLNpExsXGVDmd-0&scaling=scale-down&starting-point-node-id=334%3A4698'>View Figma File</a></button>
                </div>

            </div>

        <div className=''>
            

        <Image
              src="/design1.png"
              width={2000}
              height={500}
              alt="survey results from q1"
              
            />
            
        </div>
        </div>
    </div>
  )
}

export default WavelyProjectIntro