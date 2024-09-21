import React, {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

// bellow code represent how can we send data 
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault() // by default jab bhi ham submit karte hai to value url ke through kahi na kahi aur chali jati hai or post method ke through chali jati hai ye mai nahi chahta hu ki ho yaha par so i use prevent default.  

      setUser({username , password}) 
    }

  return (
    <div>
     <h2>Login</h2>
     <input type='text' 
     value={username}
     onChange={(e) => setusername(e.target.value)}
     placeholder='username'></input>
     {" "}
     <input type='text'
     value={password}
     onChange={(e) => setpassword(e.target.value)}
     placeholder='password'></input>

     <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
