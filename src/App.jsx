// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/footer/footer"
import Layout from "./components/Layout/Layout"
// import { children } from "react"

function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter ([
    {path : "/", element : <Layout />,children: [
      
      { index: true, element : <Home /> },
      { path: "home", element: <Home /> },
      { path: "/Login", element : <Login /> },
      { path: "/Register", element: <Register /> },
      // { path: "/Navbar", element: <Navbar /> },
      {path: "/error", element: <div className="bg-danger">error</div>},
      // {path: "/Footer", element: <Footer /> },
    ]}




  ])

  return (
    <>
    <RouterProvider router={router} />

      {/* <p className='bg-danger'>alkot</p>
      Home page 
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate ducimus fuga vel atque voluptatibus? */}
    </>
    )
}

export default App
