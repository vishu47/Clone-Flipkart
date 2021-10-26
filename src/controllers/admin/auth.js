const User = require('../../models/auth');
const jwt = require('jsonwebtoken');


exports.signup = (req, res) => {
   
    User.findOne({email : req.body.email })
    .exec((error,user)=>{
        if(user) return res.status(200).json({
            message:'admin already exist!'
        })

        const {firstname,lastname,email,password,username} = req.body;
        const _user = new User({
            firstname,
            lastname,
            email,
            password,
            username: Math.random().toString(),
            role:'admin'
        })

        _user.save((error,data)=>{
            if(error) return res.status(400).json({
                // message:"Something went wrong"
                type : error.name,
                message : error.message
            })

            if(data) return res.status(201).json({
                // user:data //to check the data is coming or not
                message: "admin created successfully!"
            })
        })
    })
}

exports.signin = (req , res)=>{
    User.findOne({email : req.body.email})
    .exec((error , user)=>{
        if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password) && user.role === 'admin'){
                const token = jwt.sign({_id:user._id} , process.env.JWT_AUTH , {expiresIn : '1h'});
                const {_id, firstname , lastname, email, role, fullname} = user;
                res.status(200).json({
                    token,
                    user:{
                        _id, firstname , lastname, email, role, fullname
                    }
                })
            }else{
               return res.status(400).json({
                   message:"something went wrong"
               })     
            }
        }else{
            return res.status(400).json({message: "something went wrong"});
        }
    })

}

// middleware 
// auth check middleware
exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    var user = jwt.verify(token, process.env.JWT_AUTH);
    req.user = user;
    // const token = jwt.verify()
    next();
};