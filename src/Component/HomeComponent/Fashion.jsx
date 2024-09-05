import React, { useContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../../style/Home/Fashion.css";
import { AppContext } from "../../Context/context";
import axios from "axios";
import { Link } from "react-router-dom";

const Fashion = () => {
  const { cate } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const getData = async () => {
    try {
      setIsloading(true);
      const res = await axios.get(
        "https://mouththrown.onrender.com/api/item/getproductsbycategory/Electronics"
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container d-lg-flex gap-3 align-items-center">
      {/* Fashion for watch */}
      <div className="bg-light">
        <h2 className="p-3">Watch</h2>

        <div className="Fashion-watch">
          {data.map((item, index) => (
            <Link
              key={index}
              className="Fashion-watch-div"
              to={`/single/${item._id}`}
            >
              <div className="position-absolute end-50 top-50">
                {isloading && <Spinner animation="grow" variant="secondary" />}
              </div>
              <div className="fashion-watch-image">
                <img src={item.images[0]} alt="" />
              </div>
              <p className="pb-3">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Fashion for Men */}
      <div className="bg-light">
        <h2 className="p-3">Men</h2>
        <div className="Fashion-men">
          {data.slice(20, 24).map((item, index) => (
            <Link
              key={index}
              className="Fashion-watch-div"
              to={`/single/${item._id}`}
            >
              <div className="fashion-men-image">
                <img src={item.images[0]} alt="" />
              </div>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Fashion for Women */}
      <div className="bg-light">
        <h2 className="p-3">Women</h2>
        <div className="Fashion-women">
          {data.slice(20, 24).map((item, index) => (
            <Link
              key={index}
              className="Fashion-watch-div"
              to={`/single/${item._id}`}
            >
              <div className="fashion-women-image">
                <img src={item.images[0]} alt="" />
              </div>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Fashion for shoe */}
      <div className="bg-light">
        <h2 className="p-3">Shoes</h2>
        <div className="Fashion-shoe">
          {data.slice(20, 24).map((item, index) => (
            <Link
              key={index}
              className="Fashion-watch-div"
              to={`/single/${item._id}`}
            >
              <div className="fashion-shoe-image">
                <img src={item.images[0]} alt="" />
              </div>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fashion;
