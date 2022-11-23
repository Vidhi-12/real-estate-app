const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
var cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, () => {
  console.log("Mongoose connected");
});
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", authRoutes);

app.listen(8000, () => console.log("Connected"));
