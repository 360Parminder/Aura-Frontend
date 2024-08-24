import React from 'react'
import { IonIcon } from '@ionic/react';
import {arrowForwardOutline } from 'ionicons/icons';
import movie from '../../../assets/images/movie1.png'
import {motion} from 'framer-motion'
const CategoriesCard = () => {
  return (
    <>
    <motion.div
    initial={{
        opacity:0,
        z:-100
       }}
       animate={{
        opacity:1,
        z:0,
        transition:{
          delay:0.6,
          duration:1.5,
          ease: [0.4, 0.0, 0.2, 1],
        }
       }}
    className='flex flex-col gap-5 rounded-md border-2 border-[#1A1A1A] px-5 py-4 backdrop-blur bg-transparent'>
        <div className=' grid grid-cols-2 gap-2 shadow-[#fff] shadow-inner'>
            <img className='w-[100px] h-[100px] rounded-lg' src={movie} alt="" />
            <img className='w-[100px] h-[100px] rounded-lg' src={movie} alt="" />
            <img className='w-[100px] h-[100px] rounded-lg' src={movie} alt="" />
            <img className='w-[100px] h-[100px] rounded-lg' src={movie} alt="" />
        </div>
        <div className='flex justify-between items-center px-4 '>
            <p>Action</p> 
            <button className='flex items-center '><IonIcon icon={arrowForwardOutline} className="text-[25px] text-[#ffffff]" /></button>
        </div>
    </motion.div>
    </>
  )
}

export default CategoriesCard