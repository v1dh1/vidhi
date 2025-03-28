import React from 'react'
import WealthyPlanet from '../components/projects/Wealthyplanet';
import Uxapp from '../components/projects/Uxapp';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Projectsdisplay = () => {
  return (
    <div>

        <div className='text-5xl font-garamond italic text-center text-stone-700 p-16'>Work 

        </div>

        <div className='p-4 md:px-16'>

            <WealthyPlanet/>

            <div className='pt-16'><Uxapp/></div>

        </div>


    <div className='pt-8 pb-16'>
        <Link href="/design" ><motion.button
      className="btn rounded-full text-sm bg-purple-50 hover:bg-purple-300 text-stone-900 border-2 border-dotted border-purple-950 mx-auto block px-6 py-2"
      animate={{ y: [0, -5, 0] }} 
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} // Smooth looping animation
    >
      See More
    </motion.button></Link></div>



    </div>
  )
}

export default Projectsdisplay