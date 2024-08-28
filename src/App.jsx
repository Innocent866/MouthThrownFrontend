import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import NavBar from "./layout/Navbar";
import HomePage from "./Pages/HomePage";
import SingleProductPage from "./Pages/SingleProductPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import Layout from "./layout/Layout";
import AppProvider from "./Context/context";
import { CartProvider } from "./Context/CartContext";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SignInPage";
import ForgetPassword from "./Pages/ForgetPassword";
import Notfound from "./Pages/Notfound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Private from "./Component/Private";
import Order from "./Pages/Order";
import LayoutNotFound from "./layout/LayoutNotFound";
import ItemPage from "./Pages/ItemPage";
import AdminSignIn from "./Pages/AdminPages/AdminSignin";
import AdminSignUp from "./Pages/AdminPages/AdminSignup";
import Adminprivate from "./Component/Admin/Adminprivate";
import AdminDashboard from "./Pages/AdminPages/AdminDashboard";
import AdminProduct from "./Pages/AdminPages/AdminProduct";
import AdminUsers from "./Pages/AdminPages/AdminUsers";
import AdminOrder from "./Pages/AdminPages/AdminOrder";
import AdminProductAdd from "./Pages/AdminPages/AdminProductAdd";
import AdminOrderAddress from "./Pages/AdminPages/AdminOrderAddress";
import AdminOrderUserOrder from "./Pages/AdminPages/AdminOrderUserOrder";

const App = () => {
  return (
    <div>
      <AppProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<LayoutNotFound/>} >
              <Route path="*" element={<Notfound />} />
              </Route>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/product/:id" element={<SingleProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/item" element={<ItemPage />} />
                <Route element={<Private />}>
                  <Route path="/Order" element={<Order/>}/>
                </Route>
              </Route>

               {/* Admin Routers */}
               <Route path="/admin/signup" element={<AdminSignUp/>}/>
               <Route path="/admin/signin" element={<AdminSignIn/>}/>

               <Route element={<Adminprivate/>}>
               <Route path="/admin/product/add" element={<AdminProductAdd/>}/>
               <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
               <Route path="/admin/orders" element={<AdminOrder/>}/>
               <Route path="/admin/orders/address/:orderId" element={<AdminOrderAddress/>}/>
               <Route path="/admin/orders/order/:orderId" element={<AdminOrderUserOrder/>}/>
               <Route path="/admin/users" element={<AdminUsers/>}/>
               <Route path="/admin/products" element={<AdminProduct/>}/>

               </Route>
            </Routes>
          </BrowserRouter>
          <ToastContainer />
        </CartProvider>
      </AppProvider>
    </div>
  );
};

export default App;
