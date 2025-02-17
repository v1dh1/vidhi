"use client";

import { motion } from 'framer-motion';


import Lefthome from '../../home/Lefthome';
import LefthomeSmall from '../../home/LefthomeSmall';

import React from 'react'
import Wpproject from './Wpproject';
import Wone from './Wone';
import Wtwo from './Wtwo';
import Wthree from './Wthree';
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
  
  
        {/* Small screens - LefthomeSmall as a top navbar */}
        <div className="">
          <LefthomeSmall />
          <main className="bg-white overflow-y-auto"> {/*removed p-4*/}
            <div className=''>
              <Wone />
              <Wtwo/>
              <Wthree/>
            
            </div>
          </main>
        </div>
  
        {/* Medium and large screens - Lefthome and Projects side by side 
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4">
          <aside className="bg-pink-50 md:col-span-1 sticky top-0 h-screen p-4 overflow-y-auto">
            <Lefthome />
          </aside>
            <main className="bg-white md:col-span-3 overflow-y-auto">
            <Wpproject />
          </main>
        </div>
        */}
        </motion.div>
  
      </div>
  
    </div>
  )
}

export default WealthyPlanet