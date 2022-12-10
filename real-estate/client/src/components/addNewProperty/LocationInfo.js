import React, { useState } from 'react';
import '../RealEstate.css'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CommonPage from '../CommonPage';
import PropertyNav from './PropertyNav';

export default function LocationInfo({ nextStep, handleFormData, prevStep, values }) {

const navigate = useNavigate();
const submitFormData = async(e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/users/property",{
      method : 'POST',
      headers : {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        property: values.property,
        area: values.area,
        mobile: values.mobile
      })
  }).then(navigate("/propertyListingPage"))

        nextStep();
  };

  return (
    
    <div className='card'>
    <form method='POST' action='#' onSubmit={submitFormData}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Email</label>
            <input 
                type="text" 
                name="email" 
                placeholder='Email'
                // value={inputs.email || ""} 
                // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>City</label>
            <select name='city'>
                <option>Select City</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Area</label>
            <select name='area'>
                <option value="#">Select Area</option>
            </select>
        </div>
        
        <div className='formInput'>
            <label>Pincode</label>
            <select name='pincode'>
                <option value="#">Select Pincode</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Address</label>
            <input 
                type="text" 
                name="address" 
                placeholder='Address'
                // value={inputs.address || ""} 
                // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Landmark</label>
            <input 
                type="text" 
                name="landmark" 
                placeholder='Landmark'
                // value={inputs.landmark || ""} 
                // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Latitude</label>
            <input 
            type="text" 
            name="latitude" 
            placeholder='Latitude'
            // value={inputs.latitude || ""} 
            // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Longitude</label>
            <input 
                type="text" 
                name="longitude" 
                placeholder='Longitude'
                // value={inputs.longitude || ""} 
                // onChange={handleChange}
            />
        </div>

        <div  className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={"/general_info"}> */}
                <button className='cancelBtn' onClick={prevStep}>Previous</button>
            {/* </Link> */}
        </div>
        <div className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={"/hello"}> */}
                <button className='saveBtn' type='submit'>Add Property</button>
            {/* </Link> */}
        </div>

        </section>
        
    </form>
    </div>
  )
}