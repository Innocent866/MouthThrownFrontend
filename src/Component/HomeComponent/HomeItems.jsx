import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import React, { useContext, useEffect, useState } from 'react';
import "../../style/Home/Homeitem.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/context';

const HomeItems = () => {
    const { cate } = useContext(AppContext);
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(false)
    
    const getData = async () => {
        try {
            setIsloading(true)
            const res = await axios.get("https://mouththrown.onrender.com/api/item/getproductsbycategory/Electronics");
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.log(error);
        }finally{
            setIsloading(false)
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Function to scroll left
    const scrollLeft = () => {
        document.getElementById('scroll-container').scrollBy({ left: -700, behavior: 'smooth' });
    };

    // Function to scroll right
    const scrollRight = () => {
        document.getElementById('scroll-container').scrollBy({ left: 700, behavior: 'smooth' });
    };

    return (
        <div className='container'>
            <div className="scroll-container-wrapper">
            <div className="position-absolute end-50 top-50">
        {isloading && <Spinner animation="grow" variant="secondary" />}
        </div>
                
                <div className="scroll-arrow left" onClick={scrollLeft}>
                    <IoIosArrowBack/>
                </div>
                <h2 className='p-3'>Top Sold Electronics</h2>
                <div className="scroll-container" id="scroll-container">
                    {data.map((item, index) => (
                        
                        <div key={index} className="home-items-electronics-div">
                            <Link to="/item" onClick={()=>cate("Electronics")}>
                            <div className="home-items-electronics-image">
                                <img src={item.images[0]} alt="" />
                            </div>
                            </Link>
                        </div>
                       
                    )).slice(0, 10)}
                </div>
                <div className="scroll-arrow right" onClick={scrollRight}>
                    <IoIosArrowForward/>
                </div>
            </div>
        </div>
    );
}

export default HomeItems;
