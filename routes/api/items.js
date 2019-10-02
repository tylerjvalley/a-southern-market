const express = require("express");
const router = express.Router();
const multer = require('multer');


//storing item images
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({
    storage: storage, 
});

// Load input validation
const validateItemInput = require("../../validation/item"); 

// Load User model
const Item = require('../../models/Item');

router.post('/addItem', upload.single('itemImage'), (req, res) => {
    // Form validation
    const { errors, isValid } = validateItemInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Item.findOne({ name: req.body.name }).then(item => { 
        if (item) {
            return res.status(400).json({ item: "Item already exists" });
        } else {
            const newItem = new Item({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                vendor: req.body.vendor,
                category: req.body.category,
                itemImage: req.file.path,
                newArrival: req.body.newArrival,
                featured: req.body.featured
            });
            
            newItem
                .save()
                .then(item => res.json(item))
                .catch(err => console.log(err));
        }
    });
});

router.get('/all', (req, res) => {

    Item.find({})
        .then(items => {
            return res.json(items)
        })
        .catch(err => {
            console.log(err)
        })

})

router.put('/update/:id', (req, res) => {

    Item.findById(req.params.id, (err, item) => {
        if (!item) {
            res.status(400).send('Data was not found');
        } else {
            item.name = req.body.name;
            item.description = req.body.description;
            item.price = req.body.price;
            item.vendor = req.body.vendor;
            item.category = req.body.category;
            item.newArrival = req.body.newArrival;
            item.featured = req.body.featured;
            item.save().then(item => {
                res.json('Item Updated')
            })
            .catch(err => {
                console.log(err)
                res.status(400).send('Update did not go through')
            })
        }
    })
})

router.get('/:id', (req, res) => {
    let id = req.params.id;

    Item.findById(id, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
});

//Delete item

router.delete('/delete/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(item => {
            console.log('Deleted successfully');
        })
        .catch(err => {
            console.log('Something went wrong')
        })
})




module.exports = router;