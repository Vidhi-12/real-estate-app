
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;
const local_URI = process.env.DB_URL;
// DB connection
mongoose
  .connect( uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
  console.log("CONNECTED TO DATABASE");
})