"use client"

import React, { useEffect, useState } from 'react'
import "../../style/Category.css"
import Image from 'next/image'
import Card from '../product/Card'

const Category = () => {
    const [arr, setArr] = useState([])
    const category_items = [{
        "img" : "/category.png",
        "title" : "Tea Coffee & more",
    }, {
        "img" : "/category.png",
        "title" : "Tea Coffee & more",
    }, {
        "img" : "/category.png",
        "title" : "Tea Coffee & more",
    }, {
        "img" : "/category.png",
        "title" : "Tea Coffee & more",
    }, {
        "img" : "/category.png",
        "title" : "Tea Coffee & more",
    }, {
        "img" : "/category.png",
        "title" : "Tea Coffee & more",
    }, ]

    useEffect(()=>{
       setArr(Array.from({length: 10}, (_, i) => i + 1))
        console.log(arr);
    }, [])

  return (
    <div className='category'>
      <div className="category_items_parent">
        <div>

        <h3>Categories you may like</h3>
        <div>
            <img src="/arrowLeft.svg" alt="previous" className='prev_btn'/>
            <img src="/arrowRight.svg" alt="next" className='next_btn'/>
        </div>

        </div>
        <div className="category_items_container">
        {category_items.map((ele)=>{
            
        return <div className='category_item'>
            <Image 
            src={ele.img}
            width={58}
            height={45}
            />
            <p>{ele.title}</p>
        </div>
        })}
        </div>
        <div className="category_products">
        {arr.length > 0 &&
            arr.map((ele)=>{
                return  <Card />
                
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Category
