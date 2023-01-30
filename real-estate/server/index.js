// import all the necessary packages
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const connect = require("./connection/connect");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const propertyListRoutes = require("./routes/property");
const addPropertyRoutes = require("./routes/addProperty");

// const fileUpload = require("express-fileupload");

// we are using port 8000
const port = process.env.PORT || 8000;

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({extended:true}));
// middleware to convert our request data into JSON format
app.use(bodyParser.json());

app.use(cookieParser());

// use fileupload
// app.use(fileUpload({
//   useTempFiles:true
// }))

app.use("/api/users", authRoutes);
app.use("/api/users", addPropertyRoutes);
app.use("/api/users",propertyListRoutes);

// start the server in the port 8000
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
