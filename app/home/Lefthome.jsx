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
      <div className="navbar bg-stone-50 w-full fixed top-0 left-0 z-50 border-b-2 border-purple-100 flex items-center justify-between px-6 py-3 backdrop-blur-md">
        <Link href="/">{/* Left - Name */}
        <div className="flex-shrink-0">
        <Image src="/vidhisignature.png" alt="Menu Icon" width={150} height={150} className="cursor-pointer" />
        </div>
        </Link>




        {/* Right - Links */}
        <div className="flex space-x-12 text-sm">
        <Link href="/design" className="text-stone-800 hover:text-pink-600 ">
            Work
          </Link>
          <Link href="/about" className="text-stone-800 hover:text-pink-600">
            About
          </Link>
          <Link href="/about" className="text-stone-800 hover:text-pink-600">
            Resume
          </Link>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Lefthome;
