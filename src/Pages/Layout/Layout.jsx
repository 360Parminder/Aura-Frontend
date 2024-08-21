import React from 'react'
// import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'

const Layout = () => {
  return (
   <>
   <Header/>
   <main>
   <HeroSection/>
   </main>
   <Footer/>
   </>
  )
}

export default Layout