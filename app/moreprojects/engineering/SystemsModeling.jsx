"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import Image from 'next/image'


const pageTransition = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 20, y: 0 },
    exit: { opacity: 0, y: -10 },
  };


const SystemsModeling = () => {
  return (

    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
  >
    <div>
    <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
<Link href="https://docs.google.com/document/d/1iZBjVWR-lRn-S8ntJ3eZiOdwJzD76Kxc/edit?usp=sharing&ouid=117211947640378054128&rtpof=true&sd=true">
<div className="card lg:card-side bg-stone-50">
  <figure className='p-4 md:w-1/3'>
  <Image
                    src="/scooter.png"
                    width={700}
                    height={500}
                    alt="Ninebot Human Transporter"
                    />
    
  </figure>
  <div className="card-body md:w-2/3">
    <h2 className="card-title text-stone-700">Modeling a Human Transporter</h2>
    <p className='text-l text-stone-500'>{"This project models the dynamics of the Ninebot S Max human transporter, commonly used by university students, to develop a simulation that ensures stability over maximum travel distances. Using Simulink and SimulationX, the project combines theoretical and experimental approaches to optimize the transporter's performance."}</p>
    <p className='text-m text-stone-500'>{"click to view!"}</p>
   
  </div>
</div>
</Link>
</motion.div>
    </div>
    </motion.div>
  )
}

export default SystemsModeling