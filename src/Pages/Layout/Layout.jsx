import React from 'react'
import CardContainer from '../../Components/Cards/CardContainer/CardContainer'
import '../../Styles/Global.css'
// import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'

const Layout = () => {
  return (
   <div className=' dotBackground'>
   <Header/>
   <main>
   <HeroSection/>
   <CardContainer/>
   </main>
   <Footer/>
   </div>
  )
}

export default Layout