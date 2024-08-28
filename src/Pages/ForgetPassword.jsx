import React, { useState } from "react";
import "../style/Auth/Signin.css";
import { LiaFileUploadSolid } from "react-icons/lia";
import navLogo from "../assets/images/mouth_thrown_E-commerce_Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logInData = {
      email,
    };

    try {
      const res = await axios.post("https://mouththrown.onrender.com/api/user/forgotpassword", logInData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(res.data.success === true){
        toast.success(res.data.message)
      }


      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.log(error);
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center signin-color">
      <div className="d-lg-flex flex-row-reverse align-items-center justify-content-center signin-main-div w-75 rounded-3">
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center px-3 py-lg-5 gap-5 signin-form">
          <Link to="/" className="text-center">
            <img src={navLogo} alt="Website Logo" className="Nav-Logo" />
          </Link>

          <div className="signin-input-div">
            <input type="text" className="signin-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="" className="signin-label">
              Email
            </label>
          </div>

          <button
            className="btn rounded p-2 fw-bold fs-6"
            style={{ backgroundColor: "#ffc7a2" }}
          >
            Forget Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
