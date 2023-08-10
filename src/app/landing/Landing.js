import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Product from '../product/Product'
import ProductDetails from '../product/ProductDetails'

const Landing = () => {
  return (
    <div>
        <NavBar/>
        <ProductDetails/>
        <Product/>
        <Footer/>
    </div>
  )
}

export default Landing
