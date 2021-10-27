const express = require('express');
const router = express.Router();
const {} = require('../controllers/auth')
const {signup , signin, requireSignin} = require('../controllers/auth')
const {SignupRequestValidators, SigninRequestValidators, isRequestValidated} = require('../validator/auth')


router.post('/signup', SignupRequestValidators, isRequestValidated, signup)
router.post('/signin', SigninRequestValidators, isRequestValidated, signin)
router.post('/profile', requireSignin ,(req,res)=>{
    return res.status(200).json({
        user:'profile'
    })
})

module.exports = router;