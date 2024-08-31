import React from 'react'
import CardContainer from '../../Components/Cards/CardContainer/CardContainer'
import '../../Styles/Global.css'
// import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <div className=' dotBackground'>
   <Header/>
   <main>
    <Outlet/>
   </main>
   <Footer/>
   </div>
  )
}

export default Layout