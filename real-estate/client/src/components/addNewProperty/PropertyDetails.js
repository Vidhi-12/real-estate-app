import React, { useState } from 'react';
import '../RealEstate.css';

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
                value={values.area || ""} 
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
            <select name='bhk'
            value={values.bhk}
            onChange={handleFormData("bhk")}>
                <option value="#">Select No of BHK</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <div className='formInput'>
            <label>No of Floor</label>
            <select name='floor'
            value={values.floor}
            onChange={handleFormData("floor")}>
                <option value="#">Select No of Floor</option>
                <option value="Below 3">Below 3</option>
                <option value="Between 3-8">Between 3-8</option>
                <option value="Above 8">Above 8</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Attached</label>
            <select name='attached'
            value={values.attached}
            onChange={handleFormData("attached")}>
                <option value="#">Select Attached</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Western Toilet</label>
            <select name='westernToilet'
            value={values.western_toilet}
            onChange={handleFormData("western_toilet")}>
                <option value="#">Select Western Toilet</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>
        </div>
        <div className='formInput'>
            <label>Furnished</label>
            <select name='furnished'
            value={values.furnished}
            onChange={handleFormData("furnished")}>
                <option value="#">Select Furnished</option>
                <option value="Semi-furnished">Semi-furnished</option>
                <option value="Furnished">Furnished</option>
                <option value="Fully-furnished">Fully-furnished</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Car Parking</label>
            <select name='carParking'
            value={values.car_parking}
            onChange={handleFormData("car_parking")}>
                <option value="#">Select Car Parking</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Lift</label>
            <select name='lift'
            value={values.lift}
            onChange={handleFormData("lift")}>
                <option value="#">Select Lift</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Electricity</label>
            <input 
                type="text" 
                name="electricity" 
                placeholder='Example:3 phase'
                value={values.electricity}
                onChange={handleFormData("electricity")}
            />
        </div>
        <div className='formInput'>
            <label>Facing</label>
            <select name='facing'
            value={values.facing}
            onChange={handleFormData("facing")}>
                <option value="#">Select Facing</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North">North</option>
                <option value="South">South</option>
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