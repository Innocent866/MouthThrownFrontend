import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Marquee from '../Maquee/Maquee'
import Items from './Items'

const Layout = () => {
  return (
    <div>
        <Marquee/>
        <Navbar/>
        <Items/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout