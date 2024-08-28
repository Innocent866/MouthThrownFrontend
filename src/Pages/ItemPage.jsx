import React, { useContext, useEffect, useState } from "react";
import { items } from "../mockData/data";
import { ToastContainer, toast } from "react-toastify";
import CartContext from "../Context/CartContext";
import axios from "axios";
import { AppContext } from "../Context/context";

const ItemPage = () => {
  const { handleAddToCart } = useContext(CartContext);
  const [data, setData] = useState([]);
  const { cate, category } = useContext(AppContext)
  console.log(category);

  const notify = () => toast.success("An item has been added");

  

useEffect(()=>{
    const getItems = async ()=>{
        try {
            const res = await axios.get(`https://mouththrown.onrender.com/api/item/getproductsbycategory/${category}`)
            console.log(res);
            setData(res.data)
          } catch (error) {
            console.log(error);
          }
  }
  getItems()
},[cate])
  

  return (
    <div>
      <div className="mx-4 d-flex align-items-center flex-wrap justify-content-center justify-content-lg-between gap-4 my-5 ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={{ width: "20rem" }}
              className="d-flex flex-column gap-4 bg-white rounded p-2"
            >
              <div style={{ width: "100%", height: "40vh" }}>
                <img
                  src={item.images[0]}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <h2 className="fw-bold ">{item.title}</h2>
              <p>{item.description}</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => {
                  handleAddToCart(item);
                  notify();
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemPage;
