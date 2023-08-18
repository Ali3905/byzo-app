import Image from 'next/image'
import React from 'react'
import "../../style/Signin.css"

const Signin = () => {
  return (
    <div className='signin'>
      {/* <h3>Welcome back</h3> */}
      <div className="welcome">

      </div>
      <div className="signin_form">
        <h4>Enter your mobile number</h4>
        <div className="mobile_num">
            <Image 
            src="/india.png"
            width={30}
            height={30}
            />
            <p>+91  92883 88238</p>
        </div>
        <div className="signin_btns">
            <p>Sign in</p>
            <Image 
            src="/arrowRight.svg"
            width={50}
            height={50}
            />
        </div>
      </div>
    </div>
  )
}

export default Signin
