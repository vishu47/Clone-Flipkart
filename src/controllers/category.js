const slugify = require('slugify');
const Category = require('../models/category')

exports.addcategory = (req, res) => {

    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name),
    }

    if (req.body.parent_id) {
        categoryObj.parent_id == req.body.parent_id;
    }

    const cat = new Category(categoryObj);
    cat.save((error, category) => {
        if (error) return res.status(400).json({ error });
        if (category) return res.status(201).json({
            category
            // message: "Category created successfully!"
        })
    });
}

exports.getCategories = (req, res) => {
    Category.find({})
        .exec((error, categories) => {
            if (error) return res.status(500).jason({ error })
            if (categories) {
                return res.status(200).json({
                    categories
                })
            }
        })
};