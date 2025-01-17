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
      <div className="md:hidden">
        <LefthomeSmall />
        <main className="bg-white p-4 overflow-y-auto">
          <Homecontent />
        </main>
      </div>

      {/* Medium and large screens - Lefthome and Projects side by side */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4">
        {/* Lefthome takes up 1/4 of the screen */}
        <aside className="bg-pink-50 md:col-span-1 sticky top-0 h-screen p-4 overflow-y-auto">
          <Lefthome />
        </aside>

        {/* Projects takes up 3/4 of the screen */}
        <main className="bg-white md:col-span-3 p-4 overflow-y-auto">
          <Homecontent />
        </main>
      </div>
      </motion.div>
    </div>

    

    </>

  );
}
