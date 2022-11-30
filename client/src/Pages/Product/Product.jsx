import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [number, setNumber] = useState(1)
  
  const data = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  

  return (
    <div className="product">
      <div className="left">
        <div className="image">
          <img src={data[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={data[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={data[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">price : $30.25</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          quidem dolor distinctio facilis, asperiores quod rerum, voluptatem
          quas, exercitationem itaque sed. Ducimus est velit architecto nemo
          alias laboriosam id rem.
        </p>
        <div className="quantity">
          <button onClick={() => setNumber(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          <span>{number}</span>
          <button onClick={() => setNumber(prev => prev + 1)}>+</button>
        </div>
        <button className="cartBtn">
         <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderOutlinedIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon />ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor : Polo</span>
          <span>Product Type : T-shirt</span>
          <span>Tag : T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
