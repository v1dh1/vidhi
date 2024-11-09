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


const Hydroelectricgen = () => {
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
<Link href="/powersupply">
<div className="card lg:card-side bg-stone-50">
  <figure className='p-4 md:w-1/3'>
  <Image
                    src="/fopo1.png"
                    width={700}
                    height={500}
                    alt="Ninebot Human Transporter"
                    />
    
  </figure>
  <div className="card-body md:w-2/3">
    <h2 className="card-title text-stone-700">{"Building a Hydroelectric Power Generator"}</h2>
    <p className='text-l text-stone-500'>{"This project developed a hydroelectric-powered electromechanical system that converts AC to a stable 5V DC output suitable for charging a phone. Using bridge rectifiers, capacitors, and a voltage regulator, the design efficiently stabilizes the output for consistent device power."}</p>
    <p className='text-m text-stone-500'>{"click to view!"}</p>
   
  </div>
</div>
</Link>
</motion.div>
    </div>
    </motion.div>
  )
}

export default Hydroelectricgen