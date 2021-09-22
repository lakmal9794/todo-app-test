const router = require("express").Router();

let Todo = require("../models/todo");

router.route("/add").post((req,res)=>{
    const todoDiscription = req.body.todoDiscription;

    const newTodo = new Todo({
        todoDiscription
        
    })
    newTodo.save().then(()=>{
        res.json("Todo added");
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get(async (req,res)=>{
    Todo.find().then((todos)=>{
        res.json(todos)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/update/:id").put(async (req, res)=>{
  let todoID = req.params.id;
  const {todoDiscription} = req.body;

  const updateTodoDisription = {
      todoDiscription
  }

  const update = await Todo.findByIdAndUpdate(todoID, updateTodoDisription)
  .then(()=>{
    res.status(200).send({status:"todu updated"});
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({status:"error update todo"});
  })

  
})

router.route("/delete/:id").delete(async(req, res)=>{
    let todoID = req.params.id;


     await Todo.findByIdAndDelete(todoID)
    .then(()=>{
        res.status(200).send({status:"Todo Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error delete todo", error:err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let todoID = req.params.id;
   const data = await Todo.findById(todoID)
    .then((Todo)=>{
        res.status(200).send({status:" Todo fetched ", Todo})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"todo fetched error"});
})
})

module.exports = router;

