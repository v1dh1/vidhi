import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const imageAnimation = {
  initial: { rotate: 0 },
  animate: { rotate: [-5, 5, -5], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
};

const Homecontent = () => {
  const text = "Designing for Joy and Impact"; 

  return (
    <div className="relative h-screen overflow-hidden">
      {/* 🌸 Foreground Content */}
      <div className="relative pt-40 z-10 bg-gradient-to-bl h-full">
        <div className="p-8 md:p-16">
          <div className='text-center text-2xl font-garamond text-stone-800 italic'>{"Hello I'm Vidhi! and I enjoy"}</div>

          <div className="h-full flex justify-center items-center relative">
            {/* Rotating Images on the Sides (Only on Medium+ Screens) */}
            <motion.div
              className="absolute left-10 top-1/3 transform -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 hidden md:block"
              variants={imageAnimation}
              initial="initial"
              animate="animate"
            >
              <Image src="/star1.png" alt="Left Decorative Image" width={80} height={80} />
            </motion.div>

            <motion.div className="text-center italic text-7xl md:text-8xl font-garamond text-stone-800 pt-12">
              {text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{
                    x: Math.random() * 100 - 50, // Random horizontal scatter
                    opacity: 0,
                  }}
                  animate={{
                    x: 0, // Final position is centered
                    opacity: 1,
                  }}
                  transition={{
                    delay: i * 0.05, // Stagger the appearance of each letter
                    duration: 0.5,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="absolute right-10 top-1/3 transform -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 hidden md:block"
              variants={imageAnimation}
              initial="initial"
              animate="animate"
            >
              <Image src="/star2.png" alt="Right Decorative Image" width={80} height={80} />
            </motion.div>
          </div>
        </div>

        <div className='pt-20'></div>
        <motion.button
          className="btn rounded-full text-sm bg-purple-50 text-stone-900 border-2 border-dotted border-purple-950 hover:bg-purple-50 mx-auto block px-6 py-2"
          animate={{ y: [0, -5, 0] }} 
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} // Smooth looping animation
        >
          {"Scroll to Explore"}
        </motion.button>
      </div>

      <div 
        className="absolute bottom-0 left-0 w-full h-80 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(216, 180, 254, 0.8), rgba(216, 180, 254, 0))",
          WebkitMaskImage: "radial-gradient(ellipse at bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          maskImage: "radial-gradient(ellipse at bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
        }}
      />
    </div>
  );
};

export default Homecontent;
