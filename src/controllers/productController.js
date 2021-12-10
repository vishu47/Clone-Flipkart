const slugify = require('slugify');
const Products = require('../models/productModel')

exports.productAdd = (req, res) => {

    const { name, price, quantity, category, description, review, offer, createdBy } = req.body;

    let productImg = [];

    if (req.files.length > 0) {
        productImg = req.files.map(file => {
            return {
                img: file.filename
            }
        })
    }

    const productAddObj = {
        name: name,
        slug: slugify(name),
        category,
        description,
        price,
        quantity,
        productImg,
        createdBy: req.user._id
    }


    const productAdd = new Products(productAddObj);

    productAdd.save((error, productAdd) => {
        if (error) return res.status(400).json({ error });

        if (productAdd) return res.status(200).json({
            product: productAdd
        })
    })
}