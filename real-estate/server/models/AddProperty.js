const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const addPropertySchema = new Schema({
    ppdId: {type: String, unique: true}, 
    property_image: {
      url:String,
      filename:String
   },
    property: [String], 
    contact: String,
    area: Number, 
    views: {type: Number},
    status: {type: String, default: "Unsold"},
    daysLeft: {type:Number},
    property_description: String,
    user : {type : Schema.Types.ObjectId, ref: "User"}
 })

const addPropertyModel = mongoose.model("AddProperty", addPropertySchema);
module.exports = addPropertyModel;