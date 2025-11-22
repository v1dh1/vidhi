'use client';

import React from 'react'

import { motion } from 'framer-motion';

import Lefthome from '../../home/Lefthome';
import LefthomeSmall from '../../home/LefthomeSmall';
import TraceProject from '../tdbank/TraceProject';

const pageTransition = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 20, y: 0 },
  exit: { opacity: 0, y: -10 },
};


const Tdbank = () => {
  return (
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
        <Lefthome />
      </div>
        <main className="bg-white pt-16 p-4 md:p-16 overflow-y-auto">
          <TraceProject />
        </main>
      </div>

      </motion.div>

    </div>



    

    
  )
}

export default Tdbank