import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Private = () => {
    const token = localStorage.getItem('token')
    const notify = ()=>toast.warning("User have been logged out")
    const content = token ? <Outlet /> : (notify(), <Navigate to="/signin" />)
  return content
}

export default Private