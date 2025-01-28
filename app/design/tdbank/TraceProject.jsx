'use client';
import React from 'react'
import TraceIntro from './TraceComponents/TraceIntro';
import TraceStart from './TraceComponents/TraceStart';
import TraceProblemAndUsers from './TraceComponents/TraceProblemAndUsers';
import TraceRoles from './TraceComponents/TraceRoles';
import TraceDesign from './TraceComponents/TraceDesign';
import TraceOutcomes from './TraceComponents/TraceOutcomes';
import { motion } from 'framer-motion';

const TraceProject = () => {
  return (
    <div>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='container mx-auto w-11/12'>


        <TraceIntro/>
        <TraceStart/>
        <TraceProblemAndUsers/>
        <TraceRoles/>
        <TraceDesign/>
        <TraceOutcomes/>
    </div>
    </motion.div>

    </div>
  )
}

export default TraceProject