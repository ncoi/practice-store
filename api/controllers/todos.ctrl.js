// Todo App todo controller

const mongoose = require('mongoose'),
      Todo      = require('../models/shoe');

// Get todos
function getTodos(req, res) {
    Todo.find(function(err, todos){
        if(err) throw err;
        console.log(todos);
        res.json(todos);
    });
}

// Add todos
function addTodo(req, res) {
    var todo = req.body;
    Todo.create(todo, function(err, todo) {
        if(err) throw err;
        res.json(todo);
    });
}

// Update todo
function updateTodo(req, res) {
    var id = req.params._id;
    var todo = req.body;
    var query = {_id: id};
    var update = {
        val: todo.val
    }
    Todo.findOneAndUpdate(query, update, {}, function(err, todo) {
        if(err) throw err;
        res.json(todo);
    });
}

// Delete todo
function deleteTodo(req, res) {
    var id = req.params._id;
    var query = {_id: id};
    Todo.remove(query, function(err, todo) {
        if(err) throw err;
        res.json(todo);
    });
};


module.exports = { getTodos, addTodo, updateTodo, deleteTodo };