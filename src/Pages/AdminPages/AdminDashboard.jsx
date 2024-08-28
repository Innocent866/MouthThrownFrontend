import React from 'react'
import "../../style/Admin/adminDashboard.css"
import AdminNavbar from './AdminNavbar'
import AdminSidenav from './AdminSidenav'

const AdminDashboard = () => {
  return (
    <div>
        <AdminNavbar/>
        <div>
            <AdminSidenav/>
        </div>
    </div>
  )
}

export default AdminDashboard