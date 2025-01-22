'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';




const Trace = () => {
  return (
<div className='pt-4'>

  <Link href="/design/protectedPage">

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
          <h2 className="card-title text-stone-700 text-xl">{"Integrating a standalone app into the TD mobile banking app in the US market"}</h2>
          <p className='text-stone-700'> {"TD Innovation Lab | 2024"}</p>
          
          <div className='flex flex-wrap gap-2 pt-4'>
                  <div className="badge badge-md badge-outline border-pink-800 text-pink-800">UI Design</div>
                  <div className="badge badge-md badge-outline border-pink-800 text-pink-800">Prototyping</div>
                  <div className="badge badge-md badge-outline border-pink-800 text-pink-800">Design Thinking</div>
          </div>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>

        </motion.div>

        </Link>
    
        </div>
  )
}

export default Trace