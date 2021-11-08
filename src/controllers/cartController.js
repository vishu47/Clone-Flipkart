const cartModel = require('../models/cartModel');

exports.productAddCart = (req, res) => {

    cartModel.findOne({ user: req.user._id })
        .exec((error, cart) => {
            if (error) return res.status(400).json({ error });
            if (cart) {
                const item = cart.cartItems.find(c => c.product == req.body.cartItems.product);

                if (item) {
                    cartModel.findOneAndUpdate({ "user": req.user._id, "cartItems.product": req.body.cartItems.product }, {
                            "$set": {
                                "cartItems": {
                                    ...req.body.cartItems,
                                    quantity: item.quantity + req.body.cartItems.quantity
                                }
                            }
                        })
                        .exec((error, _cart) => {
                            if (error) return res.status(400).json({ error });
                            if (_cart) return res.status(200).json({ cart: _cart })
                        })
                } else {

                    //if already exist
                    cartModel.findOneAndUpdate({ user: req.user._id }, {
                            "$push": {
                                "cartItems": req.body.cartItems
                            }
                        })
                        .exec((error, _cart) => {
                            if (error) return res.status(400).json({ error });
                            if (_cart) return res.status(200).json({ cart: _cart })
                        })
                }
            } else {
                const cartaddObj = {
                    user: req.user._id,
                    cartItems: [req.body.cartItems]
                }

                const addtocart = new cartModel(cartaddObj);

                addtocart.save((error, addcart) => {
                    if (error) return res.status(400).json({ error });

                    if (addcart) return res.status(200).json({
                        message: addcart
                    })
                })
            }
        })



}