import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,  createBrowserRouter, RouterProvider ,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/', //  This is Top level Element iske under or Iske baad  nesting hongi
//     element:<Layout/>,
//     children: [
//       {
//         path:"", // Here i gave empety beacuse i will display something on /
//         element: <Home /> 
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />

//       }
//     ]
//   }
// ])  

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
      loader={githubInfoLoader}
       path='github'
       element={<Github />} 
       />
      </Route>  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
 
