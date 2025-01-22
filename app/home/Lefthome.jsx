import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

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
        <p className='text-2xl font-semibold text-stone-800 font-garamond'>{"Vidhi Gokani ★"}</p>
          <p className='text-xs text-stone-600'>{"Product & Design"}</p>
          <div className='px-3 py-2 border-b border-pink-200'></div>
          </Link>
          {/* about me intro */}
          

          <Link href="/about">
            <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
              <p className='pt-8 text-l font-semibold text-stone-800'> About </p>
              <p className='text-xs text-stone-600 pt-2'>{"I'm a Product Designer from Canada, driven by curiosity and a passion for creating engaging and intuitive user experiences. With a diverse background spanning fintech, automotive services, and national defense, I bring a unique perspective to my design work. "}</p>
          <div className='px-3 py-2 border-b border-pink-200'></div>

            </motion.div>
          </Link>



          {/* case studies layout */}
        <Link href="/design">
          <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
            <p className='pt-8 text-l font-semibold text-stone-800'>{"Design Case Studies"}</p>
            <p className='text-xs text-stone-600 pb-4'>{"View my selected projects"}</p>
          </motion.div>
          </Link>


          <div className='text-stone-600 text-sm'>
            <Link href="/design/wealthyplanet"><p className='hover:text-pink-600 hover:font-semibold pb-2'>{"WealthyPlanet ⤞"}</p></Link>
            <Link href="/design/protectedPage"><p className='hover:text-pink-600 hover:font-semibold'>{"TD Bank ⤞"}</p></Link>
          </div>

          <div className='px-3 py-2 border-b border-pink-200'></div>
          
         {/* engineering/other ventures */}
         <Link href='/moreprojects'>
         <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
         <p className='pt-8 text-l font-semibold text-stone-800'>{"More Projects"}</p>
          <p className='text-xs text-stone-600'>{"Engineering, Passion Projects and More "}</p>
          <div className='px-3 py-2 border-b border-pink-200'></div>
          </motion.div>
          </Link>

         {/* contact*/}
         <p className='pt-8 text-l text-stone-800 font-semibold'>Contact</p>
          <p className='text-xs text-stone-600 pb-4'>{"I am always looking to connect with new people, feel free to reach out."} <strong>Currently seeking Summer 2025 internships</strong></p>

          <div className="flex space-x-4">

          <motion.div whileHover={{scale: 0.95 }}
              transition={{ duration: 0.2 }}>
            <button className="btn btn-sm text-stone-700 bg-pink-200 hover:bg-pink-400 border-pink-800">
              <a href='mailto:vidhigokani1@gmail.com'>{"Let's Talk"}</a>
            </button>
            </motion.div>

            <motion.div whileHover={{scale: 0.95 }}
              transition={{ duration: 0.2 }}>
            <button className="btn btn-sm text-stone-700 bg-pink-200 hover:bg-pink-400 border-pink-800">
              <a href='https://drive.google.com/file/d/1dYT9M2ICSXjgdHJ-6tBbqt8tai_7fq79/view?usp=sharing'>{"Resume"}</a>
            </button>
            </motion.div>
          </div>

          <div className='px-3 py-2 border-b border-pink-200'></div>


     </div>

    </div>
    </motion.div>

  )
}

export default Lefthome