import { useContext , createContext  } from "react";

export const TodoContext = createContext({
    todos : [
        {
        id : 1,
        todo : "TodoMsg",
        isCompleted : false,
        }
    ],
   addTodo = (todo) => {} ,
   updateTodo = (id , todo) =>{},
   deleteTodo = (id) => {},
   toggleComplete = (id) => {},

}) 

export const useTodo = () => { 
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;