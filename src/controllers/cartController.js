const cartModel = require('../models/cartModel');

exports.productAddCart = (req, res) => {

    const cartaddObj = {
            user: req.user._id,
            cartItems: req.body.cartItems
        }
        // return res.status(200).json({ res: cartaddObj })
    const addtocart = new cartModel(cartaddObj);

    addtocart.save((error, addcart) => {
        if (error) return res.status(400).json({ error });

        if (addcart) return res.status(200).json({
            message: addcart
        })
    })

}