const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todoDiscription:{
        type: String,
        required: true,
    }
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;