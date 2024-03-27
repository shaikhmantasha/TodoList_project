const ToDoModel = require("../models/ToDoModel");
const TodoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req , res ) => {
    const toDos = await TodoModel.find();
    res.send(toDos);
};

module.exports.SaveTodo = (req , res) => {
    const { toDo } = req.body;

    ToDoModel.create({ toDo })
    .then((data) => {
        console.log("Saved successfully...");
        res.status(210).send(data);
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err , msg: "Something went wrong"});
    });
};

module.exports.updateToDo = (req , res)=> {
    const { id } = req.params;
    const { toDo } = req.body;

  TodoModel.findByIdAndUpdate(id , {toDo})
  .then(() => {
    res.send("Updated succesfully...")
  })
  .catch((err) => {
    console.log(err);
    res.send({ error: err , msg: "Something went wrong"});
});
};

module.exports.deleteToDo = (req , res) => {
    const{id} = req.params;

  TodoModel.findByIdAndDelete(id)
  .then(()=>{
    res.send("Deleted successfully...");
  })
  .catch((err) => {
  console.log(err);
  res.send({ error: err , msg: "Something went wrong"});

});
};
