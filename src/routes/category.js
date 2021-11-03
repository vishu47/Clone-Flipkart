const express = require('express');
const router = express.Router();
const { addcategory, getCategories } = require('../controllers/category')
const { requireSignin, adminMiddleware } = require('../common-middleware/index')

router.post('/category/create', requireSignin, adminMiddleware, addcategory);
// router.get('/category/getcategory', getCategories);
router.get('/category/getCategories', getCategories);


module.exports = router;