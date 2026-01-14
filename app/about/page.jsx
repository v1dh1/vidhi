"use client"

import React from 'react'
import AboutMe from './AboutMe'
import Aboutintro from './Aboutintro'
import Aboutcurr from './Aboutcurr'
import Currentlyabout from './Currentlyabout'


import Lefthome from '../home/Lefthome'
import Link from 'next/link';
import { motion } from 'framer-motion';
import Gallery from './Gallery'

const pageTransition = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 20, y: 0 },
  exit: { opacity: 0, y: -10 },
};


const About = () => {
  return (
    <main>
        <div>

    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
  >
      {/* Small screens - LefthomeSmall as a top navbar */}
      <div className="">
        {/* Medium and larger screens - Show Lefthome */}
      <div className="hidden md:block">
<div className="relative z-20">
  <Lefthome />
</div>
      </div>

      {/* Small screens - Show LefthomeSmall */}
      <div className="block md:hidden">
<div className="relative z-20">
  <Lefthome />
</div>
      </div>
        <main className="bg-stone-50 overflow-y-auto">
          <Aboutcurr/>
          <Currentlyabout/>
          <Gallery/>
        </main>
      </div>

      {/* Medium and large screens - Lefthome and Projects side by side */}
      </motion.div>
    </div>
        
    </main>
  )
}

export default About