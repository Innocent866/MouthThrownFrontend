import React, { useContext } from "react";
import "../../style/Home/carousels.css";
import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../../assets/Home/Hero/first slide.jpeg";
import secondSlide from "../../assets/Home/Hero/Six slide.jpg";
import thirdSlide from "../../assets/Home/Hero/fifth Slide.webp";
import forthSlide from "../../assets/Home/Hero/forth slide.jpeg";
import { items } from "../../mockData/data";
import CartContext from "../../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import HomeItems from "./HomeItems";
import Appliances from "./Appliances";
import Fashion from "./Fashion";

const Hero = () => {
  const { handleAddToCart } = useContext(CartContext);

  const notify = () => toast.success("An item has been added");

  return (
    <div className="position-relative">
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
      <div className="d-flex flex-column gap-3 py-3">
      <Fashion/>
      <HomeItems />
      <Appliances />
      </div>
      
    </div>
  );
};

export default Hero;
