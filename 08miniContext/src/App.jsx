import './App.css'
import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

// Agar hum koi api call kiye hote to usercontext lo vahi useContext use karo aur data vaha PAR fetch lar do.
// jab bhi hame koi data lena ho jis bhi component me to useContext use karenge aur data le lenge .
function App() {
  
  return (
    <UserContextProvider>
      <h1>How can we Login</h1>
      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App
