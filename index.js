// const lib = require('./lib')
// console.log(lib.sum(5,5),lib.diff(10,4))

//<-------------------end-------------------->

// // import {sum,diff}  from './lib.js';
// console.log(lib.sum(5,5),lib.diff(10,4))
// const fs = require('fs');
// fs.readFile('demo.txt','utf-8',(error,data)=>{
//      console.log(data)
// })
//<--------------------------------------------------------------->
require ('dotenv').config()
const express = require("express");
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const mongoose = require("mongoose")
const {Schema} = mongoose



// database connection



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("database connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//middlewares
server.use(express.json())
server.use('/products', productRouter.router)
server.use('/users',userRouter.router)


//schema
const productSchema = new Schema({
  title:String,
  description:String,
  price:Number,
  discountPercentage:Number,
  rating:Number,
  brand:String,
  category:String,
  thumbnail:String,
  images:[String]
})

const Product = mongoose.model('product', productSchema);





server.listen(8080, () => {
  console.log("hello");
});

// C R U D (Create , Read , Update, Delete)
//CREATE api - post /products
// READ api - get /products
// READ api - get /products:id
// UPDATE api - put /products:id (overwrites the whole object)
// UPDATE api - patch (overwrite specific properties , remaining properties remain same)
//DELETE API - delete /products:id 





  