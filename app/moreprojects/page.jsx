"use client";
import React from 'react'
import EngineeringProjects from './engineering/EngineeringProjects';

import { motion } from 'framer-motion';

import Lefthome from '../home/Lefthome';
import LefthomeSmall from '../home/LefthomeSmall';

const pageTransition = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 20, y: 0 },
  exit: { opacity: 0, y: -10 },
};


const Moreprojects = () => {
  return (


    <div>
      

    <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >


      {/* Small screens - LefthomeSmall as a top navbar */}
      <div className="pt-20">
        <LefthomeSmall />
        <main className="bg-white p-4 overflow-y-auto">
          <EngineeringProjects />
        </main>
      </div>

      {/* Medium and large screens - Lefthome and Projects side by side */}

      </motion.div>

    </div>



    
  )
}

export default Moreprojects