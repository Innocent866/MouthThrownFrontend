import React, { useState } from 'react'
import "../../style/Auth/Signin.css";
import { LiaFileUploadSolid } from "react-icons/lia";
import navLogo from "../../assets/images/mouth_thrown_E-commerce_Logo-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';


const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logInData = {
      email,
      password,
    };

    try {
      setIsloading(true)
      const res = await axios.post("https://mouththrown.onrender.com/api/user/login", logInData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);

      if(res.data.success === true){
        toast.success(res.data.message)
      }
      
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard")
      }else{
        toast.error("You are not an Admin")
        navigate("/")
      }

      const token = res.data?.user?.token

      window.localStorage.setItem("token", token)

      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }finally{
      setIsloading(false)
    }
  };
  return (
      <div className="d-flex align-items-center justify-content-center signin-color">
      <div className="d-lg-flex flex-row-reverse align-items-center justify-content-center signin-main-div w-75 rounded-3">
      <div className="text-center p-1 d-block d-lg-none">
                <h3>Welcome Back Mouth Throne Online Market</h3>
                <p>Signin to Shop</p>
            </div>
        <form
          className="d-flex flex-column px-3 py-lg-5 gap-5 signin-form"
          onSubmit={handleSubmit}
        >
             <Link to="/" className="text-center">
            <img src={navLogo} alt="Website Logo" className="Nav-Logo" />
          </Link>
          
          <div className="signin-input-div">
            <input type="text" className="signin-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="" className="signin-label">Email</label>
          </div>
          
          <div className="signin-input-div">
            <input type="text" className="signin-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <label htmlFor="" className="signin-label">Password</label>
          </div>

          <Link to="/ForgetPassword" >Forget Password</Link>
         
          <button className="btn rounded p-2 fw-bold fs-6" style={{backgroundColor:"#ffc7a2"}}>{isloading ? <Spinner animation="border" variant="warning" />  : "SignIn"}</button>
          <p className="text-center">
            Don't have an account <Link to="/admin/signup">Signup</Link>
          </p>
        </form>
        <div className="signin-content d-none d-lg-block">
          {/* <img src={SignupImage} alt="" width="100%" height="100%" /> */}
          <h2>Welcome to Mouth Thrown Online Market</h2>
          <p>Signup to Get Started</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eos itaque qui incidunt nemo laboriosam accusamus vero corrupti
            distinctio sequi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminSignIn