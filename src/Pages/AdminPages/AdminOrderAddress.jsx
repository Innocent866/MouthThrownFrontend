import React, { useEffect, useState } from "react";
import "../../style/Admin/adminUsers.css";
import AdminSidenav from "./AdminSidenav";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AdminOrderAddress = () => {
  const [data, setData] = useState(null); // Initialize data as null
  const { orderId } = useParams(); // Destructure the orderId from useParams
  const token = localStorage.getItem('token');

  const getUser = async () => {
    try {
      const res = await axios.get(
        `https://mouththrown.onrender.com/api/order/singleorder/${orderId}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in headers if required
          },
        }
      );
      console.log(res.data);
      setData(res.data); // Update state with the response data
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
                <th>City</th>
                <th>House Number</th>
                <th>Street</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              {data && data.address ? ( // Check if data and data.address exist before rendering
                <tr>
                  <td>{data.address.city}</td>
                  <td>{data.address.housenumber}</td>
                  <td>{data.address.street}</td>
                  <td>
                    <Link to={`/admin/orders/order/${data._id}`}>
                      <button className="btn d-flex align-items-center gap-3 btn-primary p-2">
                        Orders
                      </button>
                    </Link>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No address found.
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

export default AdminOrderAddress;
