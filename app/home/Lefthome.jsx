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
    <div>
        <div className='p-4'>
        {/* name + title */}
        <Link href="/home">
        <p className='text-2xl text-stone-800 font-medium font-sofia'>{"Vidhi Gokani ★"}</p>
          <p className='text-xs text-stone-600'>Product Designer</p>
          <div className='px-3 py-2 border-b border-pink-200'></div>
          </Link>
          {/* about me intro */}
          

          <Link href="/about">
            <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
              <p className='pt-8 text-l text-stone-800'> About </p>
              <p className='text-xs text-stone-600'>{"What makes me, me ₊˚.🎧 ✩｡☕ 🤎"}</p>
            </motion.div>
          </Link>

          <div className='px-3 py-2 border-b border-pink-200'></div>
          <p className='text-xs text-stone-600 pt-2'>{"I'm a Product Designer from Canada, driven by curiosity and a passion for creating engaging and intuitive user experiences. With a diverse background spanning banking, automotive services, and national defense, I bring a unique perspective to my design work. "}</p>


          {/* case studies layout */}
        <Link href="/home">
          <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
            <p className='pt-8 text-l text-stone-800'>{"Case Studies"}</p>
            <p className='text-xs text-stone-600 pb-4'>{"View my selected project"}s</p>
          </motion.div>
          </Link>


          <div className='text-stone-600 text-sm'>
            <Link href="/protectedPage"><p className='hover:text-pink-600 hover:font-semibold'>{"TD Bank ⤞"}</p></Link>
            <Link href="/wavelyproject"><p className='hover:text-pink-600 hover:font-semibold'>{"Wavely ⤞"}</p></Link>
          </div>

          <div className='px-3 py-2 border-b border-pink-200'></div>
          
         {/* engineering/other ventures */}
         <Link href='/moreprojects'>
         <motion.div whileHover={{ opacity: 0.8, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
         <p className='pt-8 text-l text-stone-800'>{"More Projects"}</p>
          <p className='text-xs text-stone-600'>{"Engineering, Passion Projects and More "}</p>
          <div className='px-3 py-2 border-b border-pink-200'></div>
          </motion.div>
          </Link>

         {/* contact*/}
         <p className='pt-8 text-l text-stone-800'>Contact</p>
          <p className='text-xs text-stone-600 pb-2'>{"I am always looking to connect with new people, feel free to reach out. Currently seeking Summer 2025 internships"}</p>
          <button className="btn btn-xs text-stone-700 bg-pink-100 hover:bg-green-50"><a href='mailto:vidhigokani1@gmail.com'>{"Let's Talk"}</a></button>
          <div className='px-3 py-2 border-b border-pink-200'></div>

     </div>

    </div>
    </motion.div>

  )
}

export default Lefthome