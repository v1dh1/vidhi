"use client";
import React from 'react'

import Projects from './components/Projects';
import { motion } from 'framer-motion';
import Lefthome from './home/Lefthome';
import LefthomeSmall from './home/LefthomeSmall'
import Homecontent from './home/Homecontent';
import Smallabout from './home/Smallabout';
import Projectsdisplay from './home/Projectsdisplay';

const pageTransition = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 20, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function Home() {
  return (
    <>

    <div>

    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
  >
      return (
          <div>
            {/* Medium and larger screens - Show Lefthome */}
            <div className="hidden md:block">
              <Lefthome />
            </div>
      
            {/* Small screens - Show LefthomeSmall */}
            <div className="block md:hidden">
              <LefthomeSmall />
            </div>
      
            <main className="bg-stone-50 overflow-y-auto">
              <Homecontent />
              <Smallabout />
              <Projectsdisplay />
            </main>
          </div>
        
      
      </motion.div>
    </div>

    

    </>

  );
}
