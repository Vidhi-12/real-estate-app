import React from "react";
import Tooltip from "./Tooltip";

// const changeStatus = (e) => {
//     // console.log(e)
//     if(e.target.innerHTML = "Unsold"){
//         e.target.innerHTML = "Sold"
//     }else{
//         e.target.innerHTML = "Unsold"   
//     }
    
//   }  

const EditRow = ({
    data,
    changeStatusSold,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit
}) => {
  return (
    <tr>
      {/* <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td> */}

        <td>{data.ppdId}</td>
        <td>
          {/* <Tooltip content="Quack!" direction="top"> */}
          <Tooltip content={
            <>
            <div className="tooltip-div">
              <img src={data.property_image.url} alt="img"/>
              <div>{data.property_description} </div>
            </div>
            
          </>
          }
           direction="top">
            <img src={data.property_image.url} alt="img"  height={30} width={40}/>
            </Tooltip>
            </td>
          <td>
            <select name="property" className="edit-select"
             value={editFormData.property}
             onChange={handleEditFormChange}>
                <option>Select Property Type</option>
                <option value="Plot">Plot</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
            </select>
        </td>
          <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an contact..."
            name="contact"
            className="edit-text"
            value={editFormData.contact}
            onChange={handleEditFormChange}
            ></input>
            </td>
          <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an area..."
            name="area"
            className="edit-text"
            value={editFormData.area}
            onChange={handleEditFormChange}
            ></input>
            </td>
          <td>{data.views}</td>
          {/* <td><button className='sold-btn' onClick={(e)=>changeStatus(e)}>Unsold</button></td> */}
          <td>
          {data.status === "Sold" ? 
            (
            <button
            className='sold-btn'
            onClick={(e)=>changeStatusSold(e, data)}
            disabled
           >
            {data.status}
           </button>
            )
            : (

            <button
             className='sold-btn'
             onClick={(e)=>changeStatusSold(e, data)}
            >
              {data.status}
            </button>
            )
          }
          </td>

          <td>{data.daysLeft}</td>
      <td>
        {/* <div className="save-div"> */}
        {/* <button type="submit"  className="edit-save-btn">Save</button> */}
        <i className="fa fa-floppy-o" aria-hidden="true" id="icon-style-save" onClick={handleEditFormSubmit}></i>
        
        {/* </div> */}
          
        {/* <button type="button"  className="edit-cancel-btn" onClick={handleCancelClick}> */}
          <i className="fa fa-times" aria-hidden="true" id="icon-style" onClick={handleCancelClick}></i>
        {/* </button> */}
      </td>
    </tr>
  );
};

export default EditRow;