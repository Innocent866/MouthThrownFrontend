import React, { useContext } from "react";
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
  const { cart } = useContext(CartContext);

  return (
    <nav className="p-3" style={{ backgroundColor: "#F7E0CE", overflow: "hidden" }}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src={navLogo} alt="Website Logo" className="Nav-Logo" />
          </Link>
          <div className="w-50 d-none d-lg-block">
            {open && <Search />}
          </div>
          <ul className="d-flex align-items-center gap-4 gap-lg-4 mt-3 list-unstyled">
            <li className="nav-list" onClick={handleSearch} aria-label="Search">
              <FaSearch className="fs-1" />
              <span className={open ? "d-none" : "d-none d-lg-block"}>
                Search
              </span>
            </li>
            <li className="nav-list position-relative" onClick={handleShowProfile} aria-label="Profile">
              <CgProfile className="fs-1" />
              <span className={open ? "d-none" : "d-none d-lg-block"}>
                Profile
              </span>
              <div className="nav-profile-drop">
              {profile && <Profile />}
              </div>
            </li>
            <li className="nav-list position-relative">
              <Link to="/cart" className="text-black text-decoration-none position-relative" aria-label="Cart">
                <MdOutlineShoppingCart className="fs-1 fs-lg-2" />
                <span className={open ? "d-none" : "d-none d-lg-block"}>
                  Cart
                </span>
                {cart.length > 0 && (
                  <span
                    className="rounded-circle d-flex justify-content-center align-items-center fs-6 fw-light position-absolute"
                    style={{
                      width: "20px",
                      height: "20px",
                      left: "10px",
                      top: "-8px",
                      backgroundColor: "black",
                      color: "#F7E0CE",
                      fontSize: "0.8rem",
                    }}
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-block d-lg-none">
          {open && <Search />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
