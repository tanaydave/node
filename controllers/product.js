const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;
const model = require("../model/product");
const { default: mongoose } = require("mongoose");
const Product = model.Product

exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  
  product.save().then((doc)=>{
    res.status(201).json(doc);
  }).catch((err)=>{
    res.status(401).json(err)  })



  
};
exports.getAllProducts = async (req, res) => {
  const products = await Product.find()
  
  res.json(products);

};
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  
  const product = await Product.findById(id)
  res.json(product);
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(202).json(doc);

}
catch(err){
  console.log(err)
  res.status(400).JSON(err)
}
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(202).json(doc);

}
catch(err){
  console.log(err)
  res.status(400).JSON(err)
}
};
exports.deleteProduct =async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndDelete({_id:id})
  res.status(202).json(doc);

}
catch(err){
  console.log(err)
  res.status(400).JSON(err)
}
};
