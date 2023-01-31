import React from 'react';
import './RealEstate.css';
import { TbEye,TbBell, TbArrowBarUp, TbArrowBarToDown,TbTag,TbUser } from "react-icons/tb";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from 'react';
import Logout from './Logout';
import CONST from './utils/CONST';

function CommonPage({children}) {

    const [showpages, setShowPages] = useState(false)

    const navigate = useNavigate();

    const [user,setUser] = useState({
    name:localStorage.getItem("name"),
    userid:localStorage.getItem("userid")
    })

    const handleLogout = () => {
        axios
      .get(`${CONST.API_BASE_PATH}/api/users/logout`)
      .then((res) => {
        console.log(localStorage.getItem("token"));
        localStorage.clear();
        navigate("/");
        console.log(localStorage.getItem("token"));
      })
      .catch((err) => {
        console.log(err);
      });
  
  };

    return (
        <section className='property'>
           
            <aside className='asideLeft'>
                <div><img className='logo' src='/images/logo.png' alt='Logo' /></div>
                
                <tbody className='data'>
                    <tr>
                    <td>
                        <img className='icons' src='/images/property.png' alt='property'/></td>
                    <td className='open'><p>Property</p></td> 
                    </tr>
                    <tr>
                    <td>
                        <img src='/images/assistance.png'  alt='assistance' className="icons"/></td>
                    <td>Assistance</td> 
                    </tr>
                    <tr>
                    <td>
                        <img src='/images/received_interest.png'  alt='received_interest' className="icons"/></td>
                    <td>Received Interest</td>
                    </tr>
                    <tr>
                    <td>
                        <img src='/images/sent_interest.png'  alt='sent_interest' className="icons"/>
                        {/* <img className='icons' src='/images/sentinterest.png' alt='sentinterest'/> */}
                        </td>
                    <td> Send Interest</td>
                    </tr>
                    <tr>
                    <td>
                        <img src='/images/property_view.png'  alt='property_view' className="icons"/></td>
                    <td> Property Views</td>
                    </tr>
                    <tr>
                    <td><img src='/images/tariff_plan.png'  alt='tariff_plan' className="icons"/></td>
                    <td>Tariff Plan</td>
                    </tr>
                </tbody>
                
                {/* <ul className='data'>
                    <li>
                        <img src='/images/property.png'  alt='property'/>
                        <b>Property</b></li>
                    <li>
                    <img src='/images/assistance.png'  alt='assistance'/>
                        Assistance</li>
                    <li>
                    <img src='/images/received_interest.png'  alt='received_interest'/>
                        Received Interest</li>
                    <li>
                    <img src='/images/sent_interest.png'  alt='sent_interest'/>
                        Send Interest</li>
                    <li>
                    <img src='/images/property_view.png'  alt='property_view'/>
                        Property Views</li>
                    <li>
                    <img src='/images/tariff_plan.png'  alt='tariff_plan'/>
                        Tariff Plan</li>
                </ul> */}
            </aside> 
            <div className='head'></div>
             <aside className='asideRight'>
                <header className='header'>

                <div>USER ID : {user.userid}</div>
                    {/* <div onClick={console.log("Logout")}>Logout</div> */}
                    <div>
                    <TbUser className="iconsUsers" />
                    
                        USER NAME : {user.name}
                        <AiFillCaretDown
                            className="drop_down"
                            onClick={() => {
                                setShowPages(!showpages);
                            }}
                        />
                        {showpages ? 
                        <Logout /> 
                        : null}
                    </div>

                    {/* <div className='header-id'>USER ID :</div>
                    <div className='header-username'>
                    <img src='/images/username.png'  alt='username'/>
                        <span>User Name</span></div> */}
                </header>
                <div className='commonPage'>
                    {children}
                </div>
            </aside>

        </section>
    )
}

export default CommonPage