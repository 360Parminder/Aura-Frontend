import { motion} from 'framer-motion'
import React from 'react'
import { HeroHighlight, Highlight } from '../ui/HeroHighlight'

const HeroSection = () => {
  return (
    <>
    <HeroHighlight>
    <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <h1 className=' text-6xl font-bold mb-5'>Aura</h1>
        <Highlight className="text-black dark:text-white">
        Stream the Latest Hits and Hidden Gems!
        </Highlight>
      </motion.div>
    </HeroHighlight>
    </>
  )
}

export default HeroSection