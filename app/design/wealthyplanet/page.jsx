"use client";

import { motion } from 'framer-motion';


import Lefthome from '../../home/Lefthome';
import LefthomeSmall from '../../home/LefthomeSmall';

import React from 'react'
import Wpproject from './Wpproject';
import Wone from './Wone';
import Wtwo from './Wtwo';
import Wthree from './Wthree';
import Wfour from './Wfour';
const pageTransition = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 20, y: 0 },
  exit: { opacity: 0, y: -10 },
};


const WealthyPlanet = () => {
  return (
    <div>

        <div>
      

      <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
  
  
        <div className="">
          {/* Medium and larger screens - Show Lefthome */}
      <div className="hidden md:block">
        <Lefthome />
      </div>

      {/* Small screens - Show LefthomeSmall */}
      <div className="block md:hidden">
        <Lefthome />
      </div>
      
          <main className="bg-white overflow-y-auto"> {/*removed p-4*/}
            <div className=''>
              <Wone />
              <Wtwo/>
              <Wthree/>
            
            </div>
          </main>
        </div>
  
       
        </motion.div>
  
      </div>
  
    </div>
  )
}

export default WealthyPlanet