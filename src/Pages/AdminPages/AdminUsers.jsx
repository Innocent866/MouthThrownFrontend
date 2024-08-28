import React, { useEffect, useState } from 'react';
import "../../style/Admin/adminUsers.css";
import AdminNavbar from './AdminNavbar';
import AdminSidenav from './AdminSidenav';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AdminUsers = () => {
  const [data, setData] = useState([]);

  const getUser = async () => {
    try {
      const res = await axios.get(
        "https://mouththrown.onrender.com/api/user/getalluser",
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(res.data);
      setData(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = async(id)=>{
    try {
        const res = await axios.delete(`https://mouththrown.onrender.com/api/user/deleteuser/${id}`)
        console.log(res);
        window.location.reload()
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div style={{backgroundColor:" hsl(24, 76%, 65%)"}}>
      <div className='d-flex align-items-start justify-content-between'>
        <AdminSidenav />
        <div className='adminuser-table-div m-5 rounded-5'>

          <table className='adminuser-table'>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Image</th>
                <th>Email</th>
                <th>Phonenumber</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id || index}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td><img src={item.image} alt={item.firstname} className='rounded-5' width="40" height="40" /></td>
                  <td>{item.email}</td>
                  <td>{item.phonenumber}</td>
                  <td>{item.role} </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="mt-3 d-flex align-items-center gap-3">Total User: <span> </span> {data.length}</h3>

        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
