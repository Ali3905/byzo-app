import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import BrandsSection from './BrandsSection'
import MockupSection from './MockupSection'

const Landing = () => {
  return (
    <>
        <NavBar/>
          <BrandsSection />
          <MockupSection />
        <Footer/>
    </>
  )
}

export default Landing
