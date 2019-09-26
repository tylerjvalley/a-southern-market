const express = require("express");
const router = express.Router();
const multer = require('multer');


//storing item images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({
    storage: storage,
});




// Load input validation
const validateVendorInput = require('../../validation/vendor');


// Load Vendor model
const Vendor = require('../../models/Vendor');

router.post('/addVendor', upload.single('vendorImage'), (req, res) => {
    // Form validation
    const { errors, isValid } = validateVendorInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Vendor.findOne({ name: req.body.name }).then(vendor => {
        if (vendor) {
            return res.status(400).json({ vendor: "Vendor already exists" });
        } else {
            const newVendor = new Vendor({
                name: req.body.name,
                description: req.body.description,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zipCode: req.body.zipCode,
                vendorImage: req.file.path
            });

            newVendor
                .save()
                .then(vendor => res.json(vendor))
                .catch(err => console.log(err));
        }
    });
});

router.get('/all', (req, res) => { 

   Vendor.find({})
         .then(vendors => {
             return res.json(vendors)
         })
         .catch(err => {
             console.log(err)
         })

})

router.get('/:id', (req, res) => {
    let id = req.params.id;

    Vendor.findById(id, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
})

router.put('/update/:id', (req, res) => {
  
    Vendor.findById(req.params.id, (err, vendor) => {
        if (!vendor) {
            res.status(400).send('Data was not found');
        } else {
            vendor.name = req.body.name;
            vendor.description = req.body.description;
            vendor.street = req.body.street;
            vendor.city = req.body.city;
            vendor.state = req.body.state;
            vendor.zipCode = req.body.zipCode;

            vendor.save().then(vendor => {
                res.json('Vendor Updated')
            })
            .catch(err => {
                res.status(400).send('Update did not go through')
            })
        }
    })
})




module.exports = router;