import React, { useContext, useState } from "react";
import navLogo from "../assets/images/mouth_thrown_E-commerce_Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import "../style/layout/navbar.css";
import Profile from "../Component/NavbarComponent/Profile";
import { AppContext } from "../Context/context";
import Search from "../Component/NavbarComponent/Search";
import CartContext from "../Context/CartContext";

const Navbar = () => {
  
  const { handleSearch, open, profile, handleShowProfile } = useContext(AppContext);
  const { cart} = useContext(CartContext);
  

  return (
    <div>
      <div
        className="p-3"
        style={{ backgroundColor: "#F7E0CE", overflow: "hidden" }}
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/"><img src={navLogo} alt="Website Logo" className="Nav-Logo" /></Link> 
            <div className="w-50 d-none d-lg-block">
            {open && <Search/>}
          </div>

            <ul className="d-flex align-items-center gap-4 gap-lg-4 mt-3">
              <li
                className="nav-list"
                onClick={() => handleSearch()}
              >
                <FaSearch className="fs-1" />
                <span className={open ? "d-none" : "d-none d-lg-block d-md-block"}>
                  Search
                </span>
              </li>

              <li
                className="nav-list"
                onClick={() => handleShowProfile()}
              >
                <CgProfile className="fs-1" />
                <span className={open ? "d-none" : "d-none d-lg-block d-md-block"}>
                  Profile
                </span>
              </li>

              <Link className="text-black text-decoration-none position-relative" to="/cart">
                <li
                  className="nav-list"
                >
                  <MdOutlineShoppingCart className="fs-1 fs-lg-2" />
                  <span className={open ? "d-none" : "d-none d-lg-block d-md-block"}>
                    Cart
                  </span>
                  <p className="rounded-4 d-flex justify-content-center align-items-center fs-6 fw-light" style={{position:"absolute",width:"20px", height:"20px", left:"10px", top:"-8px", backgroundColor:"black", color:"#F7E0CE"}}>{cart.length}</p>
                </li>
                
              </Link>
            </ul>
          </div>
          <div className="d-block d-lg-none">
            {open && <Search/>}
          </div>
        </div>
      </div>
      {profile && <Profile />}
    </div>
  );
};

export default Navbar;