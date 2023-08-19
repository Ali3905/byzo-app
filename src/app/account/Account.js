"use client"

import React, { useEffect, useState } from 'react'
import "../../style/Account.css"
import Image from 'next/image'


const Account = () => {
  
  const [showDetails, setShowDetails] = useState(false)

  useEffect(()=>{
    window.addEventListener('resize', ()=> {
      if(window.innerWidth < 769){
        setShowDetails(true)
        console.log("I am small");
      }else{
        console.log("I am Large");
        setShowDetails(false)
      }
      })

    if (window.innerWidth<769) {
      console.log("main choti bachi hun");
      
      setShowDetails(true)
    }
  },[])
  return (
    <>
    <div className='account'>

      <ul className="side_bar">
            <li>Manage account</li>
            <li>Orders</li>
            <li>Payment methods</li>
            <li>Address book</li>
      </ul>

      <div className="account_details">
        <div className="heading_logout">
            <h6>
              {showDetails && <Image 
                src='/rightArrowWithoutTail.svg'
                width={20}
                height={20}
                />}
              Personal Info
            </h6>
            <button>Logout</button>
        </div>
        <div className="details_item">
            <p>First Name</p>
            <p>Lara</p>
        </div>
        <div className="details_item">
            <p>Last Name</p>
            <p>Lorensson</p>
        </div>
        <div className="details_item">
            <p>Phone Number</p>
            <span>
                <Image 
                src='/india.png'
                width={20}
                height={20}
                />
                <p>+91 92883 88238</p>
            </span>
        </div>
        <div className="details_btn_group">
            <button>Cancel</button>
            <button>Save</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Account
