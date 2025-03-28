"use client"

import React from 'react'
import AboutMe from './AboutMe'


import Lefthome from '../home/Lefthome'
import LefthomeSmall from '../home/LefthomeSmall'
import Link from 'next/link';
import { motion } from 'framer-motion';

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
        <Lefthome />
      </div>

      {/* Small screens - Show LefthomeSmall */}
      <div className="block md:hidden">
        <LefthomeSmall />
      </div>
        <main className="bg-white p-4 overflow-y-auto">
          <AboutMe />
        </main>
      </div>

      {/* Medium and large screens - Lefthome and Projects side by side */}
      </motion.div>
    </div>
        
    </main>
  )
}

export default About