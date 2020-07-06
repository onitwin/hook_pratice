import React ,{useState} from 'react'
import uuid from "uuid";



function TodoForm({addTodo}){

  const [todo,setTodo]=useState({
    id:"",
    task:"",
    completed:false
  });

  function handleTaskInputChange(event){
    setTodo({...todo,task:event.target.value})

  }

  function handleSubmit(event){
    event.preventDefault();
    if (todo.task.trim()){
      addTodo({...todo,id: 1 });
      setTodo({...todo,task:""});
    }

  }

  return(
  <form onSubmit={handleSubmit}>
  <input  name= "task" type='text' value={todo.task} onChange={handleTaskInputChange}/>
  <button type="submit">Submit</button>
  </form>
)

}

export default TodoForm
