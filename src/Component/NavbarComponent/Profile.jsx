import React from "react";
import '../../style/component/profile.css'
import { Link } from "react-router-dom";

const Profile = () => {
  const token = localStorage.getItem("token")

  const handleLogout = ()=>{
    localStorage.removeItem("token")
    window.location.reload()
  }
  return (
    <div className="profile-list-div">
      <ul className="profile-list">
        {token ? 
        <div>
        <li className="list-unstyled py-2 py-lg-3 ps-3 pe-3 pe-lg-5">Setting</li>
        <li className="list-unstyled py-2 py-lg-3 ps-3 pe-3 pe-lg-5">Profile</li>
        <li onClick={()=>handleLogout()} className="list-unstyled py-2 py-lg-3 px-3 pe-3 pe-lg-5">LogOut</li>
        </div>
        :
          <div>
        
        <li className="list-unstyled py-2 py-lg-3 ps-3 pe-3 pe-lg-5"><Link to="/signup">SignUp</Link></li>
        <li className="list-unstyled py-2 py-lg-3 ps-3 pe-3 pe-lg-5"><Link to="/signin">SignIn</Link></li>
        </div>
}
      </ul>
    </div>
  );
};

export default Profile;
