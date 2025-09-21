"use client"

import { motion } from "framer-motion"
import React from "react"

interface SectionHeadingProps {
  text: string
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ text, className = "" }) => {
  return (
    <motion.span
      whileHover="whileHover"
      variants={{
        initial: { x: 0 },
        whileHover: { x: -16 },
      }}
      transition={{
        type: "spring",
        staggerChildren: 0.075,
        delayChildren: 0.25,
      }}
  className={`relative z-10 block text-3xl  font-bold text-neutral-500 transition-colors duration-500 hover:text-neutral-50 md:text-5xl ${className}`}
    >
      {text.split("").map((l, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { x: 0 },
            whileHover: { x: 16 },
          }}
          transition={{ type: "spring" }}
          className="inline-block"
        >
          {l}
        </motion.span>
      ))}
    </motion.span>
  )
}
