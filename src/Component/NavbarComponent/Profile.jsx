import React from "react";
import '../../style/component/profile.css'
import { Link } from "react-router-dom";

const Profile = () => {
  const token = localStorage.getItem("token")
  return (
    <div className="profile-list-div">
      <ul className="profile-list">
        {token ? 
        <div>
          <button className="btn">SignIn</button>
        <li className="list-unstyled py-2 py-lg-3 ps-3 pe-3 pe-lg-5">Setting</li>
        <li className="list-unstyled py-2 py-lg-3 ps-3 pe-3 pe-lg-5">Profile</li>
        <li className="list-unstyled py-2 py-lg-3 ps-3 pe-3 pe-lg-5">Saved items</li>
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
