import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import BrandsSection from './BrandsSection'
import MockupSection from './MockupSection'
import HeroSection from './HeroSection'

const Landing = () => {
  return (
    <>
        <NavBar/>
          <HeroSection/>
          <BrandsSection />
          <MockupSection />
        <Footer/>
    </>
  )
}

export default Landing
