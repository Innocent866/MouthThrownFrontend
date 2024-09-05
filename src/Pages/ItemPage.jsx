import React, { useContext, useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { AppContext } from "../Context/context";
import "../style/component/Itempage.css";

const ItemPage = () => {
  const { handleAddToCart, quantity, handleIncrease, handleDecrease } = useContext(CartContext);
  const { cate, category } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isloading, setIsloading] = useState(false)

  const notify = () => toast.success("An item has been added");

  useEffect(() => {
    const getItems = async () => {
      try {
        setIsloading(true)
        const res = await axios.get(
          `https://mouththrown.onrender.com/api/item/getproductsbycategory/${category}`
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }finally{
        setIsloading(false)
      }
    };
    getItems();
  }, [cate, category]);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "#F7E0CE" }}>
      <Container className="py-5 position-relative">
        <div className="position-absolute end-50 top-50">
        {isloading && <Spinner animation="grow" variant="secondary" />}
        </div>
        <Row>
          {data.length === 0 ? (
            <Col className="text-center">
              <h3>No items available</h3>
            </Col>
          ) : (
            (showAll ? data : data.slice(0, 9)).map((cartItem) => {
              const { quantity, name, price, _id, images } = cartItem;
              return (
                <Col xs={12} md={6} lg={4} key={_id} className="mb-4">
                  <div className="cart-item p-3 border rounded text-decoration-none d-flex flex-column">
                  <Link to={`/single/${_id}`} >
                    <div className="cart-item-image mb-3">
                      <img
                        src={images[0]} // Assuming images is an array with at least one image
                        alt={name}
                        className="img-fluid"
                        style={{width:"100%", height: "200px", objectFit: "cover" }}
                      />
                    </div>
                    </Link>
                    <div className="cart-item-details d-flex flex-column flex-grow-1">
                      <h4 className="text-danger">{name}</h4>
                      <div className="d-flex align-items-center gap-3 mt-2 mb-3">
                        <Button
                          variant="outline-primary"
                          onClick={() => handleIncrease(cartItem)}
                        >
                          +
                        </Button>
                        <span className="mx-3">{quantity}</span>
                        <Button
                          variant="outline-primary"
                          onClick={() => handleDecrease(cartItem)}
                        >
                          -
                        </Button>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-muted"># {price}</span>
                        
                      </div>
                    </div>
                    <Button
                      className="mt-2 w-100"
                      variant="primary"
                      onClick={() => {
                        handleAddToCart(cartItem);
                        notify();
                      }}
                    >
                      Add to Cart
                    </Button>
                  
                </div>
                </Col>
              );
            })
          )}
        </Row>
        {data.length > 5 && (
          <Link
            to="#"
            onClick={toggleShowAll}
            className="fs-5 text-center d-block mt-4"
          >
            {showAll ? "Show Less Items" : "See All Items"}
          </Link>
        )}
      </Container>
      <ToastContainer />
    </div>
  );
};

export default ItemPage;
