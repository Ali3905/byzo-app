import React from "react";
import "../../style/Auth.css"
import Image from "next/image";

const Auth = () => {
  return <div className="auth">
    <h5>Location Information</h5>
    <Image className="cross" src="/cross.png" width={20} height={20}/>
    <div className="auth_container">
        <div className="map"></div>
        <form className="form">
            <h6>Enter location information manually</h6>
            <div className="area_selection_notice">
                <h6>User Selected Area</h6>
                <span>
                    <Image 
                    src="/location-crosshairs.svg"
                    width={20}
                    height={20}
                    />
                    <p>User Selected Area User Selected Area User Area User Selected Area</p>
                </span>
            </div>
            <label htmlFor="house">
                House no. or floor
                <input type="text" placeholder="Enter Details" />
            </label>
            <label htmlFor="address">
                Address
                <input type="text" placeholder="Enter Details" />
            </label>
            <label htmlFor="landmark">
                Select Nearby Landmark
                <input type="text" placeholder="Enter Details" />
            </label>
            <div className="address_label">
                <p>Add Address Label</p>
                <div className="labels_container">
                <span>Home</span>
                <span>Work</span>
                <span>Other</span>

                </div>
            </div>
            <button>Save & Continue</button>
        </form>
    </div>
  </div>;
};

export default Auth;
