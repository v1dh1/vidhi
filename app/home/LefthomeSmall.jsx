import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 20, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const LefthomeSmall = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <div className="navbar bg-pink-50 w-full fixed top-0 z-50">
        <div className="flex-1">
          <Link href="/home" className="btn btn-ghost text-2xl text-stone-800 font-medium font-sofia">
            Vidhi Gokani ★
          </Link>
        </div>
        <div className="flex-none">
          <button onClick={toggleDropdown} className="btn btn-ghost text-stone-900">
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-opacity-95 flex flex-col p-4 bg-pink-50">
          <div className="flex justify-between items-center mb-4">
            <Link href="/home" className="text-2xl text-stone-800 font-medium font-sofia">
              Vidhi Gokani ★
            </Link>
            <button onClick={toggleDropdown} className="btn btn-ghost text-xl">
              ✕
            </button>
          </div>

          <div className="flex flex-col space-y-4 bg-pink-50">
            <Link href="/about">
              <motion.div
                whileHover={{ opacity: 0.8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="py-2"
              >
                <p className="text-l text-stone-800">About</p>
                <p className="text-xs text-stone-600">
                  What makes me, me ₊˚.🎧 ✩｡☕ 🤎
                </p>
              </motion.div>
            </Link>

            <Link href="/home">
              <motion.div
                whileHover={{ opacity: 0.8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="py-2"
              >
                <p className="text-l text-stone-800">Case Studies</p>
                <p className="text-xs text-stone-600">
                  View my selected projects
                </p>
              </motion.div>
            </Link>

            <Link href="/protectedPage">
              <p className="hover:text-pink-600 text-stone-500 hover:font-semibold">
                TD Bank ⤞
              </p>
            </Link>

            <Link href="/wavelyproject">
              <p className="hover:text-pink-600 text-stone-500 hover:font-semibold">
                Wavely ⤞
              </p>
            </Link>

            <Link href="/moreprojects">
              <motion.div
                whileHover={{ opacity: 0.8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="py-2"
              >
                <p className="text-l text-stone-800">More Projects</p>
                <p className="text-xs text-stone-600">
                  Engineering, Passion Projects and More
                </p>
              </motion.div>
            </Link>

            <div className="py-2">
              <p className="text-l text-stone-800">Contact</p>
              <p className="text-xs text-stone-600 pb-2">
                I am always looking to connect with new people, feel free to reach out. 
                Currently seeking Summer 2025 internships
              </p>
              <button className="btn btn-xs text-stone-700 bg-pink-100 hover:bg-green-50">
                <a href="mailto:vidhigokani1@gmail.com">Let's Talk</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default LefthomeSmall;