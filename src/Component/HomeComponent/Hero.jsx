import React from 'react'
import Carousels from './Carousels'
import secondSlide from "../../assets/Home/Hero/Six slide.jpg";
import HomeItems from './HomeItems';
import Appliances from './Appliances';

const Hero = () => {
  return (
    <div>
      <Carousels/>
      <HomeItems/>
      <Appliances/>
    </div>
  )
}

export default Hero