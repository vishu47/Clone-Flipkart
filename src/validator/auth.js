const { check, validationResult } = require('express-validator')


exports.SignupRequestValidators = [
    check('firstname').notEmpty().withMessage('First name is required'),
    check('lastname').notEmpty().withMessage('Last name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be 5 character')
];

exports.SigninRequestValidators = [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be 5 character')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ 'errors': errors.array()[0].msg })
    }
    next();
}