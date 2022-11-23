import React from 'react';
import { useState,useEffect } from 'react';
import AddProperty from './AddProperty';
import './RealEstate.css';

function PropertyListingPage() {
    //to show or not shoe property list section
    const [showPropertyList, setShowPropertyList] = useState(true);
    //to search PPDID
    const [ppdId, setPPDID] = useState("");
    const [status, setStatus] = useState("Unsold");
    //fetch data
    const [propertyList,setPropertyList] = useState({
        property:[]
    });
    const changeStatus = () => {
        if(status==="Unsold"){
            setStatus("Sold")
        }else{
            setStatus("Unsold")
        }
        
    }
    const showAddProperty = () => {
        setShowPropertyList(false)
    }
    const getPropertyDetails = async(e) =>{
        e.preventDefault();
        console.log(ppdId)
        await fetch("/property/:ppdid",{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then(result=>setPropertyList(result));

        console.log(propertyList)
    }
    const getAllListedPropeties = async()=>{
        await fetch("/property",{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then(result=>setPropertyList(result));
    };

    useEffect(()=>{
        getAllListedPropeties()
    },[]);

    return (
        <section className='property'>
            <aside className='asideLeft'>
                <div><img className='logo' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/88975523945059.5632b7d5654ae.png' /></div>
                <ul className='data'>
                    <li><b>Property</b></li>
                    <li>Assistance</li>
                    <li>Received Interest</li>
                    <li>Send Interest</li>
                    <li>Property Views</li>
                    <li>Tariff Plan</li>
                </ul>
            </aside>
            <aside className='asideRight'>
                <header className='header'>
                    <div>USER ID :</div>
                    <div>User Name</div>
                </header>
                {showPropertyList ?
                    <div>
                        <div className='operations'>
                            <div id="PPDID">
                                <form action="" method='GET' onSubmit={getPropertyDetails}>
                                    <input className='searchinput' type="text" value={ppdId} name="searchPPD" placeholder='Search PPD ID' onChange={(e) => setPPDID(e.target.value)} />
                                    <button className='searchbtn'>Search</button>
                                </form>
                            </div>
                            <button className='addPropertybtn' onClick={showAddProperty}>
                                + Add Property
                            </button>
                        </div>

                        <table className='property-table'>
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
                            {propertyList.property.length > 0 ?
                                <tr className='tableData'>
                                    <td>PPD 1125</td>
                                    <td>Image</td>
                                    <td>House</td>
                                    <td>8830226189</td>
                                    <td>1200</td>
                                    <td>02</td>
                                    <td><button onClick={changeStatus}>{status}</button></td>
                                    <td>35</td>
                                    <td>Action</td>
                                </tr>
                                : <tr> <td colspan="9"  className='noList'>No Properties Available. Please Add Properties</td></tr> }
                        </table>
                    </div>
                    : <AddProperty />
                }
            </aside>

        </section>
    )
}

export default PropertyListingPage