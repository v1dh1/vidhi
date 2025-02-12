import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image'


const pageTransition = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 20, y: 0 },
  exit: { opacity: 0, y: -10 },
};


const Lefthome = () => {
  return (

    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
  >
    <div className=''>
        <div className='p-4 '>
        {/* name + title */}
        <Link href="/home">
        <p className='text-xl font-semibold text-stone-800'>{"Vidhi Gokani ★"}</p>
          <p className='text-xs text-pink-800 font-semibold'>{"Product & Design"}</p>
          <p className='text-xs text-stone-600 pt-2'>blending UX, code, and strategy across fintech, automotive, and defense.</p>
          <div className='text-stone-800 pt-2'>₊✩‧₊˚౨ৎ˚₊✩‧₊</div>
          </Link>
          {/* about me intro */}
          
          <Link href="/about">
            <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
              <p className='pt-8 text-sm text-stone-800'> ☺ About ➜</p>

            </motion.div>
          </Link>

          {/* case studies layout */}
        <Link href="/design">
          <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
            <p className='pt-4 text-sm text-stone-800'>{"✎ Design Case Studies ➜ "}</p>
          </motion.div>
          </Link>
          
         {/* engineering/other ventures */}
         <Link href='/moreprojects'>
         <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
         <p className='pt-4 text-sm text-stone-800'>{"✄ More Projects ➜ "}</p>
          </motion.div>
          </Link>

         {/* contact*/}

         <div className='absolute bottom-10 left-0 w-full p-8'>
         <p className='pt-8 text-sm text-stone-800 font-semibold'>☏ Contact</p>
          <p className='text-xs text-stone-600 pb-4'>{"I am always looking to connect with new people, feel free to reach out."} <strong>Currently seeking Summer 2025 internships</strong></p>

          <div className="flex space-x-4">

          <motion.div whileHover={{scale: 0.95 }}
              transition={{ duration: 0.2 }}>
            <button className="btn btn-sm text-stone-700 bg-pink-100 hover:bg-pink-400 border-pink-200 shadow-none">
              <a href='mailto:vidhigokani1@gmail.com'>{"Let's Talk"}</a>
            </button>
            </motion.div>

            <motion.div whileHover={{scale: 0.95 }}
              transition={{ duration: 0.2 }}>
            <button className="btn btn-sm text-stone-700 bg-pink-100 hover:bg-pink-400 border-pink-200 shadow-none">
              <a href='https://drive.google.com/file/d/17yrjiXJH-UxOqY7wsYzWtKrc1H3WzCiG/view?usp=sharing'>{"Resume"}</a>
            </button>
            </motion.div>
          </div>
          </div>



     </div>

    </div>
    </motion.div>

  )
}

export default Lefthome