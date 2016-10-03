// Main API Router

const express   = require('express'),
      router    = express.Router(),
      todosCtrl = require('../controllers/todos.ctrl');

router.get('/shoe', todosCtrl.getTodos);
router.post('/shoe', todosCtrl.addTodo);
router.put('/shoe/:_id', todosCtrl.updateTodo);
router.delete('/shoe/:_id', todosCtrl.deleteTodo);

module.exports = router;