import React from 'react'
import { Outlet } from 'react-router-dom'
import Marquee from '../Maquee/Maquee'

const LayoutNotFound = () => {
  return (
    <div>
        <Marquee/>
        <Outlet/>
    </div>
  )
}

export default LayoutNotFound