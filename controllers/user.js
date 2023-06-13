const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
const users = data.users

exports.createUser = (req,res) =>{
    users.push(req.body)

}
exports.getAllUsers = (req,res) =>{
    res.json(users)

}
exports.getUser = (req,res) =>{
    const id = +req.params.id
    const user = users.find((u)=> u.id == id)
    res.json(user)

}
exports.replaceUser = (req,res) =>{
    const id = +req.params.id
    const userIndex = users.findIndex((u)=> u.id == id)
    users.splice(userIndex,1,{...req.body,id:id})
    res.status(202).json()

}
exports.updateUser = (req,res) =>{
    const id = +req.params.id
    const userIndex = users.findIndex((u)=> u.id == id)
    const user = users[userIndex]
    users.splice(userIndex,1,{...user,...req.body,id:id})
    res.status(202).json()

}
exports.deleteUser = (req,res) =>{
    const id = +req.params.id
    const userIndex = users.findIndex((u)=> u.id == id)
    users.splice(userIndex,1)
    res.status(202).json()

}