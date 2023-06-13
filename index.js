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

const express = require("express");
const server = express();
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;

// middleware
// const auth = (req, res, next) => {
// //   console.log(req.query.password);
//   if (req.body.password== '123') {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };
 
server.use(express.json())
server.listen(8080, () => {
  console.log("hello");
});

// C R U D (Create , Read , Update, Delete)

//CREATE api - post /products
server.post("/products",(req, res) => {
  console.log(req.body)
  products.push(req.body)
  res.status(201).json(req.body);
});


// READ api - get /products
server.get("/products", (req, res) => {
  res.json(products);
});

// READ api - get /products:id
server.get("/products/:id", (req, res) => {
 const id = +req.params.id
 const product = products.find(p =>p.id===id)
 res.json(product);
});

// UPDATE api - put /products:id (overwrites the whole object)
server.put("/products/:id", (req, res) => {
  const id = +req.params.id
  const productIndex = products.findIndex(p =>p.id===id)
  products.splice(productIndex,1,{...req.body,id:id})
  res.status(202).json();
 });
// UPDATE api - patch (overwrite specific properties , remaining properties remain same)
 server.patch("/products/:id", (req, res) => {
  const id = +req.params.id
  const productIndex = products.findIndex(p =>p.id===id)
  const product = products[productIndex] //purane properties yaha se milenge 
  products.splice(productIndex,1,{...product,...req.body}) // in splice the second data will overwrite the first data
  res.status(202).json();
 });

//DELETE API - delete /products:id 
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id
  const productIndex = products.findIndex(p =>p.id===id)
  const product = products[productIndex]
  products.splice(productIndex,1)
  res.status(202).json(product);
 });


  