import { createContext , useContext } from "react";

// bellow code is represent propertise
export const TodoContext = createContext({
    // bellow data called property 
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    // Now we write functionalities and functionality ke under defination nahi likhte keval unka naam likhte hai.
    addTodo: (todo) => {},
    updateTodo: (id , todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
// above data called method
}) 

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider