'use client';
import React from 'react'
import TraceIntro from './TraceComponents/TraceIntro';
import TraceStart from './TraceComponents/TraceStart';
import TraceProblemAndUsers from './TraceComponents/TraceProblemAndUsers';
import TraceRoles from './TraceComponents/TraceRoles';
import TraceDesign from './TraceComponents/TraceDesign';
import TraceOutcomes from './TraceComponents/TraceOutcomes';

const TraceProject = () => {
  return (
    <div>
      
      <div className='container mx-auto w-3/4'>


        <TraceIntro/>
        <TraceStart/>
        <TraceProblemAndUsers/>
        <TraceRoles/>
        <TraceDesign/>
        <TraceOutcomes/>
    </div>

    </div>
  )
}

export default TraceProject