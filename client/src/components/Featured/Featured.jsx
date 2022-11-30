import React from "react";
import Card from "../Card/Card";
import "./Featured.scss";
const Featured = ({ type }) => {
  const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      oldprice: 109.95,
      newPrice : 130,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      image2 : "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: {
        rate: 3.9,
        count: 120,
      },
      isNew : true
    },
    {
      id: 2,
      isNew : true,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      oldprice: 22.3,
       newPrice : 30.03,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
       image2 : "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600",
        rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      oldprice: 55.99,
       newPrice : 50.25,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      image2 : "https://images.pexels.com/photos/11446276/pexels-photo-11446276.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: {
        rate: 4.7,
        count: 500,
      },
      isNew : true,
    },
  
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      oldprice: 695,
      newPrice : 500,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      image2 : "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1600"
     
    },
  ];
  return (
    <div className="featured">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius fugiat
          ipsam hic doloremque soluta. Autem dolorem quae, deleniti maxime nihil
          temporibus ipsam fuga, aspernatur possimus dolor qui quibusdam unde,
          labore cupiditate eum consequatur saepe. Hic iure nobis odit quaerat
          dolorum?
        </p>
      </div>
      <div className="bottom">
     {data.map((item) => {
      return <Card key={item.id} item={item} />
     })}

      </div>
    </div>
  );
};

export default Featured;
