const express = require('express');
const env = require('dotenv')
const mongoose = require('mongoose')
const app = express();
const path = require('path')
    // routes
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRoutes = require('./routes/category')
const productsRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')


// access all the emv variable or constant
env.config();

// connect with mongodb

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ecomm.fipgu.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    }
).then(() => {
    console.log("Database connected!");
})


// middleware
// app.use(bodyParser());  //reomve bcz already in express.json
app.use(express.json()); //reomve bcz already in express.json
app.use('/public', express.static(path.join(__dirname, 'uploads')))
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productsRoutes);
app.use('/api', cartRoutes);


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
});

// (req, res) => {
//     return res.status(200).json({ message: 'lkjhgfd' })