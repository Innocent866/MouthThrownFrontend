import React, { useEffect, useState } from "react";
import "../../style/Admin/adminUsers.css";
import AdminSidenav from "./AdminSidenav";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import Download from "../../Component/Admin/DeleteModal";
import { RiFunctionAddLine } from "react-icons/ri";

const AdminOrder = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(null); // New error state
  const token = localStorage.getItem('token');

  const getUser = async () => {
    try {
      const res = await axios.get(
        "https://mouththrown.onrender.com/api/order/getallorder",
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.allOrders);
      setData(res.data.allOrders);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      setError("Failed to fetch orders. Please try again later.");
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div style={{ backgroundColor: "hsl(24, 76%, 65%)" }}>
      <div className="d-flex align-items-start justify-content-between">
        <AdminSidenav />
        <div className="adminuser-table-div m-5 rounded-5">
          {loading ? (
            <p>Loading orders...</p>
          ) : error ? (
            <p>{error}</p>
          ) : data.length > 0 ? (
            <table className="adminuser-table">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Phonenumber</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item._id || index}>
                    <td>{item.recipient.firstname}</td>
                    <td>{item.recipient.lastname}</td>
                    <td>{item.recipient.email}</td>
                    <td>{item.recipient.phonenumber}</td>
                    <td className="d-flex gap-3 p-2">
                      <Link to={`/admin/orders/address/${item._id}`}>
                        <button className="btn d-flex align-items-center gap-3 btn-primary p-2">
                          Address
                        </button>
                      </Link>
                      <Link to={`/admin/orders/order/${item._id}`}>
                        <button className="btn d-flex align-items-center gap-3 btn-primary p-2">
                          Order
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No orders found.</p>
          )}
          <h3 className="mt-3 d-flex align-items-center gap-3">Total Order: <span> </span> {data.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
