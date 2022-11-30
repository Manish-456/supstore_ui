import React, { useState } from "react";
import './Navbar.scss'
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
        
          <div className="item">
          <img className="logo" src="/Assets/Nepal.png" alt="nepal" />
          <KeyboardArrowDownIcon />
          </div>
          
          <div className="item">
            <span>NRS</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="items">
            <Link className="link" to="/category/1">Men</Link>
          </div>
          <div className="items">
            <Link className="link" to="/category/2">Women</Link>
          </div>
          <div className="items">
            <Link className="link" to="/category/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">SupStore</Link>
        </div>
        <div className="right">
          <div className="items">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="items">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="items">
            <Link className="link" to="/">Stores</Link>
          </div>
          <div className="items">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="icons">
            <SearchRoundedIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcons" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className="badge">0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
