import React from 'react'
import '../../style/layout/Footer/footerList.css'
// import footerLogo from "../../assets/images/mouth_thrown_E-commerce_Logo-removebg-preview.png";


const FooterList = () => {
  return (
    <div>
        <div className='row gap-lg-5 gap-3 justify-content-md-center justify-content-lg-between'>
            
            <ul className='col-lg-2 col-md-4 text-center text-lg-start'>
                <h2>Products</h2>
                <li className="list-unstyled" >Electronic</li>
                <li className="list-unstyled" >Computers</li>
                <li className="list-unstyled" >Phones</li>
                <li className="list-unstyled" >Fashion</li>
                <li className="list-unstyled" >Appliances</li>
            </ul>
            <ul className='col-lg-2 col-md-4 text-center text-lg-start'>
                <h2>Privacy</h2>
                <li className="list-unstyled" >Privacy Policy</li>
                <li className="list-unstyled" >Terms and Condition</li>
                <li className="list-unstyled" >Services</li>
                
            </ul>
            <ul className='col-lg-2 col-md-4 text-center text-lg-start'>
                <h2>Need Help</h2>
                <li className="list-unstyled" >+234 9138095613</li>
                <li className="list-unstyled" >igoldima@gmail.com</li>
            </ul>
            <ul className='col-lg-2 col-md-4 text-center text-lg-start'>
                <h2>Brand</h2>
                <li className="list-unstyled" >Apple</li>
                <li className="list-unstyled" >Samsung</li>
                <li className="list-unstyled" >Android</li>
                <li className="list-unstyled" >Samsung</li>
                <li className="list-unstyled" >Nokia</li>
                <li className="list-unstyled" >Xiaomi</li>
            </ul>
        </div>
    </div>
  )
}

export default FooterList