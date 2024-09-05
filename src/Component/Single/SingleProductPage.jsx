import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import "../../style/pages/Single.css";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";

const SingleProductPage = () => {
  const { id } = useParams();
  const { handleAddToCart } = useContext(CartContext);
  const [data, setData] = useState({ images: [] });
  const [image, setImage] = useState("");
  const [isloading, setIsloading] = useState(false)

  const notify = () => toast.success("An item has been added");

  const handleFetch = async () => {
    try {
      setIsloading(true)
      const res = await axios.get(
        `https://mouththrown.onrender.com/api/item/getproductbyid/${id}`
      );
      setData(res.data);
      setImage(res.data.images[0]); // Set the initial image to the first in the array
    } catch (error) {
      console.log(error);
    }finally{
      setIsloading(false)
    }
  };

  useEffect(() => {
    handleFetch();
  }, [id]);

  return (
    <div>
      <div className="position-relative container d-lg-flex gap-5 py-4">
      <div className="position-absolute end-50 top-50">
        {isloading && <Spinner animation="grow" variant="secondary" />}
        </div>
        <div className="single-main-div">
          {image && (
            <div className="selected-image-container">
              <img
                src={image}
                alt="Selected Product"
                className="selected-image"
              />
            </div>
          )}
          <div className="single-main-image-div">
            {data.images.length > 0 ? (
              data.images.map((item, index) => (
                <div
                  className="single-image-div"
                  key={index + 1}
                  onClick={() => setImage(item)} // Set clicked image as the main image
                  style={{ cursor: "pointer" }} // Add a pointer cursor
                >
                  <img src={item} alt={`Product image ${index + 1}`} />
                </div>
              ))
            ) : (
              <p>No images available</p> // Fallback if no images are available
            )}
          </div>
        </div>
        <div>
          <h1>{data.description}</h1>
          <p>{data.name}</p>
          <p>Price: # {data.price}</p>
        </div>
      </div>

      <button
        className="btn w-100 text-decoration-none"
        onClick={() => {
          handleAddToCart(data);
          notify();
        }}
        style={{ backgroundColor: "#EA9962" }}
      >
        Add ti cart
      </button>
    </div>
  );
};

export default SingleProductPage;
