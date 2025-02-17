"use client";
import React from 'react'

import Projects from './components/Projects';
import { motion } from 'framer-motion';
import Lefthome from './home/Lefthome';
import LefthomeSmall from './home/LefthomeSmall'
import Homecontent from './home/Homecontent';

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
      {/* Small screens - LefthomeSmall as a top navbar */}
      <div className="">
        <LefthomeSmall />
        <main className="bg-white p-4 overflow-y-auto">
          <Homecontent />
        </main>
      </div>

      {/* Medium and large screens - Lefthome and Projects side by side */}
      </motion.div>
    </div>

    

    </>

  );
}
