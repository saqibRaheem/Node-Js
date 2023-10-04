const route = require('express').Router()
const todoController = require('../controller/todoController')

route.post('/item' , todoController.todoList)
route.get('/item' , todoController.getTodoList)
route.put('/item/:id' , todoController.putTodoList)
route.delete('/item/:id' , todoController.delTodoList)

module.exports = route