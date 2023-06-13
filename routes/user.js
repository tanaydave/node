const express = require('express')
const router = express.Router()
const userController = require ('../controllers/user')

router
 .post('/',userController.createUser)
 .get('/',userController.getAllUsers)
 .get('/:id',userController.getUser)
 .patch('/:id',userController.updateUser)
 .put('/:id',userController.updateUser)
 .delete('/:id',userController.deleteUser)
 exports.router = router