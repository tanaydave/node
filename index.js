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
const productRouter = require('./routes/product')


server.use(express.json())
server.use('/products', productRouter.router)



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





  