let express = require('express');
// let multer = require('multer');
let mongoose = require('mongoose');
let router = express.Router();

let AddProperty = require('../models/AddProperty');

router.post("/property", async (req, res) => {
    try {
        const ppd_id = "PPD" + Math.floor((Math.random() * 9999) + 999);
        const views = parseInt(Math.random() * 30);
        const daysLeft = parseInt(Math.random() * 50);
        // console.log(req.body);
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
            image: '',
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
            }
        

    // }
     catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

module.exports = router;