const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const addPropertySchema = new Schema({
    ppdId: String, 
    image: String,
    property: [String], 
    contact: String,
    area: Number, 
    views: {type: Number},
    status: {type: String, default: "Unsold"},
    daysLeft: {type:Number},
    user : {type : Schema.Types.ObjectId, ref: "User"}
 })

const addPropertyModel = mongoose.model("AddProperty", addPropertySchema);
module.exports = addPropertyModel;