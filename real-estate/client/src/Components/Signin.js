// import React from "react";
import "./Signin.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Signin() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  function onsubmits(e) {
    e.preventDefault();
    let email = details.email;
    let password = details.password;
    axios
      .post("http://localhost:8000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => alert(res))
      .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={(e) => onsubmits(e)}>
      <div className="container">
        <div className="login">
          <img
            id="logo"
            className="login-items"
            alt="logo"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/88975523945059.5632b7d5654ae.png"
          />
          <span id="credential-signin" className="login-items">
            Enter your credentials to access your account
          </span>
          <input
            type="text"
            required
            id="userid"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            className="login-items"
            placeholder="         Email id"
          />
          <input
            required
            type="password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            className="login-items"
            placeholder="         Password"
          />
          <button id="signin" className="login-items">
            Sign In
          </button>
          <Link to="/signup" id="link">
            <span id="signup" className="login-items">
              Sign Up
            </span>
          </Link>
        </div>
        <p className="extra-info">
          Don’t have an account? <span id="extra-span">Sign up</span>
        </p>
      </div>
    </form>
  );
}

export default Signin;
