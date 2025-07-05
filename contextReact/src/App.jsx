import { TodoContextProvider ,TodoContext ,useTodo} from './Context/Index'
import './App.css'
import { useState,useEffect} from 'react';

function App() {
  const [todos , setTodos] = useState([]);
  const {todo} = useTodo;

   const addTodo = (todo) => {
     setTodos((todo) => [{id:Date.now(), ...todo}, ...prev])
   }

   const updateTodo = (id , todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id? todo : prevTodo)) );
   }

   const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
   }

   const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id? {isCompleted:!prevTodo.isCompleted ,...prevTodo} : prevTodo)))
   }

   useEffect(() => {
      const todo = JSON.parse(localStorage.getItem("todos"))

      if(todos)
      {
        setTodos(todo);
      }
   }, [todos])

   
  useEffect(() => {
      
        (localStorage.setItem("todos", JSON.stringify(todos)))
      
   }, [todos])

  return (
  
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo , toggleComplete }}>
       <div T className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
     </TodoContextProvider>
 
  )
}

export default App
