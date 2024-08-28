import React from 'react'
import FooterList from '../Component/FootetrComponent/FooterList'
import footerLogo from "../assets/images/mouth_thrown_E-commerce_Logo-removebg-preview.png";
import "../style/layout/Footer/footer.css"
import SocialMedia from '../Component/SocialMedia';

const Footer = () => {
  return (
   <div style={{backgroundColor:"#EA9962", color:"#F7E0CE"}}>
     <div className='container'>
      <img src={footerLogo} alt="" className='footer-logo'/>
      <hr />
      <FooterList/>
      
    </div>
    <SocialMedia/>
   </div>
  )
}

export default Footer