const Product = require("../models/product.model");

module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then(newlyCreatedProduct => res.json({ producto: newlyCreatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findAllProduct = (req, res) => {
  Product.find()
    .then(productos => res.json({productos}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneProduct = (req, res) => {
  Product.findOne({_id:req.params._id})
    .then(producto => res.json(producto))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({_id:req.params._id}, req.body, {new:true})
    .then(producto => console.log({producto}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({_id:req.params._id})
    .then(producto => console.log({producto}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};