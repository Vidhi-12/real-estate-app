import React, { useState } from 'react';
import EditRow from '../actionProperty/EditRow';
import ReadOnlyRow from '../actionProperty/ReadOnlyRow';
import CONST from '../utils/CONST';

export default function Table( 
    {propertyList, editPpdId, editViews, editDaysLeft, editStatus, editFormData,setEditPpdId,
        setEditViews,setEditDaysLeft,setEditStatus,setEditFormData, 
        getAllListedPropeties , setPropertyList, handleEditFormSubmit
    }
    ) {

    // const [status, setStatus] = useState({
    //     state: false
    //  });
        // const [updateStatus, setUpdateStatus] = useState({
        //     ppdId: '',
        //     property: '',
        //     contact: '',
        //     area: '',
        //     views: '',
        //     status: '',
        //     daysLeft: ''
        // })

        // const [updateStatus, setUpdateStatus] = useState([])
    // const [status, setStatus] = useState(false);
    // const [isDisabled, setDisabled] = useState(false);

    const changeStatusSold = async (event, data) => {
        event.preventDefault();

        //  if(status === true){
        //     console.log("Unsold");
        // }
        // else{
        //     console.log("Sold");
        // }
        // setStatus((prevState)=>({state:!prevState.state}))

        const soldProperty = {
            ppdId: data.ppdId,
            property: data.property,
            contact: data.contact,
            area: data.area,
            views: data.views,
            status: "Sold",
            daysLeft: data.daysLeft
          };
      console.log(soldProperty);
        //   setUpdateStatus(soldProperty);
        //   console.log(updateStatus);
    //   console.log(isDisabled);
        //   const newProperty = [...updateStatus];
      
        //   const index = updateStatus.findIndex((property) => property.ppdId === data.ppdId);
      
        //   newProperty[index] = soldProperty;

        // if(status.state === true){
        //     console.log("Unsold");
        // }
        // else{
        //     console.log("Sold");
        // }
        // setStatus((prevState)=>({state:!prevState.state}))

        // setUpdateStatus(soldProperty);
        //   setPropertyList(newProperty);
        //   console.log(newProperty);
        //   setEditPpdId(null);
        //   setEditViews(null);
        //   setEditStatus(null);
        //   setEditDaysLeft(null);

          // console.log(editPpdId);

          let result = await fetch(`${CONST.API_BASE_PATH}/api/users/property/${data.ppdId}`,{
              method: 'Put',
              body: JSON.stringify(soldProperty),
              // body: JSON.stringify(propertyList),
              headers: {
                  'Content-Type': "application/json"
              }
          });
          result = await result.json();

          window.location.reload(false);
          };

        //   const handleEditFormSubmit = async(e) => {
        //     e.preventDefault();
        
        //     const editedProperty = {
        //       ppdId: editPpdId,
        //       property: editFormData.property,
        //       contact: editFormData.contact,
        //       area: editFormData.area,
        //       views: editViews,
        //       status: editStatus,
        //       daysLeft: editDaysLeft
        
        //     };
        
        //     const newProperty = [...propertyList.property];
        
        //     const index = propertyList.property.findIndex((property) => property.ppdId === editPpdId);
        
        //     newProperty[index] = editedProperty;
        //     console.log(editedProperty);
        //     // console.log(newProperty);
        //     setPropertyList({...propertyList, property: newProperty});
        //     setEditPpdId(null);
        //     setEditViews(null);
        //     setEditStatus(null);
        //     setEditDaysLeft(null);
            
        //     let result = await fetch(`http://localhost:8000/api/users/property/${editPpdId}`,{
        //         method: 'Put',
        //         body: JSON.stringify(editedProperty),
        //         // body: JSON.stringify(propertyList),
        //         headers: {
        //             'Content-Type': "application/json"
        //         }
        //     });
        //     result = await result.json();
        //   };
        
    const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        // console.log(fieldValue);
        setEditFormData(newFormData);
      };
    
    const handleEditClick = (event, data) => {
        event.preventDefault();
        setEditPpdId(data.ppdId);
        // console.log(data);
        setEditViews(data.views);
        setEditStatus(data.status)
        setEditDaysLeft(data.daysLeft);
    
        const formValues = {
            property: data.property,
            contact: data.contact,
            area: data.area
        };
    
        setEditFormData(formValues);
        // console.log("edit");
        // console.log(editFormData);
      };
    
      const handleCancelClick = () => {
        setEditPpdId(null);
        setEditViews(null);
        setEditStatus(null);
        setEditDaysLeft(null);
      };
    
    const handleDeleteClick = async(id) => {
        let result = await fetch(`${CONST.API_BASE_PATH}/api/users/property/${id}`,{
            method: 'Delete'
        });
        result = await result.json();
        if(result){
            getAllListedPropeties();
        }
    }

  return (
    <>
    <table className='property-table'>
                    <thead>
                    <tr className='tableHeader'>
                        <th>PPD ID</th>
                        <th>Image</th>
                        <th>Property</th>
                        <th>Contact</th>
                        <th>Area</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th>Days Left</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody className="tbody">
               

                        {
                        // propertyList.length > 0 ? 
                        propertyList.map((data,index)=>{
                        //    console.log(data.ppdId);
                           return(
                            <React.Fragment key={index}>

                            {editPpdId === data.ppdId ? (
                            <EditRow
                            data={data}
                                editFormData={editFormData}
                                handleEditFormChange={handleEditFormChange}
                                handleCancelClick={handleCancelClick}
                                handleEditFormSubmit={handleEditFormSubmit}
                            />
                            ) : (
                         <ReadOnlyRow
                            data={data}
                            // status= {status}
                            // changeStatus={changeStatus}
                            changeStatusSold = {changeStatusSold}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                        />
                            )
                        }
                        </React.Fragment>
                           )
                        }
                        
                                )
                                // : <h1>No Result Found</h1>
                        }
                         </tbody>
                    </table>
    </>
  )
}