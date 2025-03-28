'use client'

import Pump from './Pump';


import React from 'react'

import { motion } from 'framer-motion';

import Lefthome from '../home/Lefthome'
import LefthomeSmall from '../home/LefthomeSmall';

const pageTransition = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 20, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Powersupply = () => {
  return (
    <div>

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
            <Pump />
          </main>
        </div>
  

        </motion.div>
  
      </div>
    </div>
  )
}

export default Powersupply