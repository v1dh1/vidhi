import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      <div className="navbar bg-stone-50 w-full fixed top-0 left-0 z-50 border-b-2 border-stone-100 flex items-center justify-between px-6 py-3 backdrop-blur-md">
      {/* Left - Name */}
        <div className="flex-shrink-0">
        <Image src="/menupic.png" alt="Menu Icon" width={40} height={40} className="cursor-pointer" />

        </div>

        {/* Center - Image */}
        <div className="flex-grow flex justify-center">
          <Link href="/home" className="text-2xl text-stone-800 font-apple hover:text-pink-600">
            Vidhi Gokani
          </Link>
        </div>

        {/* Right - Links */}
        <div className="flex space-x-6 text-sm">
        <Link href="/design" className="text-stone-800 hover:text-pink-600 ">
            Work
          </Link>
          <Link href="/about" className="text-stone-800 hover:text-pink-600">
            About
          </Link>

          
        </div>
      </div>
    </motion.div>
  );
};

export default Lefthome;
