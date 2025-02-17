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
      <div className="navbar bg-stone-50 w-full fixed top-0 left-0 z-50 border-b-2 border-stone-100 flex items-center justify-between px-6 py-3 shadow-lg backdrop-blur-md">
      {/* Left - Name */}
        <div className="flex-shrink-0">
          <Link href="/home" className="text-2xl text-stone-800 font-bold hover:text-pink-600">
            Vidhi Gokani
          </Link>
        </div>

        {/* Center - Image */}
        <div className="flex-grow flex justify-center">
          <Image src="/menupic.png" alt="Menu Icon" width={40} height={40} className="cursor-pointer" />
        </div>

        {/* Right - Links */}
        <div className="flex space-x-6">
          <Link href="/about" className="text-stone-800 hover:text-pink-600 font-semibold">
            About
          </Link>
          <Link href="/design" className="text-stone-800 hover:text-pink-600 font-semibold">
            Case Studies
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Lefthome;
