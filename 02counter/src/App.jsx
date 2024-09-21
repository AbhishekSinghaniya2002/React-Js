import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)
//  let counter = 15
const AddValue = () =>{
  // console.log("clicked" ,counter);
  // counter = counter + 1
  setCounter(counter + 1)

}

const RemoveValue = () =>{
  setCounter(counter - 1)
}
  return (
    <>
    <h1> How Are you </h1>
    <h2>Counter value: {counter} </h2>

    <button
    onClick={AddValue}
    > Add value{counter}  </button>
    <br/>
    <button
    onClick={RemoveValue}
    > remove value{counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
