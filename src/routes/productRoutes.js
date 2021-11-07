const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { productAdd } = require('../controllers/productController')
const router = express.Router();
const shortid = require('shortid');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function(req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname);
    }
})
const upload = multer({ storage })


router.post('/product/create', requireSignin, adminMiddleware, upload.array('productImg'), productAdd);
// router.post('/product/create', (req, res) => {
//     return res.status(200).json({
//         message: "lkjhgf"
//     })
// });

// router.get('products', productList);

module.exports = router;