import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/footer'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer /> 
    </>
  )
}

export default Layout