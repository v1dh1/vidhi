'use client'
import React from 'react'
import Uxapp from './projects/Uxapp';
import Trace from './projects/Trace';
import Goco from './projects/Goco';
import Wealthyplanet from './projects/Wealthyplanet';
import Projectcard from './Projectcard';
import ProjectCardPic from './Projectcardpic';
import Link from 'next/link';
const Projects = () => {
  return (

    <div className='relative z-20 flex justify-center w-full'>
      <div className="w-full md:px-16 py-16 p-4"> {/*removed p-4*/}

                    <div className='text-2xl pt-16 text-fuchsia-900 font-custom pb-16'>{"Hello! I'm Vidhi, a product designer with 2 years of experience in"} <strong>enterprise</strong> {" and"} <strong>fintech</strong>{" design."}</div>



<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
  <Link href="/design/wealthyplanet">
  
      <ProjectCardPic
    title="Redesigning WealthyPlanet's Website"
    info="Increasing conversion rates"
    tag="Desktop Design"
    videoSrc="/wpvid.mp4"
    alt="video of wealthyplanet demo"
  />
  </Link>

<Link href="/design/wavely">
  <ProjectCardPic
    title="Wavely"
    info="Sourcing hobby materials sustainably."
    tag="Mobile Design"
    imageSrc="./WavelyCover.png"
    alt="wavely screenshot"
  />
</Link>

<Link href="/design/tdbank">
  <ProjectCardPic
    title="TD Bank"
    info="Integrating a standalone app into the existing TD Mobile Banking App."
    tag="Mobile Design"
    imageSrc="./trace-after.png"
    alt="Screenshot of TD Bank work"
  />
  </Link>
</div>






       


    </div>


    </div>
  )
}

export default Projects