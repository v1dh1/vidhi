"use client";

import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";





const Values = () => {

   
  return (
    <div>

      <motion.div
  whileHover={{ rotate: 2, scale: 1.03 }}
  transition={{ type: "spring", stiffness: 150, damping: 12 }}
  className='border-white bg-red-900 border-6 rounded-xl p-4'
>



<div className=' border-white bg-red-900 border-6 rounded-xl'>
  <div className='text-lg text-stone-100 p-4'>
    {"how does my personality fit into design?"}
  </div>

  <div className="flex flex-col md:flex-row w-full gap-4 p-4 md:items-center">
    
        <div className="md:w-3/4 w-full md:pr-8">

    <div className='text-base text-stone-200'>
      <div className='pt-2'>
        {"i see design like communication: a bridge between what people feel and what they need."}
      </div>
      <div className='pt-6'>{"every project starts as a simple observation, a frustration, a moment of empathy. grounded in curiosity and care, it grows through questions: how does this help? who does this empower? what story does this carry?"}</div>
      <div className='pt-6'>{"with an engineer’s instinct, the idea takes shape. structured, purposeful, and quietly ambitious. prototypes, workflows, interfaces. each piece becomes a language of its own, translating complexity into clarity."}</div>
      <div className='pt-6'>{"then comes the human layer. the colors of emotion. the details that make someone feel understood. the choices that turn a tool into a companion, a device into a moment of connection."}</div>
      <div className='pt-6'>{"design, to me, is a dialogue. always evolving, always listening, shaped by the people who move through it."}</div>
</div>
    </div>
    
    



  </div>
</div>
</motion.div>

    </div>
  )
}

export default Values