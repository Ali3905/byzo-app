import React from 'react'
import "../style/Footer.css"
import Link  from "next/link"
// import logo from "../Assets/logo.svg"
// import google from "../Assets/Group 427320822.svg"
// import app from "../Assets/_Group_.svg"
// import getit from "../Assets/getiton.svg"
// import play from "../Assets/googleplay.svg"
// import download from "../Assets/download.svg"
// import appstore from '../Assets/app.svg'
// import insta from "../Assets/Instagram.svg"
// import fb from "../Assets/Facebook.svg"
// import linkedin from "../Assets/Linkedin.svg"
// import watsapp from "../Assets/Whatsapp.svg"
// import twitter from "../Assets/Twitter.svg"

const Footer = () => {
  return (
    <footer className='footer'>
      <h3>Categories</h3>
      <div className='footer_top'>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        
      </div>

      <div className='footer_bottom'>
        <div className="socials">
            <img src="/logo.svg" alt="logo" id='logo'/>
            <div>
                <img src="Linkedin.svg" alt="Linkedin" />
                <img src="Instagram.svg" alt="instagram" />
                <img src="/Twitter.svg" alt="twitter" />
                <img src="Whatsapp.svg" alt="watsapp" />
                <img src="Facebook.svg" alt="facebook" />
            </div>
        </div>
        <ul>
            <li><Link href="#">Home</Link ></li>
            <li><Link href="#">Delivery Areas</Link ></li>
            <li><Link href="#">Careers</Link ></li>
            <li><Link href="#">Customer Support</Link ></li>
            <li><Link href="#">Press</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Privacy Policy</Link ></li>
            <li><Link href="#">Terms of Use</Link ></li>
            <li><Link href="#">Responsible Disclosure Policy</Link ></li>
        </ul>
        <div className="downloads">
            <h3>Download App</h3>
            <div  className='downloads_child'>
                <img src="/Group 427320822.svg" alt="google" />
                <span>
                    <img src="/getiton.svg" alt="app" id='getit'/>
                    <img src="/googleplay.svg" alt="app" />
                </span>
              
            </div>
            <div className='downloads_child'>
                <img src="/_Group_.svg" alt="app" />
                <span>
                    <img src="/download.svg" alt="app" />
                    <img src="/app.svg" alt="app" />
                </span>
            </div>
        </div>
        
      </div>

    </footer>
  )
}

export default Footer
