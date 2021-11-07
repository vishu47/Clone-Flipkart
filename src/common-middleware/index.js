const jwt = require('jsonwebtoken');

// middleware 
// auth check middleware
exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        var user = jwt.verify(token, process.env.JWT_AUTH);
        req.user = user;
    } else {
        return res.status(500).json({ message: "Authorization required!" })
    }
    next();
};

exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(500).json({ message: "Access denied!" })
    }
    next();
};
exports.adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(500).json({ message: "Access denied!" })
    }
    next();
};