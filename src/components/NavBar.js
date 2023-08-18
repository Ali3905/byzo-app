"use client"; // This is a client component

import React, { useState } from 'react'
import "../style/Navbar.css"
import Dropdown from './Dropdown'
import Image from 'next/image';

const NavBar = () => {
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
    <nav className='nav'>
        
      <img src="/logo.svg" alt="Logo"  />
      <Dropdown options={options} onSelect={handleSelection} />
      <input type="text" placeholder='Search for Products' />
      <button className='btn_primary btn_login'>Log in</button>
      <button className='btn_primary btn_cart'>
        <img src="/cart-shopping.svg" alt="cart" id='cart' />
        My Cart
      </button>
      <button className='btn_grid'>
        <Image
        src="/Grid.svg" 
        height={24}
        width={24}
        alt="grid" 
        id='grid' 
        />
      </button>

    </nav>
  )
}

export default NavBar
