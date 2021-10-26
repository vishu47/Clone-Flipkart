const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        min:"4",
        max:"20",
        trim:true,
        required:true
    },
    lastname:{
        type: String,
        min:"4",
        max:"20",
        trim:true,
        required:true
    },
    username:{
        type: String,
        lowercase:true,
        required:true,
        unique:true,
        // index:true,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        index:true,
        required:true,
        lowercase:true,
    },
    hash_password:{
        type:String,
        required:true,
        min:'6',
        min:'20'
    },
    role:{
        type:String,
        enum:['user','admin'],
        defalut:'user'
    },
    contact:{
        type:String,

    },
    profile_pic:{
        type:String,
    }
},{ timestamps:true});

// to bcrypt the user pass and mathc the password
userSchema.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password,10);
})

userSchema.virtual('fullname')
.get(function(){
    return `${this.firstname} ${this.lastname}`;
})

// to match the password
userSchema.methods = {
    authenticate : function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
}


module.exports = mongoose.model('user',userSchema);