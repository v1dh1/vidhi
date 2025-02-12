"use client"

import type React from "react"
import { motion } from "framer-motion"

interface StarGradientBackgroundProps {
  className?: string;
}

const StarGradientBackground: React.FC<StarGradientBackgroundProps> = ({ className }) => {
  return (
    <div className={`fixed inset-0 z-[-1] overflow-hidden ${className}`}>
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="pink" stopOpacity="1" />
            <stop offset="100%" stopColor="pink" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M100 0 L130 70 L200 80 L150 130 L170 200 L100 160 L30 200 L50 130 L0 80 L70 70 Z"
          fill="url(#starGradient)"
        />
      </motion.svg>
    </div>
  )
}

export default StarGradientBackground;
