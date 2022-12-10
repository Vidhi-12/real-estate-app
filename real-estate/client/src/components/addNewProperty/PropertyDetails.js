import React, { useState } from 'react';
import '../RealEstate.css';
import {Link} from "react-router-dom";
import CommonPage from '../CommonPage';
import PropertyNav from './PropertyNav';

export default function PropertyDetail({ nextStep, handleFormData, prevStep, values }) {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//   }

const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    // if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
    //   setError(true);
    // } else {
      nextStep();
    // }
  };

  return (
    
    <div className='card'>
    <form method='POST' action='#' onSubmit={submitFormData}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Length</label>
            <input 
                type="text" 
                name="length" 
                placeholder='Example:10000'
                value={values.length || ""} 
                onChange={handleFormData("length")}
            />
        </div>
        <div className='formInput'>
            <label>Breadth</label>
            <input 
                type="text" 
                name="breadth" 
                placeholder='Example:10000'
                value={values.breadth || ""} 
                onChange={handleFormData("breadth")}
            />
        </div>
        <div className='formInput'>
            <label>Total Area</label>
            <input 
                type="text" 
                name="area" 
                placeholder='Example:10000'
                value={values.length * values.breadth || values.area || ""} 
                onChange={handleFormData("area")}
            />
        </div>
        <div className='formInput'>
            <label>Area Unit</label>
            <input 
                type="text" 
                name="areaunit" 
                placeholder='Example:10000'
                value={values.length * values.breadth || values.area || ""} 
                onChange={handleFormData("t_area")}
            />
        </div>
        <div className='formInput'>
            <label>No of BHK</label>
            <select name='bhk'>
                <option value="#">Select No of BHK</option>
            </select>
        </div>
        <div className='formInput'>
            <label>No of Floor</label>
            <select name='floor'>
                <option value="#">Select No of Floor</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Attached</label>
            <select name='attached'>
                <option value="#">Select Attached</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Western Toilet</label>
            <select name='westernToilet'>
                <option value="#">Select Western Toilet</option>
        </select>
        </div>
        <div className='formInput'>
            <label>Furnished</label>
            <select name='furnished'>
                <option value="#">Select Furnished</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Car Parking</label>
            <select name='carParking'>
                <option value="#">Select Car Parking</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Lift</label>
            <select name='lift'>
                <option value="#">Select Lift</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Electricity</label>
            <input 
                type="text" 
                name="electricity" 
                placeholder='Example:3 phase'
                // value={inputs.electricity || ""} 
                // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Facing</label>
            <select name='facing'>
                <option value="#">Select Facing</option>
            </select>
        </div>
        <br/>


        <div className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={"/basic_info"}> */}
                <button className='cancelBtn' onClick={prevStep}>Cancel</button>
                {/* </Link> */}
        </div>
        <div className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={"/general_info"}> */}
                <button className='saveBtn'>Save & Continue</button>
                {/* </Link> */}
        </div>

        </section>
        
    </form>
    </div>
  )
}