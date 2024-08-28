import React, { useEffect, useState } from "react";
import "../../style/Admin/adminUsers.css";
import AdminSidenav from "./AdminSidenav";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AdminOrderUserOrder = () => {
  const [data, setData] = useState(null);
  const { orderId } = useParams(); // Destructure the orderId from useParams
  const token = localStorage.getItem('token');

  const getUser = async () => {
    try {
      const res = await axios.get(
        `https://mouththrown.onrender.com/api/order/singleorder/${orderId}`,
        {
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`, // Include token in headers if required
          },
        }
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [orderId]);

  return (
    <div style={{ backgroundColor: "hsl(24, 76%, 65%)" }}>
      <div className="d-flex align-items-start justify-content-between">
        <AdminSidenav />
        <div className="adminuser-table-div m-5 rounded-5">
          <table className="adminuser-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Category</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {data && data.orderItems && data.orderItems.length > 0 ? (
                data.orderItems.map((item, index) => (
                  <tr key={item._id || index}>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.image} alt={item.title} width="50" height="50" className="rounded-5" />
                    </td>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td className="d-flex gap-3 p-2">
                      <Link to={`/admin/orders/address/${data._id}`}>
                        <button className="btn d-flex align-items-center gap-3 btn-primary p-2">
                          Address
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  );
};

export default AdminOrderUserOrder;
