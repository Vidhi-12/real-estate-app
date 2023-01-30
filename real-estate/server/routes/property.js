const express = require("express");
const bodyParser = require("body-parser");
const Property = require('../models/AddProperty');
const User = require('../models/User');
// const cloudinary = require('cloudinary').v2;
const router = express.Router();

// cloudinary.config({
//     cloud_name: 'dcip3zcp4',
//     api_key: '761659471794486',
//     api_secret: 'j_ETkpzIDJs0_Y6uCFtL8Utf2Qw',
//     secure: true
// });

router.use(bodyParser.json());

router.get('/property', async(req, res) => {
    // const { page = 1, limit = 10 } = req.query;
    try {
        // const { page = 1, limit = 3 } = req.query;
        const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
        //here we are rendering the image giveing it in ressponse
        const property = await Property.find().skip(page * limit)
        .limit(limit).populate('user');
        // .limit(limit * 1)
        // .skip((page - 1) * limit)
        // .exec()
        // .populate('user');

        const total = await Property.countDocuments();
        // console.log(total);
// totalPages: Math.ceil(count / limit),
            // currentPage: page,

            // console.log(property);
        res.json({
            status: "Success",
            total,
            page:page + 1,
			limit,
            property
            

        // const page = parseInt(req.query.page) || 1;
        // const pageSize = parseInt(req.query.limit) || 4;
        // const skip = (page - 1) * pageSize;
        // const total = await Post.countDocuments();

        // const pages = Math.ceil(total / pageSize);

        // const property = await Property.find().skip(skip).limit(pageSize).populate('user');
    
        // res.json({
        //     status: "Success",
        //     page,
        //      pages,
        //     property

        })
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.get('/property/:search', async(req, res) => {
    try {
        // console.log("I am inside get Property with PPDID")
        // console.log(req.params)
        //here we are rendering the image giveing it in ressponse
        const details = await Property.find({
            "$or" : [
                {ppdId: {$regex: req.params.search, $options: "i"}},
                // {property: {$regex: req.params.key}},
                {contact: {$regex: req.params.search}},
                // {area: {$regex: req.params.key}},
                {status: {$regex: req.params.search, $options: "i"}}
            ]
            
        });
        const information = await Property.find({
            "$or" : [
                {property: {$regex: req.params.search, $options: "i"}}
            ]
            
        });

        let property;
        if(information.length >0){
            property = information;
        }
        else if(details.length > 0){
            property = details;
        }
        if(property){
            res.json({
                status: "Success",
                property
            })
        }else {
            res.json({
                status: "Failed",
                message : "Property Not Found"
            })
        }
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

// router.get('/property/:ppdId', async(req, res) => {
//     try {
//         // console.log("I am inside get Property with PPDID")
//         // console.log(req.params)
//         //here we are rendering the image giveing it in ressponse
//         const property = await Property.findOne({ppdId: req.params.ppdId});
//         if(property){
//             res.json({
//                 status: "Success",
//                 property
//             })
//         }else {
//             res.json({
//                 status: "Failed",
//                 message : "Property Not Found"
//             })
//         }
//     } catch (e) {
//         res.status(500).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// })


router.put('/property/:ppdId', async(req, res) => {
    try{
        const property = await Property.findOneAndUpdate(
            {ppdId: req.params.ppdId},
            {
                $set: req.body
            }
            )
            if(property){
                res.json({
                    status: "Success",
                    property
                })
            }else {
                res.json({
                    status: "Failed",
                    message : "Property Not Updated"
                })
            }
    } catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})


// router.patch('/property/:ppdId', async(req, res) => {
//     try{
//         const property = await Property.findOneAndUpdate(
//             {ppdId: req.params.ppdId},
//             req.body,
//             {new: true}
//             )

//             // if (req.body.property) {
//             //     estate.property = req.body.property
//             // }
    
//             // if (req.body.contact) {
//             //     estate.contact = req.body.contact
//             // }

//             // if (req.body.area) {
//             //     estate.area = req.body.area
//             // }

//             if(property){
//                 res.json({
//                     status: "Success",
//                     property
//                 })
//             }else {
//                 res.json({
//                     status: "Failed",
//                     message : "Property Not Updated"
//                 })
//             }
//     } catch(e){
//         res.status(500).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// })


router.delete('/property/:ppdId', async(req, res) => {
    try{
        const property = await Property.findOneAndDelete({ppdId: req.params.ppdId});
        if(property){
            res.json({
                status: "Success",
                property
            })
        }else {
            res.json({
                status: "Failed",
                message : "Property Not Deleted"
            })
        }
    }
    catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router;