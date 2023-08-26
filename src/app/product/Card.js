"use client"

import React, { useState } from 'react'
import "../../style/prod.css"
import Dropdown from '@/components/Dropdown'

const Card = () => {

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
            {window.innerWidth>768?"Add to Bag":""}
            </button>
      </div>

    </div>
  )
}

export default Card
