"use client"

import React, { useState } from 'react'
import "../../style/productDetails.css"
import Image from 'next/image'
import Dropdown from '@/components/Dropdown'

const ProductDetails = () => {
    const [selectedOption, setSelectedOption] = useState("")

    const data = {
        title: "YADU Natural Sulphurless double refined Sugar",
        details: "New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached",
        originalPrice: 300,
        discountedPrice: 200,
        weightVariations:  [
            { value: "1", label: "1 kg" },
            { value: "2", label: "2 kg" },
            { value: "3", label: "3 kg" },
            // Add more options as needed based on your data
          ],
        quantity: 1,
        images: [ "/p1.svg", "/p2.svg", "/p3.svg", "/p4.svg", "/p5.svg" ],
        mainImg: "/product.svg",
    }

    const handleSelection = (selectedValue) => {
        setSelectedOption(selectedValue);
      };

  return (
    <div className='product_details'>
      <div className="pics">
        <div className="pics_group">
            {data.images.map((ele)=>{
                return <Image 
                src={ele}
                height={60}
                width={60}
                />
            })}
        </div>
        <div className="main_pic">
            <Image 
            src={data.mainImg}
            height={400}
            width={400}
            />
        </div>
      </div>
      <div className="details">
        <h2>{data.title}</h2>
        <p>About Product</p>
        <p>{data.details}</p>
        <div className='quantity_container'>

        <div>
        <p>Quantity</p>
        <Dropdown options={data.weightVariations} onSelect={handleSelection}/>
        </div>
        <div className='quantity'>
            <button>-</button>
            <p>{data.quantity}</p>
            <button>+</button>
        </div>
        <div className='price'>
            <p>{data.originalPrice}</p>
            <p>{data.discountedPrice}</p>
        </div> 
        </div>
            <button className='btn_cart'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails
