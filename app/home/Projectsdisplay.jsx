import React from 'react'
import WealthyPlanet from '../components/projects/Wealthyplanet';
import Uxapp from '../components/projects/Uxapp';
import { motion } from 'framer-motion';
import Projectcard from '../components/Projectcard';
import Link from 'next/link';
import ProjectCardPic from '../components/Projectcardpic';

const Projectsdisplay = () => {
  return (
    <div>

        <div className='text-2xl font-custom italic text-center text-stone-700 p-16'>Work 

        </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-16">
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


    <div className='pt-8 pb-16'>
        <Link href="/design" ><motion.button
      className="btn rounded-full text-sm bg-red-800 hover:bg-red-800 text-stone-50 border-2 border-dotted border-red-950 mx-auto block px-6 py-2"
      animate={{ y: [0, -5, 0] }} 
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} // Smooth looping animation
    >
      See More
    </motion.button></Link></div>



    </div>
  )
}

export default Projectsdisplay