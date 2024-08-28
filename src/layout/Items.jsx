import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/layout/items.css"
import { AppContext } from "../Context/context";
import ItemPage from "../Pages/ItemPage";

const Items = () => {
    const { setProfile, profile, cate } = useContext(AppContext);

    

    function doSth(){
      if(profile === true){
        setProfile(false)
      }
    }

  const itemsName = [
    { name: "Appliances", to: "/item" },
    { name: "computer", to: "/item" },
    { name: "Phone", to: "/item" },
    { name: "Fashion", to: "/item" },
    { name: "Gadget", to: "/item" },
    { name: "Baby Product", to: "/item", style:true },
    { name: "Books", to: "/item" },
    { name: "Electronics", to: "/item" },
    { name: "Kechine Items", to: "/item", style:true },
    { name: "Gaming", to: "/item" }
  ];

  return (
    <div onMouseOver={doSth} className="px-5 d-flex gap-3 justify-content-lg-center" style={{backgroundColor:"#EA9962",overflow:"auto" }}>
      {itemsName.map((items) => (
        <Link to={items.to} className="items-Link" onClick={()=>cate(items.name)} key={items.name}>
          <p className={items.style ? "sytle-items" :"py-3 px-3"}>{items.name}</p>
        </Link>
        
      ))}
    </div>
  );
};

export default Items;
