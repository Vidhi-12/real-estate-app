import React from "react";
import Tooltip from "./Tooltip";

const ReadOnlyRow = ({ data, changeStatusSold, handleDeleteClick, handleEditClick }) => {
// const ReadOnlyRow = ({ data,status, changeStatus, handleEditClick, handleDeleteClick }) => {
  // console.log(data.ppdId);

  // const changeStatusSold = (e) => {
  //   console.log(data.status);
  //   // changeStatus()
  //   if(status === "Unsold"){
  //       // e.target.innerHTML = "Sold"
  //       changeStatus("Sold");
  //   }else{
  //       // e.target.innerHTML = "Unsold" 
  //       changeStatus("Unsold");  
  //   }
    
  // }
  return (
    // <tbody key={index} className="tbody">
   
      <tr className='tableData'>
          <td>{data.ppdId}</td>
          {/* <td><img src='/images/image.png'  alt='image'/></td> */}
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
          <td>{data.property}</td>
          <td>{data.contact}</td>
          <td>{data.area}</td>
          <td>{data.views}</td>
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
            {/* <button
             className='sold-btn'
             onClick={(e)=>{changeStatusSold(e, data); setDisabled(e, true);}}
             disabled={data.status === "Sold" ? isDisabled : }
            > */}
            
            </td>
          {/* <td><button className='sold-btn'>{data.status}</button></td> */}

          <td>{data.daysLeft}</td>
          <td>
          {/* <img src='/images/action.png'  alt='action' onClick={() => handleDeleteClick(data.ppdId)}/> */}
            <img src='/images/edit.png'  alt='edit' onClick={(event) => handleEditClick(event, data)}/>
            <i className="fa fa-trash" aria-hidden="true" id="icon-style" onClick={() => handleDeleteClick(data.ppdId)}></i>
          
            {/* <img src='/images/action.png'  alt='action'  onClick={() => handleDeleteClick(data.ppdId)}/>
            <img src='/images/edit.png'  alt='edit' onClick={(event) => handleEditClick(event, data)}/> */}
          </td>
                        
      {/* <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, data)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(data.id)}>
          Delete
        </button>
      </td> */}
    </tr>
   
  );
};

export default ReadOnlyRow;