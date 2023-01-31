import React, { useState } from 'react';
import '../RealEstate.css';

export default function GeneralInfo({ nextStep, handleFormData, prevStep, values }) {

const submitFormData = (e) => {
    e.preventDefault();
      nextStep();
   
  };

  return (
    <div className='card'>
    <form method='POST' action='#'  onSubmit={submitFormData}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Owner</label>
            <select name='owner'
            value={values.owner}
            onChange={handleFormData("owner")}>
                <option value="#">Owner</option>
                <option value="Self">Self</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Mobile</label>
            <input 
                type="text" 
                name="mobile" 
                placeholder='Enter Mobile Number'
                value={values.mobile || ""} 
                onChange={handleFormData("mobile")}
            />
        </div>
        <div className='formInput'>
            <label>Posted By</label>
            <select name='postedBy'
            value={values.postedBy}
            onChange={handleFormData("postedBy")}>
                <option value="#">Posted By</option>
                <option value="Self">Self</option>
                <option value="Relatives">Relatives</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Sale Type</label>
            <select name='sale'
            value={values.sale}
            onChange={handleFormData("sale")}>
                <option value="#">Select Sale Type</option>
                <option value="Sale by negotiation">Sale by negotiation</option>
                <option value="Buyer Enquiry Over">Buyer Enquiry Over</option>
                <option value="Auctions">Auctions</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Featured Package</label>
            <select name='featuredPackage'
            value={values.featuredPackage}
            onChange={handleFormData("featuredPackage")}>
                <option value="#">Select Featured Package</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="Gold">Gold</option>
            </select>
        </div>
        <div className='formInput'>
            <label>PPD Package</label>
            <select name='ppdPackage'
            value={values.ppdPackage}
            onChange={handleFormData("ppdPackage")}>
                <option value="#">Select PPD Package</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="Gold">Gold</option>
        </select>
        </div>
        <div className='formInput' id='img-div'>
        <input 
                type="file" 
                name="file-name"
                className="file-type"
                onChange={handleFormData(
                     "imageFileName"
                )}
            />
            <div className='eclipseCamera'>
                {/* <img src={require("/images/eclipse.png")} alt="select folder"/> */}
                
                <img src='/images/camera.png' alt='camera' className='camera'/>
               
                </div>
                
            <div className='cameraText'>{values.imgName}</div>
        </div>
        <br/>


        <div className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={"/property_detail"}> */}
                <button className='cancelBtn' onClick={prevStep}>Cancel</button>
                {/* </Link> */}
        </div>
        <div className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={"/location_info"}> */}
                <button className='saveBtn' type='submit'>Save & Continue</button>
                {/* </Link> */}
        </div>

        </section>
        
    </form>
    </div>
  )
}