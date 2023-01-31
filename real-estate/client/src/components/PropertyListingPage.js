import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonPage from './CommonPage';
import Pagination from './listingProperty/Pagination';
import Table from './listingProperty/Table';
import './RealEstate.css';
import CONST from './utils/CONST';
// import FullPage, { FullScreen, useFullScreenHandle } from "react-full-screen";

function PropertyListingPage() {
    // const pageNumber =  1;

    const [propertyList,setPropertyList] = useState([]);
    // const [query, setQuery] = useState("");

    const [editPpdId, setEditPpdId] = useState(null);
    const [editViews, setEditViews] = useState(null);
    const [editDaysLeft, setEditDaysLeft] = useState(null);
    const [editStatus, setEditStatus] = useState(null);
    const [editFormData, setEditFormData] = useState({
        property: "",
        contact: "",
        area: ""
      });

      const [page, setPage] = useState(1);
    // const [status, setStatus] = useState({
    //     state: false
    //  });

//      const [page, setPage] = useState(pageNumber);
//   const [pages, setPages] = useState(1);

//   useEffect(() => {
//     const fetchPagination = async () => {
//     //   setLoading(true);
//     //   try {
//         const res = await fetch(`http://localhost:8000/api/users/property?page=${page}`);

//         const { data, pages: totalPages } = await res.json();

//         setPages(totalPages);
//         setPropertyList(data);
//         // setLoading(false);
//     //   } catch (error) {
//     //     console.log(error);
//     //     // setLoading(false);
//     //     setError("Some error occured");
//     //   }
//     };

//     fetchPagination();
//   }, [page]);

    // const changeStatusSold = () => {
        
    //     // const editedProperty = {
    //     //     ppdId: ,
    //     //     property: editFormData.property,
    //     //     contact: editFormData.contact,
    //     //     area: editFormData.area,
    //     //     views: editViews,
    //     //     status: editStatus,
    //     //     daysLeft: editDaysLeft
      
    //     //   };
    //     //   console.log(editedProperty);
    //     //   const newProperty = [...propertyList];
      
    //     //   const index = propertyList.findIndex((property) => property.ppdId === editPpdId);
      
    //     //   newProperty[index] = editedProperty;
    //     //   // console.log(editedProperty);
          
    //     //   setPropertyList(newProperty);

    //     if(status.state === true){
    //         console.log("Unsold");
    //     }
    //     else{
    //         console.log("Sold");
    //     }
    //     setStatus((prevState)=>({state:!prevState.state})
    //       )};

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://localhost:5000?q=${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);



const getAllListedPropeties = async()=>{
    
    // console.log(page);
    let result = await fetch(`${CONST.API_BASE_PATH}/api/users/property?page=${page}`);
    result = await result.json();
    // setPropertyList(result);
    setPropertyList(result);
    // console.log(result);
    // console.log("1");
};

// console.log(propertyList)

useEffect(()=>{
    getAllListedPropeties()
}, [page]);


const handleEditFormSubmit = async(e) => {
    e.preventDefault();

    const editedProperty = {
      ppdId: editPpdId,
      property: editFormData.property,
      contact: editFormData.contact,
      area: editFormData.area,
      views: editViews,
      status: editStatus,
      daysLeft: editDaysLeft

    };

    const newProperty = [...propertyList.property];

    const index = propertyList.property.findIndex((property) => property.ppdId === editPpdId);

    newProperty[index] = editedProperty;
    // console.log(editedProperty);
    // console.log(newProperty);
    setPropertyList({...propertyList, property: newProperty});
    setEditPpdId(null);
    setEditViews(null);
    setEditStatus(null);
    setEditDaysLeft(null);
    
    let result = await fetch(`${CONST.API_BASE_PATH}/api/users/property/${editPpdId}`,{
        method: 'Put',
        body: JSON.stringify(editedProperty),
        // body: JSON.stringify(propertyList),
        headers: {
            'Content-Type': "application/json"
        }
    });
    result = await result.json();
  };

// const handleEditFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...editFormData };
//     newFormData[fieldName] = fieldValue;
//     // console.log(fieldValue);
//     setEditFormData(newFormData);
//   };

// const handleEditClick = (event, data) => {
//     event.preventDefault();
//     setEditPpdId(data.ppdId);
//     // console.log(data);
//     setEditViews(data.views);
//     setEditStatus(data.status)
//     setEditDaysLeft(data.daysLeft);

//     const formValues = {
//         property: data.property,
//         contact: data.contact,
//         area: data.area
//     };

//     setEditFormData(formValues);
//   };

//   const handleCancelClick = () => {
//     setEditPpdId(null);
//     setEditViews(null);
//     setEditStatus(null);
//     setEditDaysLeft(null);
//   };

// const handleDeleteClick = async(id) => {
//     let result = await fetch(`http://localhost:8000/api/users/property/${id}`,{
//         method: 'Delete'
//     });
//     result = await result.json();
//     if(result){
//         getAllListedPropeties();
//     }
// }

const searchHandle = async (event) => {
    let search = event.target.value;
    // console.log(search);
    if(search){
        let result = await fetch(`${CONST.API_BASE_PATH}/api/users/property/${search}`);
        result = await result.json();
        // console.log(result.information);
        if(result){
            setPropertyList(result);
            // console.log(propertyList);
        }
    }
    else{
        getAllListedPropeties();
        // console.log("all");
    }
}


    return (
        <>
          <div className='property-main'>
            <CommonPage>
              {/* <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
            {<Table data={search(Users)} />} */}
          

            <div className='operations'>
                    <div id="PPDID">
                        {/* <form action="" method='GET' onSubmit={getPropertyDetails}> */}

                            <input 
                            className='searchinput' 
                            type="text" 
                            // value={PPDID} 
                            name="searchPPD" 
                            placeholder='Search...' 
                            // onChange={(e) => setPPDID(e.target.value)} 
                            // onChange={(e) => setQuery(e.target.value.toLowerCase())}
                            onChange={searchHandle}
                            />

                            <button className='searchbtn'>
                                <img src='/images/search.png'  alt='search'/>
                            </button>
                        {/* </form> */}
                    </div>
                    <button className='addPropertybtn'>
                     <Link to={"/form"} 
                     style={{textDecoration: 'none',fontFamily: 'Source Sans Pro',fontStyle: 'normal',
                            fontWeight: '600',fontSize: '20px',lineHeight: '25px',color: '#FFFFFF'}}>
                                + Add Property</Link> 
                    </button>
                </div>


                {/* <Pagination page={page} pages={pages} changePage={setPage} /> */}
                {/* <form onSubmit={handleEditFormSubmit}> */}
                <form>
                <Table 
                propertyList={propertyList.property ? propertyList.property : []}
                // propertyList={propertyList}
                editPpdId = {editPpdId}
                editViews={editViews}
                editDaysLeft={editDaysLeft}
                editStatus={editStatus}
                editFormData={editFormData}
                setEditPpdId= {setEditPpdId}
                setEditViews={setEditViews}
                setEditDaysLeft={setEditDaysLeft}
                setEditStatus={setEditStatus}
                setEditFormData={setEditFormData}
                getAllListedPropeties={getAllListedPropeties}
                setPropertyList = {setPropertyList}
                handleEditFormSubmit= {handleEditFormSubmit}
                 />
                {/* <table className='property-table'>
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
                        propertyList.length > 0 ? propertyList.map((data,index)=>{
                           
                           return(
                            <React.Fragment key={index}>

                            {editPpdId === data.ppdId ? (
                            <EditRow
                            data={data}
                                editFormData={editFormData}
                                handleEditFormChange={handleEditFormChange}
                                handleCancelClick={handleCancelClick}
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
                        
                                ): <h1>No Result Found</h1>
                        }
                         </tbody>
                    </table> */}
                </form>
                {/* <Pagination page={page} pages={pages} changePage={setPage} /> */}

                <div className='pagination-div'>
                    <Pagination
							page={page}
                            limit={propertyList.limit}
							total={propertyList.total}
							// limit={propertyList.limit ? propertyList.limit : 0}
							// total={propertyList.total ? propertyList.total : 0}
							setPage={(page) => setPage(page)}
					/>
                </div>
                
            </CommonPage>
          </div>
        </>
        );    
}

export default PropertyListingPage