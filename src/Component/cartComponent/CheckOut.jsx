import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import CartContext from "../../Context/CartContext";
import { RiDeleteBin7Fill } from "react-icons/ri";
import MyVerticallyCenteredModal from "./ReciepientAuthModal.jsx";
import ReciepientAddressModal from "./ReciepientAddressModal.jsx";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const CheckOut = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalAddress, setModalAddress] = useState(false);
  const { cart, removeItem, totalPrice, handleIncrease, handleDecrease } =
    useContext(CartContext);
  const recipient = JSON.parse(localStorage.getItem("recipient"));
  const address = JSON.parse(localStorage.getItem("address"));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    document.title = "Check out | Page";
  }, []);

  return (
    <main className="py-5 row justify-content-between">
      <section className="col-lg-6 rounded p-4 h-50" style={{ border: "3px solid #EA9962"}}>
        <h2>Enter your details and place order</h2>
        <p className="mt-4">
          Review / Add address and fulfill payments to complete your purchase
        </p>
        <hr />
        <div>
          <h5>Recipient information</h5>
          <Button
            variant=""
            className="bg-dark outline-none text-light w-50"
            onClick={() => setModalShow(true)}
          >
            Add Recipient
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <hr />
        {/* Delivery Address */}
        <div>
          <h5>Delivery Address</h5>
          <Button
            variant=""
            className="bg-dark outline-none text-light w-50"
            onClick={() => setModalAddress(true)}
          >
            Add Delivery Address
          </Button>

          <ReciepientAddressModal
            show={modalAddress}
            onHide={() => setModalAddress(false)}
          />
          <hr />
          {recipient && address ? (
            <Link className="btn w-100 text-decoration-none" style={{backgroundColor:"#EA9962"}} to="/Order">
              Place Your Order
            </Link>
          ) : (
            <Link
              className="btn w-100 text-decoration-none"
              style={{backgroundColor:"#EA9962"}}
              onClick={() => toast.error('Please fill in address and recipient details first.')}
            >
              Place Your Order
            </Link>
          )}
        </div>
      </section>
      <section className="col-lg-5 rounded p-4" style={{ border: "3px solid #EA9962"}}>
        <h5>Your order from</h5>
        {cart.length === 0 ? (
          <h2>No items</h2>
        ) : (
          cart.map((cartItem) => {
            const { quantity, title, price, id, images } = cartItem;
    
            return (
              <div
                className="row mb-5 justify-content-between align-items-center"
                key={id}
              >
                <div className="col-5">
                  <div style={{ width: "100%", height: "20vh" }}>
                    <img
                      src={images[0]} // Ensure images is an array
                      alt={title}
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }} // Ensure image covers the container
                    />
                  </div>
                  <h1 className="fs-3 text-danger">{title}</h1>
                  <div
                    className="w-100 d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: "#EA9962", padding: "0.5rem" }}
                  >
                    <button
                      className="btn btn-lg"
                      onClick={() => handleIncrease(cartItem)}
                    >
                      +
                    </button>
                    <span>{quantity}</span>
                    <button
                      className="btn btn-lg"
                      onClick={() => handleDecrease(cartItem)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="col-4 d-flex gap-3 align-items-center">
                  <span
                    role="button"
                    onClick={() => removeItem(id)}
                    style={{ cursor: "pointer" }}
                  >
                    <RiDeleteBin7Fill />
                  </span>
                  <p># {price}</p>
                </div>
              </div>
            );
          })
        )}
        {totalPrice > 0 && (
          <div className="d-flex justify-content-between">
            <p>Items Subtotal</p>
            <p># {totalPrice}</p>
          </div>
        )}
        <hr />
      </section>
    </main>
  );
};

export default CheckOut;
