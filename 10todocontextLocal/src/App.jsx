import { useState , useEffect } from 'react'
import {TodoProvider } from  "./contexts"
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  // Now we manage state 
  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}])
  }
  
  // yaha par maine map lagaya hai jisse ki har ek todo mil jayega. har ek todo kya hai ek object hai and har ek object ke under ek id hai. to yaha par lenge prevTodo(har ek indivisual todo hai yeh) => iske baad ka jo prevTodo hai vo har ek array ka hai. === ke aage jo id ham likh rahe hai vo likh rahe jo update Todo ke under id gayi hui hai. agar true hai or vo id mil gayi hai to new Todo daal dega . agar nahi mili hai to jo purana hai ya prev hai usko rahne do as it is.    
  const updateTodo = (id , todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

  // prev.map((eachVal) => {
  //   if (eachVal.id === id){
  //     todo
  //   } 
  // })
  }
  
  // Map yaha par ek achha syntex nahi hai adhiktar jab ham delete karte hai to ek origional array hota hai aur hame banana hai ek new array aur new array ke under vo sari value honi chahiye lekin jo hamne (id) diya hai bas ye nahi hone chahiye baki sab hona chahiye. I mean hamare pass purane array ke under sari value hai ab new array mujhe is tarah se banana hai kynki delete karna hai na aur delete ka matlab kya hai ek pura jo group hai usme delete ki value nahi hai baki sabhi hai. Uske liye javascript hame better method deta hai jiska naam hai filter to ham isko yaha par use karenge.Aur ye jo filte hota hai vo true statement par hi work karta hai. 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // isme bhi same process hoga difference ye hai ki filter me ham dekh rahe the vo vala do jo id ka na ho lekin yaha par ham dekhenge vo vala do jo id se match kar raha ho tabhi to update karunga mai. we use turnary operater like prevTodo === id ? "true" : "false". Agar match nahi karta hai to prevTodo hi rahne do Agar match karta hai tab baki sari value to as it is rakho bus ek value change kar do to iske liye ham yaha spread operator use karenge . isliye pahle to hum sari valu le lenge {...prevTodo} i mean todo ki sari value aa jayengi isme se ek value change karni hai {...prevTodo , comleted : !} comma lagake completed likhte hai isko overright kar dete  hai. i mean jo bhi usme pahle se value hai uske aage ! sign laga denge to jo true hai vo false ho jayega aur jo false hai vo true ho jayega. // Maine kya kiya pahle sari value le li {...prevTodo } fir usme se ek ko overright kar diya jo ki completed hai fir uske aage ! laga diya aur pahle value kya hai !prevTodo:completed hi to hai.

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }
  /////////// Aur yaha par hamara sara basic context ka functionality khatam hota hai ab hum start karenge local storage ki functionality. /////// 

  /* 
  1. first thing ? jaise ki jub bhi hum apne react app ko referesh karenge to Todo to hai vaha par to vo Todo sabse pahle load ho jana chahiye like
  
  2. Application jub bhi first time load hoti to kaun sa method or function hai jo query kar sakta Hai local storage se yaa mai ek aisa function bna du ki ye vala function call karke local storage me javo sari value leke aavo jo bhi uske under hai aur usko is Todos me insert kar do ? . 
  Answer:- vo method hai useEffect.
  
  */

  useEffect(() => {
    // local storage mai hum directly value access kar sakte hai.
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  }, [])

  // above code show jab hum application load kiye  tab sari value aa gayi. but ek aur kaam hai mere pass jais ehi ye sari value is todo mai add ho rahi hai, uske baad mai usko local storage mai add karna chahta hu. 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
{
// yaha par hum agar {} use karenge to return karna padega. isliye hum () use karenge yeh auto return karta hai 

// key ka use hum tab karte hai jab kai sari chije same ho aur vaha uniqeness lana ho 
} 
                         {todos.map((todo ) => (
                          <div key={todo.id}
                          className='w-full'> 

                          <TodoItem todo={todo}/>
                          </div>
                         ))}
                        
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
