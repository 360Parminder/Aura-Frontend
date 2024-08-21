import React from 'react'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <>
    <motion.div
    initial={{
      opacity: 0,
      y: -100

    }}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
        }

    }}
    className='w-screen flex flex-row justify-between items-center px-10 absolute z-10 bg-transparent'>
        <img src="" alt="" />
        <div className='flex flex-row justify-between w-2/6 rounded-md border-2 border-[#1A1A1A] px-5 py-3 my-4'>
        <button className=' rounded-md bg-[#1A1A1A] px-4 py-2 '>Home</button>
        <button>Movies & Shows</button>
        <button>Support</button>
        <button>Subscriptions</button>
        </div>
        <div>
            <img src="" alt="" />
        </div>
    </motion.div>
    </>
  )
}

export default Header