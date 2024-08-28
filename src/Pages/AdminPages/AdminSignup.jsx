import React, { useState } from "react";
import "../../style/Auth/Signup.css";
import { LiaFileUploadSolid } from "react-icons/lia";
import SignupImage from "../../assets/Home/Hero/Mouth Throne.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const AdminSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [verifypassword, setVerifypassword] = useState("");
  const [role, setRole] = useState("")
  const [image, setImage] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(phonenumber);
    console.log(password);
    console.log(verifypassword);
    console.log(image);

    try {
      const formData = new FormData();
      formData.append('firstname', firstname);
      formData.append('lastname', lastname);
      formData.append('email', email);
      formData.append('phonenumber', phonenumber);
      formData.append('role', role);
      formData.append('password', password);
      formData.append('verifypassword', verifypassword)
      formData.append('image', image);

      console.log(formData);

      const response = await axios.post('https://mouththrown.onrender.com/api/user/registration', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if(response.data.success === true){
        toast.success(response.data.message)
        navigate("/admin/signin")
      }

      console.log(response.data);
    } catch (error) {
      if(error.message === "Network Error"){
        toast.error("No internet connection")
      }
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="d-flex align-items-center justify-content-center signup-color">
      <div className="d-lg-flex align-items-center justify-content-center signup-main-div rounded-3">
        <div className="text-center p-1 d-block d-lg-none">
          <h3>Welcome to Our Online Store</h3>
          <p>Signup to Get Started</p>
        </div>
        <form className="d-flex flex-column px-3 py-lg-5 gap-4 signup-form" onSubmit={handleSubmit}>
          <div className="signup-input-div">
            <input type="text" className="signup-input" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <label htmlFor="" className="signup-label">Firstname</label>
          </div>
          <div className="signup-input-div">
            <input type="text" className="signup-input" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <label htmlFor="" className="signup-label">Lastname</label>
          </div>
          <div className="signup-input-div">
            <input type="email" className="signup-input" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="" className="signup-label">Email</label>
          </div>
          <div className="signup-input-div">
            <input type="tel" className="signup-input" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
            <label htmlFor="" className="signup-label">Phonenumber</label>
          </div>
          <div className="signup-input-div">
          <select
      className="signup-input"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="">-----</option>
      <option value="admin">admin</option>
      <option value="user">user</option>
      {/* Add more options as needed */}
    </select>
          </div>
          <div className="signup-input-div">
            <input type="password" className="signup-input" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="" className="signup-label">Password</label>
          </div>
          <div className="signup-input-div">
            <input type="password" className="signup-input" value={verifypassword} onChange={(e) => setVerifypassword(e.target.value)} />
            <label htmlFor="" className="signup-label">Verify Password</label>
          </div>
          <label htmlFor="file-upload" className="custom-file-upload">
            Upload Profile
            <LiaFileUploadSolid />
          </label>
          <input id="file-upload" type="file" onChange={handleImageChange} />
          <button type="submit" className="btn rounded p-2 fw-bold fs-6" style={{ backgroundColor: "#ffc7a2" }}>SignUp</button>
          <p className="text-center">
            Already have an account? <Link to="/admin/signin">Sign in</Link>
          </p>
        </form>
        <div className="signup-content d-none d-lg-block">
          <img src={SignupImage} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;
