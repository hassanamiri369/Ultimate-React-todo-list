import React  ,{useState , useEffect} from "react";


function App() {

  const [todos , setTodos] = useState([])
  console.log(todos)
  const [todo , setTodo] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault()
    
    const newTodo = {
      id : new Date().getTime(),
      text : todo,
      completed : false,
    }

    setTodos([...todos , newTodo])
    setTodo("")
  }


  // delete todo 
  const deleteTodo = (todoItem)=>{
    const TodoListAfterDelete = todos.filter(x => x.id !== todoItem.id)
    setTodos(TodoListAfterDelete)
  }



  // check todo completed
  const checkTodo = (todoItem)=> {
    const todoListAfterCheckTodo = todos.map(item => {
      return item.id === todoItem.id ? {...item , completed : !item.completed} : item;
    })
     
    setTodos(todoListAfterCheckTodo)
  }


  return (
    <div className="App">
     <h1> Ultimate React Todo-List </h1>
     <hr/>

     <form onSubmit={handleSubmit}>
       <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder="new todo ..."/>
       <button>Add Todo</button>

       <div>
         {todos.map(todoItem => <div>
          <span className="todo" key={todoItem.id}>{todoItem.text}</span>
          <input type="checkbox"  onChange={()=> checkTodo(todoItem)} checked={todoItem.completed}/>
          <span onClick={()=> deleteTodo(todoItem)}><button>delete</button></span>

         </div>
         )}

       </div>
     </form>
    </div>
  );
}

export default App;
