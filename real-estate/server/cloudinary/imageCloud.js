const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const dotenv = require("dotenv");

cloudinary.config({
    cloud_name:"dwyewupvx",
    api_key:779357511261459,
    api_secret:"_fpMI9CEHeDlG2DL9MLEzsdTZ-g"
    // cloud_name:process.env.CLOUD_NAME,
    // api_key:process.env.API_KEY,
    // api_secret:process.env.API_SECRET
    
})

const storage= new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'',
        allowedFormats: ['jpg', 'png', 'jpeg']
    }
    // params: {
    //     folder: 'some-folder-name',
    //     format: async (req, file) => 'png', // supports promises as well
    //     public_id: (req, file) => 'computed-filename-using-request',
    //   },
    
})

module.exports={cloudinary,storage}