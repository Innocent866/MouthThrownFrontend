import React, { useEffect, useState } from "react";
import navLogo from "../../assets/images/mouth_thrown_E-commerce_Logo-removebg-preview.png";
import "../../style/Admin/adminSidenav.css"
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsTable } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminSidenav = () => {
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");

  const getUser = async () => {
    try {
      const res = await axios.get(
        "https://mouththrown.onrender.com/api/user/getusername",
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.user.image);
      setData(res.data.user.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="w-25 position-relative vh-100 bg-dark text-light sticky-top top-0">
      <div style={{ width: "100%" }}>
        <div>
          <img src={navLogo} alt="" width="100%" />
        </div>
        <hr />
        <ul
          className="mt-5 list-unstyled d-flex flex-column gap-4"
          style={{ marginBottom: "10rem" }}
        >
            <Link to="/admin/users" className="text-decoration-none text-light">
          <li className="sidenav-list px-5 py-2 fs-4 d-flex gap-4 align-items-center">
            <FaRegUserCircle />
            Users
          </li>
          </Link>
          <Link to="/admin/products" className="text-decoration-none text-light">
          <li className="sidenav-list px-5 py-2 fs-4 d-flex gap-4 align-items-center">
            <AiOutlineProduct />
            Products
          </li>
          </Link>
          <Link to="/admin/orders" className="text-decoration-none text-light">
          <li className="sidenav-list px-5 py-2 fs-4 d-flex gap-4 align-items-center">
            <BsTable />
            Order
          </li>
          </Link>
        </ul>

        <div className="position-absolute bottom-0">
          <hr />
          <div className="d-flex align-items-center gap-5 mx-5 my-4">
            <img src={data} alt="" className="rounded-5" width="50" height="50" />
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidenav;
