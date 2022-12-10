const express = require("express");
const authRoutes = express.Router();
const { tokenGenerator } = require("../Bcrypt/token");
const bodyParser = require("body-parser");
const User = require("../models/User");
const authVerify = require("../Bcrypt/authVerify");
const { hashGenerate } = require("../Bcrypt/Hashing");
const { hashValidator } = require("../Bcrypt/Hashing");


authRoutes.post("/signup", async (req, res) => {
  try {
    // console.log(req.body);
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      const value = await User.find().sort({ _id: -1 }).limit(1);
      const userid = parseInt(value[0].userid.split("D")[1]) + 1;
      // console.log(value[0].userid.split("D")[1]);
      const hashPassword = await hashGenerate(req.body.password);
      const user = new User({
        username: req.body.username,
        userid: "06PPD"+userid,
        email: req.body.email,
        password: hashPassword,
      });
      const savedUser = await user.save();
      res.status(200).json(savedUser);
    } else {
      res.status(400).json("Email id already exist");
    }
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});


authRoutes.get("/", (req, res) => {
  res.send("Working");
});

// let userName = ""

authRoutes.post("/login", async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.body);
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      res.status(400).json("Invalid Email id");
    } else {
      const checkUser = await hashValidator(
        req.body.password,
        existingUser.password
      );
      if (!checkUser) {
        res.status(400).json("Password is Invalid");
      } else {
        // console.log("Login successfull");
        // res.status(200).json("Login successfully");
        const token = tokenGenerator(existingUser.email);
        // res.cookie("jwt", token)
        res.status(200)
          .json({
            status: "Completed",
            details: {
              userid: existingUser.userid,
              email: existingUser.email.split("@")[0],
            },token})
      }
    }
  } catch (e) {
    res.json({
      status: "Failed",
      message: e.message,
    });
  }
});

authRoutes.get("/logout", async (req, res) => {
  res.clearCookie("jwt");
  // console.log("Logout successfully");
  res.redirect("/");
});

// authRoutes.get("/user", async (req, res) => {
//   try {
//     console.log(req.body);
//     // console.log(req.body);
//     const existingUser = await User.findOne({email:userName});

//     if(existingUser){
//       res.json({
//           status: "Sucess",
//           existingUser
//       })
//   }else {
//       res.json({
//           status: "Failed",
//           message : "User Not Found"
//       })
//   }
//   } catch (e) {
//     res.json({
//       status: "Failed",
//       message: e.message,
//     });
//   }
// });

authRoutes.get("/protected", authVerify, (req, res) => {
  res.send("I am protected route");
});
module.exports = authRoutes;
