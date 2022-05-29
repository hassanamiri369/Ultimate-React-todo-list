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
  return (
    <div className="App">
     <h1> Ultimate React Todo-List </h1>
     <hr/>

     <form onSubmit={handleSubmit}>
       <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder="new todo ..."/>
       <button>Add Todo</button>

       <div>
         {todos.map(item => <p key={item.id}>{item.text}</p>)}
       </div>
     </form>
    </div>
  );
}

export default App;
