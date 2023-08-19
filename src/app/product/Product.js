"use client"

import React, { useEffect, useState } from 'react'
import Dropdown from '@/components/Dropdown'
import "../../style/Product.css"


const Product = () => {
  let width = 0
    const [selectedOption, setSelectedOption] = useState("");
    const [hideDetails, sethideDetails] = useState(false)
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        // Add more options as needed based on your data
      ];
    
      const handleSelection = (selectedValue) => {
        setSelectedOption(selectedValue);
      };

      useEffect(()=>{
        window.addEventListener('resize', ()=> {
          if(window.innerWidth < 769){
            sethideDetails(true)
            console.log("I am small");
          }else{
            console.log("I am Large");
            sethideDetails(false)
          }
          })
  
        if (window.innerWidth<769) {
          console.log("main choti bachi hun");
          
          sethideDetails(true)
        }
      },[])
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
            {!hideDetails?"Add to Bag":null}
            </button>
      </div>

    </div>

    </section>

  )
}

export default Product
