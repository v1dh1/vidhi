'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Goco = () => {
  return (
    <div>

<div className='pt-4'>

<Link href="/design/goco">

  <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
            transition={{ duration: 0.2 }}>
      
      <div className="card lg:card-side bg-stone-50">
      <figure>
        <Image
                  src="/trace-after.png" 
                  alt="Descriptive text for the image"
                  layout="fit"
                  objectFit="cover" 
                  className="rounded-lg" 
                  height={400}
                  width={400}
              />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-stone-600 text-2xl">{"GoCo: Smart Mobility As A Service"}</h2>
        <p className='text-stone-700'> {"Personal Project | 2024"}</p>
        
        <div className='flex flex-wrap gap-2 pt-4'>
                <div className="badge badge-sm md:badge-sm lg:badge-md badge-outline border-pink-400 text-pink-400">UI Design</div>
                <div className="badge badge-sm md:badge-sm lg:badge-md badge-outline border-pink-400 text-pink-400">Prototyping</div>
                <div className="badge badge-sm md:badge-sm lg:badge-md badge-outline border-pink-400 text-pink-400">Design Thinking</div>
        </div>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>

      </motion.div>

      </Link>
  
      </div>
    </div>
  )
}

export default Goco