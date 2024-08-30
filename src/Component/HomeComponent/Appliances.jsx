import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import "../../style/Home/Appliances.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/context';

const Appliances = () => {
    const { cate } = useContext(AppContext);
    const [data, setData] = useState([]);
    
    const getData = async () => {
        try {
            const res = await axios.get("https://mouththrown.onrender.com/api/item/getproductsbycategory/Electronics");
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Function to scroll left
    const scrollLeft = () => {
        document.getElementById('scroll-container-Appliances').scrollBy({ left: -700, behavior: 'smooth' });
    };

    // Function to scroll right
    const scrollRight = () => {
        document.getElementById('scroll-container-Appliances').scrollBy({ left: 700, behavior: 'smooth' });
    };

    return (
        <div className='container'>
            <div className="scroll-container-wrapper-Appliances">
                
                <div className="scroll-arrow-Appliances left" onClick={scrollLeft}>
                    <IoIosArrowBack/>
                </div>
                <h2 className='p-3'>Top Sold Appliances</h2>
                <div className="scroll-container-Appliances" id="scroll-container-Appliances">
                    {data.map((item, index) => (
                        
                        <div key={index} className="home-items-Appliances-div">
                            <Link to="/item" onClick={()=>cate("Appliances")}>
                            <div className="home-items-Appliances-image">
                                <img src={item.images[0]} alt="" />
                            </div>
                            </Link>
                        </div>
                       
                    )).slice(11,20)}
                </div>
                <div className="scroll-arrow-Appliances right" onClick={scrollRight}>
                    <IoIosArrowForward/>
                </div>
            </div>
        </div>
    );
}

export default Appliances;
