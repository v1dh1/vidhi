'use client';

import React from 'react'

import { motion } from 'framer-motion';

import Lefthome from '../../home/Lefthome';
import LefthomeSmall from '../../home/LefthomeSmall';
import TraceProject from '../tdbank/TraceProject';
import NextCaseCTA from '../../components/NextCaseCTA';

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
        <main className="bg-stone-50 overflow-y-auto">
          <TraceProject />
          <div className="w-full p-4 md:p-0 md:w-1/2 md:mx-auto">
  <NextCaseCTA
    title="Designing Acquisition + Onboarding During a Fintech Pivot"
    description="Integrated a standalone app into TD Bank’s mobile banking ecosystem for the US market, creating a seamless, trust-driven experience. Aligned multi-disciplinary teams, and delivered a scalable UI framework to support future integrations."
    href="/design/wealthyplanet"
  />
</div>

        </main>
      </div>

      </motion.div>

    </div>



    

    
  )
}

export default Tdbank