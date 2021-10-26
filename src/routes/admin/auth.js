const express = require('express');
const router = express.Router();
const {signup , signin, requireSignin} = require('../../controllers/admin/auth')


router.post('/admin/signup',signup)
router.post('/admin/signin',signin)
router.post('/admin/profile', requireSignin ,(req,res)=>{
    return res.status(200).json({
        user:'profile'
    })
})

module.exports = router;