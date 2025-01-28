import React from 'react'
import Image from 'next/image'

const TraceIntro = () => {
  return (
    <div>


        <div className='text-stone-800 text-3xl pt-8 font-semibold'>Trace</div>
        <div className='text-stone-600 text-xl pt-2'>{"Integrating a standalone app into the existing TD Mobile Banking App"}</div>

        <div className='text-stone-500 pt-2'> {"⚠️ Disclaimer: Due to intellectual property restrictions on this project, I am unable to publicly discuss all details, or include more pictures. For more details, you can reach out to me :)"}</div>

        <div className='flex flex-row gap-3 pt-4 '>
                    <div className="badge badge-outline border-pink-800 text-pink-400">UX Design</div>
                    <div className="badge badge-outline border-pink-800 text-pink-400">Research</div>
                    <div className="badge badge-outline border-pink-800 text-pink-400">Prototyping</div>
        </div>

        <div className='flex flex-row gap-12 pt-4'>

            <div className='text-stone-600 pt-4'>6 min read</div>

            <div className=''>
                <div className='text-stone-700 pt-4'>TIMELINE</div>
                <div className='text-stone-600'>January - March 2024</div>
            </div>

            <div className=''>
                <div className='text-stone-700 pt-4'>DESIGN ROLE</div>
                <div className='text-stone-600'>{"UI Design, Research"}</div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4 pt-8 pb-4">

        <div className=''>
        <Image
              src="/trace-before.png"
              width={500}
              height={500}
              alt="Trace Before"
            />
          <div className='text-center pt-2 text-stone-500'>Trace Before the Integration</div>
        </div>

        <div className=''>
        <Image
              src="/trace-after.png"
              width={500}
              height={500}
              alt="Trace After"
            />
          <div className='text-center pt-2 text-stone-500'>Trace After the Integration</div>
        </div>

        </div>




</div>
  )
}

export default TraceIntro