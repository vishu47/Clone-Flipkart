const express = require('express');
const router = express.Router();
const { addcategory, getCategories } = require('../controllers/category')
const { requireSignin, adminMiddleware } = require('../common-middleware/index')
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

router.post('/category/create', requireSignin, adminMiddleware, upload.single('categoryImage'), addcategory);
// router.get('/category/getcategory', getCategories);
router.get('/category/getCategories', getCategories);


module.exports = router;