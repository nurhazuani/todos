var express = require('express');
var router = express.Router();
var todoController = require('../controllers/todos')

// import todoController from './../controllers/todos'

router.get('/:id', todoController.getTodo);
router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.patch('/:id', todoController.updateTodo) // patch is request update
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
