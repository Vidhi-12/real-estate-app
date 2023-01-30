let express = require('express');
let multer = require('multer');
let mongoose = require('mongoose');
const { storage } = require("../cloudinary/imageCloud");

let router = express.Router();

let AddProperty = require('../models/AddProperty');

// var upload = multer({
//     storage
// })
// console.log(upload.storage);

// const DIR = './images';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
        
//         cb(null, Date.now() + file.originalname);
//     }
// });

// const upload = multer({
// storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//       if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(new Error("File type is not supported"), false);
//       return;
//     }
//     cb(null, true);
//   },
// })

const upload = multer({
    storage:storage
})

router.post("/property", upload.single("property_image"), async (req, res) => {
    // router.post("/property", async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);
    // console.log(req.file.path  +" : " + req.file.filename);
    try {

        // const { path, filename } = req.file;

        // const ppd_id = "PPD" + Math.floor((Math.random() * 9999) + 999);
        // const previous_ppdId = await AddProperty.find().sort({ppdId: -1}).limit(1);
        const previous_ppdId = await AddProperty.find().sort({_id: -1}).limit(1);

        // console.log(!previous_ppdId.length);
        let ppd_id;
        if(!previous_ppdId.length){
            ppd_id = "PPD1";
        }
        else{
            const ppd_id_increament = parseInt(previous_ppdId[0].ppdId.slice(3)) + 1;
            ppd_id = "PPD" + ppd_id_increament;
        }
        
        console.log(ppd_id);
        const views = parseInt(Math.random() * 30);
        const daysLeft = parseInt(Math.random() * 50);
        console.log(req.file);
        // console.log(req.file.path  +" : " + req.file.filename);

        
        // if(req.body.mobile == undefined || req.body.property == undefined){
        //         res.status(400).json({
        //             status: "failed",
        //             message: "Area, Contact number or Property type is missing or empty"
        //         })
        //     }
        //     else{
        //         let area;
        //         if(req.body.area == undefined){
        //             area = req.body.length * req.body.breadth;
        //             // console.log("lb");
        //         }else{
        //             area = req.body.area;
        //             // console.log("a");
        //         }
       
        const add_property = await AddProperty.create({
            ppdId: ppd_id, 
            property_image: { url: '',
                filename: '' },
            // image:'',
            property: req.body.property, 
            contact: req.body.mobile,
            area: req.body.area, 
            views: views,
            daysLeft: daysLeft
        });

        res.status(200).json({
            status: "Success",
            add_property
        })
            // }
        

    }
     catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

module.exports = router;