import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Adminprivate = () => {
    const token = localStorage.getItem('token')
    const notify = ()=>toast.warning("This admin have been logged out")
    const content = token ? <Outlet /> : (notify(), <Navigate to="/admin/signin" />)
  return content
}

export default Adminprivate