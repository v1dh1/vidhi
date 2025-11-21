'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion';


const Uxapp = () => {
  return (
    <div className='pt-4'>

    <Link href="/design/wavely">

    <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
        
        <div className="card lg:card-side bg-babytaupe">
        <figure className=''></figure>
        <div className="card-body">

          <div className='flex justify-center'>

          <Image
                src="/WavelyCover.png" // The path to your image
                alt="Descriptive text for the image"
                layout="fit" // This makes the image fill the container
                objectFit="cover" // This makes the image cover the available space, you can adjust as needed
                className="rounded-lg" // Ensures the image has rounded corners like the container
                height={400}
                width={400}
            />

          </div>

          <div className=''>
            <h2 className="card-title text-stone-700 text-xl"> {"Wavely - Bringing back bartering"} </h2>
            <p className='text-stone-700'>{"Case Study | Personal Project | 2024"}</p>

            <div className='flex flex-wrap gap-2 pt-4'>
            <div className="badge badge-md badge-outline border-red-800 text-red-800">UI Design</div>
            <div className="badge badge-md badge-outline border-red-800 text-red-800">UX Design</div>
            <div className="badge badge-md badge-outline border-red-800 text-red-800">Design Thinking</div>
            <div className="badge badge-md badge-outline border-red-800 text-red-800">Research</div>

            </div>

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

export default Uxapp