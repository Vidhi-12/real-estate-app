import React, { useState } from 'react';
import '../RealEstate.css'
import {Link} from "react-router-dom";

export default function BasicInfo( {nextStep, handleFormData, values }) {


const submitFormData = (e) => {
    e.preventDefault();
      nextStep();
  };

  return (
    
    <div className='card'>
    <form method='POST' action='#' onSubmit={submitFormData}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Property Type</label>
            <select name="property"
             value={values.property} 
             onChange={handleFormData("property")}>
                <option>Select Property Type</option>
                <option value="Plot">Plot</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Negotable</label>
            <select name='negotable'
            value={values.negotiable}
            onChange={handleFormData("negotiable")} >
                <option value="#">Select Negotiable</option>
                <option value="1-5">1-5%</option>
                <option value="5-10">5-10%</option>
                <option value="10-50">10-50%</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Price</label>
            <input 
                type="text" 
                name="price" 
                placeholder='Example:10000'
                value={values.price}
                onChange={handleFormData("price")}
            />
        </div>
        <div className='formInput'>
            <label>Ownership</label>
            <select name='ownership'
            value={values.ownership}
            onChange={handleFormData("ownership")} >
                <option value="#">Select Ownership</option>
                <option value="Individual">Individual</option>
                <option value="Joint">Joint/Co-ownership</option>
                <option value="Nomination">By Nomination</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Age</label>
            <select name='property_age'
            value={values.property_age}
            onChange={handleFormData("property_age")}>
                <option value="#">Select Property Age</option>
                <option value="Below 5">Below 5 years</option>
                <option value="Between 10-50 ">Between 10-50 years</option>
                <option value="Above 50">Above 50 years</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Approved</label>
            <select name='approved'
            value={values.approved}
            onChange={handleFormData("approved")}>
                <option value="#">Property Approved</option>
                <option value="Intimation of Disapproval">Intimation of Disapproval</option>
                <option value="Commencement Certificate">Commencement Certificate</option>
                <option value="Occupancy Certificate">Occupancy Certificate</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Description</label>
            <input 
            type="text" 
            name="description" 
            value={values.property_description}
            onChange={handleFormData("property_description")}
            />
        </div>
        <div className='formInput'>
            <label>Bank Loan</label>
            <select name='bank loan'
            value={values.bank_loan}
            onChange={handleFormData("bank_loan")}>
                <option value="#">Bank Loan</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>
        </div>

        <div className='formInput'>
        <Link to={"/propertyListingPage"}><button className='cancelBtn'>Cancel</button></Link>
        </div>
        
        <div className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={{pathname:"/property_detail",
        data:inputs}}> */}
                <button type='submit' className='saveBtn'>Save & Continue</button>
            {/* </Link> */}
            </div>

            
        </section>
        
    </form>
    </div>
  )
}