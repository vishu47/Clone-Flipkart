const express = require('express');
const { check } = require('express-validator')
const router = express.Router();
const { signup, signin, signout } = require('../../controllers/admin/auth')
const { SignupRequestValidators, SigninRequestValidators, isRequestValidated } = require('../../validator/auth')
const { requireSignin } = require('../../common-middleware/index')


router.post('/admin/signup', SignupRequestValidators, isRequestValidated, signup)
router.post('/admin/signin', SigninRequestValidators, isRequestValidated, signin)
router.post('/admin/signout', signout)
    // router.post('/admin/profile', requireSignin ,(req,res)=>{
    //     return res.status(200).json({
    //         user:'profile'
    //     })
    // })

module.exports = router;