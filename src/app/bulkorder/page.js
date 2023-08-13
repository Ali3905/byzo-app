import React from 'react'
import BulkOrder from './BulkOrder'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
        <NavBar/>
            <BulkOrder/>
        <Footer/>
    </div>
  )
}

export default page
