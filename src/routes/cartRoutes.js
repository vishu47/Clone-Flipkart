const express = require('express');
const router = express.Router();
const { productAddCart } = require('../controllers/cartController')
const { requireSignin, userMiddleware } = require('../common-middleware');


router.post('/user/cart/addtocart', requireSignin, userMiddleware, productAddCart)

module.exports = router;