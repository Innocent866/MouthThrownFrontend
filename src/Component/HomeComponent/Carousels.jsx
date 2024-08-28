import React, { useContext } from "react";
import "../../style/Home/carousels.css";
import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../../assets/Home/Hero/first slide.jpeg";
import secondSlide from "../../assets/Home/Hero/Six slide.jpg";
import thirdSlide from "../../assets/Home/Hero/fifth Slide.webp";
import forthSlide from "../../assets/Home/Hero/forth slide.jpeg";
import { items } from "../../mockData/data";
import CartContext from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';

const Hero = () => {
  const { handleAddToCart } = useContext(CartContext)

  const notify = ()=>toast.success("An item has been added")

  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item className="slide-div">
            <img className="main-Slide" src={firstSlide} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="slide-div">
            <img className="main-Slide" src={secondSlide} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="slide-div">
            <img className="main-Slide" src={thirdSlide} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item className="slide-div">
            <img className="main-Slide" src={forthSlide} alt="Forth slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="mx-4 d-flex align-items-center flex-wrap justify-content-center justify-content-lg-between gap-4 my-5 ">
        {items.map((item, index)=>{
          return(
          <div key={index} style={{width:"20rem"}} className="d-flex flex-column gap-4 bg-white rounded p-2" >
           <div style={{width:"100%", height:"40vh"}}>
            <img src={item.image} alt="" style={{width:"100%", height:"100%", borderRadius:"10px"}} />
            </div>
            <h2 className="fw-bold ">{item.title}</h2>
            <p>{item.description}</p>
            <button className="btn btn-primary w-100" onClick={()=>{handleAddToCart(item); notify()}}>Add to Cart</button>
          </div>
          
          )
        })}
      </div>
      <h2 className="bg-white m-0 p-3">Feature Product</h2>
      <div className="feature">
        
        {items.map((item, index)=>{
          return(
          <div key={index} className="feature-div">
           <div className="feature-div-image">
            <img src={item.image} alt="" style={{width:"100%", height:"100%"}} />
            </div>
            <p className="fw-bold p-2">{item.title}</p>
            </div>
          
          )
        })}
      </div>
      
      <div className="d-flex gap-4 p-2  my-2" style={{overflowX: "hidden"}}>
        {items.map((item, index)=>{
          return(
          <div key={index} className="m-1 bg-white p-3 feature-div">
           <div className="feature-div-image">
            <img src={item.image} alt="" style={{width:"100%", height:"100%"}} />
            </div>
            <p className="fw-bold p-2">{item.title}</p>
            </div>
          
          )
        })}
      </div>
      <div className="feature">
        {items.map((item, index)=>{
          return(
          <div key={index} className="feature-div">
           <div className="feature-div-image">
            <img src={item.image} alt="" style={{width:"100%", height:"100%"}} />
            </div>
            <p className="fw-bold p-2">{item.title}</p>
            </div>
          
          )
        })}
      </div>
      <div className="feature">
        {items.map((item, index)=>{
          return(
          <div key={index} className="feature-div">
           <div className="feature-div-image">
            <img src={item.image} alt="" style={{width:"100%", height:"100%"}} />
            </div>
            <p className="fw-bold p-2">{item.title}</p>
            </div>
          
          )
        })}
      </div>
    </div>
  );
};

export default Hero;
