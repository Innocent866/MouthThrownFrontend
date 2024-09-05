import React, { useState } from "react";
import "../../style/Auth/Signup.css";
import { LiaFileUploadSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import AdminSidenav from "./AdminSidenav";

const AdminProductAdd = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('brand', brand);
      formData.append('stock', stock);

      if (images) {
        for (let i = 0; i < images.length; i++) {
          formData.append('images', images[i]);
        }
      }

      const response = await axios.post('https://mouththrown.onrender.com/api/item/createProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/admin/products");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      if (error.message === "Network Error") {
        toast.error("No internet connection");
      } else if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  return (
    <div className="d-flex">
      <AdminSidenav />
      <div className="d-flex align-items-center justify-content-center signup-color w-100">
        <form className="d-flex flex-column px-3 py-lg-5 gap-4 signup-form" onSubmit={handleSubmit}>
          <div className="signup-input-div">
            <input
              type="text"
              className="signup-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="signup-label">Name</label>
          </div>
          <div className="signup-input-div">
            <input
              type="text"
              className="signup-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label className="signup-label">Description</label>
          </div>
          <div className="signup-input-div">
            <input
              type="text"
              className="signup-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label className="signup-label">Price</label>
          </div>
          <div className="signup-input-div">
            <select
              className="signup-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>-----</option>
              <option value="Appliances">Appliances</option>
              <option value="computer">computer</option>
              <option value="Phone">Phone</option>
              <option value="Fashion">Fashion</option>
              <option value="Gadget">Gadget</option>
              <option value="Baby Product">Baby Product</option>
              <option value="Books">Books</option>
              <option value="Electronics">Electronics</option>
              <option value="Kechine Items">Kechine Items</option>
              <option value="Gaming">Gaming</option>
              {/* Add more options as needed */}
            </select>
            <label className="signup-label">Category</label>
          </div>
          <div className="signup-input-div">
            <input
              type="tel"
              className="signup-input"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
            <label className="signup-label">Brand</label>
          </div>
          <div className="signup-input-div">
            <input
              type="tel"
              className="signup-input"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
            <label className="signup-label">Stock</label>
          </div>
          <label htmlFor="file-upload" className="custom-file-upload">
            Upload Product Image(s)
            <LiaFileUploadSolid />
          </label>
          <input id="file-upload" type="file" multiple onChange={handleImageChange} />
          <button type="submit" className="btn rounded p-2 fw-bold fs-6" style={{ backgroundColor: "#ffc7a2" }}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProductAdd;
