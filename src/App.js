import React  ,{useState , useEffect} from "react";


function App() {

  const [todos , setTodos] = useState([])
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
  const deleteTodo = (item)=>{
    const TodoListAfterDelete = todos.filter(x => x.id !== item.id)
    setTodos(TodoListAfterDelete)
  }


  return (
    <div className="App">
     <h1> Ultimate React Todo-List </h1>
     <hr/>

     <form onSubmit={handleSubmit}>
       <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder="new todo ..."/>
       <button>Add Todo</button>

       <div>
         {todos.map(item => <div>
          <p className="todo" key={item.id}>{item.text}</p>
          <span onClick={()=> deleteTodo(item)}><button>delete</button></span>
         </div>)}

       </div>
     </form>
    </div>
  );
}

export default App;
