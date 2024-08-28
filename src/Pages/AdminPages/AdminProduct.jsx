import React, { useEffect, useState } from "react";
import "../../style/Admin/adminUsers.css";
import AdminNavbar from "./AdminNavbar";
import AdminSidenav from "./AdminSidenav";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import Download from "../../Component/Admin/DeleteModal";
import { RiFunctionAddLine } from "react-icons/ri";

const AdminProduct = () => {
  const [data, setData] = useState([]);

  const getUser = async () => {
    try {
      const res = await axios.get(
        "https://mouththrown.onrender.com/api/item/getallproducts",
        {
          headers: {
            "Content-type": "application/json",
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
  }, []);

  return (
    <div style={{ backgroundColor: " hsl(24, 76%, 65%)" }}>
      <div className="d-flex align-items-start justify-content-between">
        <AdminSidenav />
        <div className="adminuser-table-div m-5 rounded-5">
          <div className="d-flex justify-content-end m-2 mb-4">
            <Link to="/admin/product/add">
              <button className="d-flex justify-content-end align-items-center gap-2 btn btn-primary">
                Add Product <RiFunctionAddLine />
              </button>
            </Link>
          </div>
          <table className="adminuser-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id || index}>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src={item.images[0]}
                      alt={item.firstname}
                      className="rounded-5"
                      width="40"
                      height="40"
                    />
                  </td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.stock}</td>
                  <td>{item.brand} </td>
                  <td className="d-flex gap-3 p-2">
                    <Link to={`/admin/product/edit/${item._id}`}>
                      <button className="btn d-flex align-items-center gap-3 btn-primary p-2">
                        Edit <FaRegEdit />
                      </button>
                    </Link>
                    <Download id={item._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="mt-3 d-flex align-items-center gap-3">Total Items: <span> </span> {data.length}</h3>

        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
