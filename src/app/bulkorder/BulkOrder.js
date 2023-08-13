"use client"

import React, { useState } from "react";
import "../../style/BulkOrder.css";
import Image from "next/image";

const BulkOrder = () => {
    const [ list, setList ] = useState('')

    const oncange = (e) => {
        setList(e.target.files[0])
        // console.log(e.target.files[0])
    }

  return (
    <div className="bulk_order">
      <h3>Looking for Bulk Orders?</h3>
      <div className="bulk_order_banner">
        {/* <p>Dont worry, Get</p>
        <p>BULK ORDER</p>
        <p>within a click</p> */}
        <Image 
        src="/truckBanner1.png"
        width={1000}
        height={300}
        />
      </div>
      <div className="bulk_order_list_section">
        <div className="bulk_order_list_left">
          <h2>Upload your <span>Bulk Order</span> list and get a call back in a minute</h2>
          <p>We priorities quality in each of our grocery,Just order a product and get it delivered at your doorstep  product and get it delivered at your doorstep</p>
          <button>Upload</button>
        </div>
        <div className="bulk_order_list_right">
            <h4>Upload your grocery photo or PDF</h4>
            <p>Upload your grocery list photo and we'll call you back in a minute.</p>
            {!list ? <label htmlFor="list">
                <input type="file" id="list" onChange={(e)=>oncange(e)}/>
                <Image
                src="/upload.svg"
                width={60}
                height={60}
                />
                Upload
            </label>: <Image 
            src={URL.createObjectURL(list)}
            width={100}
            height={100}
            className="list_img"
            />}
        </div>
      </div>
    </div>
  );
};

export default BulkOrder;
