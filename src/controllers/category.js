const slugify = require('slugify');
const Category = require('../models/category')

exports.addcategory = (req, res) => {

    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name),
    }

    if (req.file) {
        categoryObj.categoryImage = process.env.API + '/public/' + req.file.filename;
    }

    if (req.body.parent_id) {
        categoryObj.parent_id = req.body.parent_id;
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

function filterCategory(categories, parent_id = null) {
    const categoryList = [];
    let category;

    if (parent_id == null) {
        category = categories.filter(cat => cat.parent_id == undefined);
    } else {
        category = categories.filter(cat => cat.parent_id == parent_id);
    }
    for (let cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.name,
            prenetId: cate.parent_id,
            children: filterCategory(categories, cate._id)
        })
    }

    return categoryList;
}

exports.getCategories = (req, res) => {
    Category.find({})
        .exec((error, categories) => {
            if (error) return res.status(500).jason({ error })
            if (categories) {

                const categoryList = filterCategory(categories, )

                return res.status(200).json({ categoryList })
            }
        })
};