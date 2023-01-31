import React, { useState } from 'react';
import '../RealEstate.css'
import { useNavigate } from "react-router-dom";
import CONST from '../utils/CONST';
import axios from 'axios';

export default function LocationInfo({ nextStep, handleFormData, prevStep, values, setValues }) {

const navigate = useNavigate();
const submitFormData = async(e) => {
    e.preventDefault();
    // console.log(values);

    const formData = new FormData()
    for (let key in values) {
        formData.append(key, values[key])
    }
    // console.log(formData);
    axios
    //   .post("http://localhost:8000/api/users/property", formData, {
      .post(`${CONST.API_BASE_PATH}/api/users/property`, formData, {
                // property: values.property,
                // area: values.area,
                // mobile: values.mobile,
                // property_image: values.property_image,
                // imgName: values.imgName
                // data: formData
      })
      .then((data) => (data))
      .then((res) => navigate("/propertyListingPage"))
    //   .catch((err) => alert("Email already exist"));
//     await fetch(`${CONST.API_BASE_PATH}/api/users/property`,{
//       method : 'POST',
//       headers : {
//         //   'Accept': 'application/json',
//         //   'Access-Control-Allow-Origin': 'http://localhost:3000',
//           "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
//           'Access-Control-Allow-Credentials': 'true'
//       },
//     //   body : JSON.stringify(values)
//       body : JSON.stringify({
//         property: values.property,
//         area: values.area,
//         mobile: values.mobile,
//         image: values.image,
//         imgName: values.imgName
//       })
//   }).then(navigate("/propertyListingPage"))
  
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
                value={values.email || ""} 
                onChange={handleFormData("email")}
            />
        </div>
        <div className='formInput'>
            <label>State</label>
            <select name='state'
            value={values.state}
            onChange={handleFormData("state")}>
                <option>Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Karnataka">Karnataka</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Country</label>
            <select name='country'
            value={values.country}
            onChange={handleFormData("country")}>
                <option value="#">Select Country</option>
                <option value="India">India</option>
            </select>
        </div>
        
        <div className='formInput'>
            <label>Pincode</label>
            <select name='pincode'
            value={values.pincode}
            onChange={handleFormData("pincode")}>
                <option value="#">Select Pincode</option>
                <option value="110010">110010</option>
                <option value="110098">110098</option>
                <option value="110066">110066</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Address</label>
            <input 
                type="text" 
                name="address" 
                placeholder='Address'
                value={values.address || ""} 
                onChange={handleFormData("address")}
            />
        </div>
        <div className='formInput'>
            <label>Landmark</label>
            <input 
                type="text" 
                name="landmark" 
                placeholder='Landmark'
                value={values.landmark || ""} 
                onChange={handleFormData("landmark")}
            />
        </div>
        <div className='formInput'>
            <label>Latitude</label>
            <input 
            type="text" 
            name="latitude" 
            placeholder='Latitude'
            value={values.latitude || ""} 
            onChange={handleFormData("latitude")}
            />
        </div>
        <div className='formInput'>
            <label>Longitude</label>
            <input 
                type="text" 
                name="longitude" 
                placeholder='Longitude'
                value={values.longitude || ""} 
                onChange={handleFormData("longitude")}
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