// import React from "react";
import './RealEstate.css';
import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [details, setDetails] = useState({
    userid: "",
    password: "",
  });

  const navigate = useNavigate();
  async function onsubmits(e) {
    e.preventDefault(e);
    const { userid, password } = details;

  //   await fetch("http://localhost:8000/api/users/login",{
  //     method : 'POST',
  //     headers : {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //     },
  //     body : JSON.stringify({
  //       email, password
  //     })
  // }).then(navigate("/propertyListingPage"));

    axios
      .post("http://localhost:8000/api/users/login", {
        email: userid,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userid", res.data.details.userid);
        localStorage.setItem("name", res.data.details.email);
        navigate("/propertyListingPage");
      })
      .catch((err) => alert("Enter valid crendentials"));
    // console.log(details);
    // PropertyListingPage();
  }


  return (
    <div className='container-main'>
    <form onSubmit={(e) => onsubmits(e)}>
    <div className="container">
      <div className="login">
        <img
          id="logo"
          className="login-items"
          alt="logo"
          src="/images/logo.png"
        />
        <div id="credential-signin" className="login-items">
          Enter your credentials to access your account
        </div>
        <input
          type="text"
          id="userid"
          value={details.userid}
          onChange={(e) => setDetails({ ...details, userid: e.target.value })}
          className="login-items"
          placeholder="User ID"
        />
        <input
          type="password"
          id="pass"
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          className="login-items"
          placeholder="Password"
        />

        <span className="p-viewer">
            <img src='/images/eye.png' alt='eye'/>
        </span>

        <button id="signin" className="login-items" onClick={(e)=>{onsubmits(e)}}>
          Sign In
        </button>
        <Link to="/signup" id="link" style={{textDecoration: 'none', marginTop: '50px'}}>
          <span id="signup" className="login-items">
            Sign Up
          </span>
        </Link>
      </div>

      <p className="extra-info">
        Don’t have an account?
        <Link to="/signup" id="link" style={{textDecoration: 'none'}}>
          <span id="extra-span">Sign up</span>
          </Link>
          </p>
    </div>
    </form>
    </div>
  );
}

export default Signin;
