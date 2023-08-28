import Image from 'next/image'
import React from 'react'
import "../../style/Brands.css"

const BrandsSection = () => {
    const brands = [{
        "name" : "Red Bull",
        "logo" : "/redbull.svg"
    }, {
        "name" : "Amul",
        "logo" : "/amul.svg"
    }, {
        "name" : "ITC",
        "logo" : "/itc.svg"
    }, {
        "name" : "Tata",
        "logo" : "/tata.svg"
    }, {
        "name" : "Cadbury",
        "logo" : "/cadbury.svg"
    }, {
        "name" : "Boat",
        "logo" : "/boat.svg"
    }, {
        "name" : "Parle",
        "logo" : "/parle.svg"
    }, {
        "name" : "Durex",
        "logo" : "/durex.svg"
    }, {
        "name" : "Red Bull",
        "logo" : "/redbull.svg"
    }, {
        "name" : "Amul",
        "logo" : "/amul.svg"
    }, {
        "name" : "ITC",
        "logo" : "/itc.svg"
    }, {
        "name" : "Tata",
        "logo" : "/tata.svg"
    }, {
        "name" : "Cadbury",
        "logo" : "/cadbury.svg"
    }, {
        "name" : "Boat",
        "logo" : "/boat.svg"
    }, {
        "name" : "Parle",
        "logo" : "/parle.svg"
    }, {
        "name" : "Durex",
        "logo" : "/durex.svg"
    },  ]
  return (
    <section className='brands_section'>
      <h2>Brands</h2>
      <div className="brands_container">
        {brands.length > 0 && brands.map((ele)=>{
            return <div className='brand'>
                <Image 
                src={ele.logo}
                width={20}
                height={20}
                />
            </div>
        })}
      </div>
      
    </section>
  )
}

export default BrandsSection
