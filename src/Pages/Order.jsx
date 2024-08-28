import React, { useContext, useEffect } from "react";
import CartContext from "../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { cart, totalPrice,setCart } = useContext(CartContext);
  const recipient = JSON.parse(localStorage.getItem("recipient"));
  const address = JSON.parse(localStorage.getItem("address"));
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const orderFtn = {
    orderItems: cart,
    recipient,
    address,
    payment: "transfer",
    totalprice: totalPrice,
  };
  const order = async () => {
    const fetcher = await fetch("https://mouththrown.onrender.com/api/order/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderFtn),
    });
    const res = await fetcher.json();
    console.log(res);
    if (res.success === true) {
      toast.success(res.message);
      navigate("/");
      localStorage.removeItem('recipient')
      localStorage.removeItem('address')
      setCart([])

      return;
    }
    if (res.success === false) {
      toast.error(res.message);
    }
  };
 
  return (
    <>
      <main className="container my-5 border">
        <h2>Order page</h2>
        {cart.length > 0 ? (
          <>
            {cart.map((cartItx) => {
              const {
                _id,
                image,
                title,
                description,
                price,
                quantity,
                category,
              } = cartItx;
              return (
                <div key={_id}>
                  <h2> {title} </h2>
                  <div style={{width:"20%", height:"20%"}}>
                  <img src={image} alt="" width="100%"/>
                  </div>
                  <p> {description} </p>
                  <p> {price} </p>
                  <p> {quantity} </p>
                  <p> {category} </p>
                </div>
              );
            })}
            <h2> {totalPrice} </h2>
            <hr />
            {/* recipient */}
            {recipient === null && address === null ?   <div> <h2> create recipient details and address details first to place an order </h2> </div>  : <div>  <h2> Recipient details </h2>
            <p>email: {recipient.email}</p>
            <p>firstname: {recipient.firstname} </p>
            <p>lastname: {recipient.lastname}</p>
            <p>phonenumber: {recipient.phonenumber}</p>
            <hr />
            {/* address */}
            <h2> Recipient address </h2>
            <p>city: {address.city}</p>
            <p>street: {address.street} </p>
            <p>housenumber: {address.housenumber}</p>
            {/* <p>phonenumber: {recipient.phonenumber}</p> */}
            <button className="btn btn-success w-100" onClick={order}>
              place order
            </button> </div>   }
           
          </>
        ) : (
          <>
            <h2>no order </h2>
          </>
        )}
      </main>
    </>
  );
};

export default Order;
