const express = require('express');
const env = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
// routes
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')


// access all the emv variable or constant
env.config();

// connect with mongodb

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ecomm.fipgu.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser :true,
        useUnifiedTopology:true,
        // useCreateIndex: true
    }       
).then(() => {
    console.log("Database connected!");
})
// .catch((err) => {
//     console.log(err.message);
// })
 

// middleware
app.use(bodyParser());

app.use('/api',authRoutes);
app.use('/api',adminRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});