"use client"

import React, { useState } from 'react'
import Dropdown from '@/components/Dropdown'
import "../../style/Product.css"


const Product = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        // Add more options as needed based on your data
      ];
    
      const handleSelection = (selectedValue) => {
        setSelectedOption(selectedValue);
      };
    return (
    <section className='products'>

    <div className='top'>
        <h2>Products you may like</h2>
        <div>
            <img src="/arrowLeft.svg" alt="previous" className='prev_btn'/>
            <img src="/arrowRight.svg" alt="next" className='next_btn'/>
        </div>
    </div>

    <div className='card ml-96'>

        <div className="badge">
            <p>40% <br/> OFF</p>
            <img src="/badge.svg" alt="" />
        </div>

        <div className='img_container'>
        <img src="/product.svg" alt="product" />
        </div>

      <p className="productName">YADU Natural Sulphurless double refined Sugar</p>

      <span className='price'>
        <p>300&#8377;</p>
        <p>200&#8377;</p>
      </span>

      <div className='btn_group'>
        <Dropdown options={options} onSelect={handleSelection} /> 
        <button>
            <img src="/bag.svg" alt="cart" />
            Add to Bag</button>
      </div>

    </div>

    </section>

  )
}

export default Product
