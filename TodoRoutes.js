const {Router} = require("express");
const { getToDos , SaveTodo, updateToDo, deleteToDo} = require("../controller/ToDoController") 

const router = Router();

router.get("/get" , getToDos);
router.post("/save" , SaveTodo);
router.put("/update/:id" , updateToDo);
router.delete("/delete/:id" , deleteToDo);


module.exports = router;