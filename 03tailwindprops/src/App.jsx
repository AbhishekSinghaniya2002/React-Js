import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21

  }

  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl mb-4'>tailwind test</h1>

    {/* <Card channel="chaiaurcode" someObje={myObj} /> */}
    <Card username="chaiaurcode" btnText= "click me"/>
    <Card username="Sachin" btnText= "visit me"/>
    <Card/>
    </>
  )
}

export default App
