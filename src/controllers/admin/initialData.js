const category = require('../../models/category');
const product = require('../../models/productModel');

exports.initialData = async(req, res) => {
    const categorylist = await category.find({}).exec();
    const productslist = await product.find({}).select('_id name slug price quantity description category').populate('category').exec();

    res.status(200).json({
        categorylist,
        productslist
    })
}