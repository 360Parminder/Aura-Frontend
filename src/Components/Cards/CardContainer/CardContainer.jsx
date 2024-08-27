import React from 'react'
import CategoriesCard from '../Categories/CategoriesCard'
import './CardContainer.css'
import '../../../Styles/Mixins.css'
import '../../../Styles/Global.css'
import {motion} from 'framer-motion'
const CardContainer = () => {
  return (
   <>
   <div className='flex flex-col gap-10 dotBackground'>
   <motion.div
   initial={{
    opacity:0,
    x:-100
   }}
   animate={{
    opacity:1,
    x:0,
    transition:{
      delay:0.5,
      duration:1,
      ease: [0.4, 0.0, 0.2, 1],
    }
   }}
   className='flex flex-col gap-1 ms-11 mt-10 appear'>
   <h2 className=' text-3xl'>Explore our wide variety of categories</h2>
    <p className='text-[#999999]'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
   </motion.div>
   <div className=' flex flex-col md:flex-row items-center justify-center gap-5 w-screen h-[50vh] overflow-scroll appear'>
    <CategoriesCard/>
    <CategoriesCard/>
    <CategoriesCard/>
    <CategoriesCard/>
    <CategoriesCard/>
   </div>
   </div>
   </>
  )
}

export default CardContainer