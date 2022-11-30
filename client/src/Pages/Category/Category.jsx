import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Lists from "../../components/Lists/Lists";
import "./Category.scss";
const Category = () => {
  const proId = parseInt(useParams().id)
   const [maxPrice , setMaxPrice] = useState(1000)
   const [sort , setSort] = useState(null)
  return (
    <div className="category">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories : </h2>
          <div className="inputs">
            <input type="checkbox" value={1} id="1" />
            <label htmlFor="1">Jacket</label>
          </div>
          <div className="inputs">
            <input type="checkbox" value={2} id="2" />
            <label htmlFor="2">Shirt</label>
          </div>
          <div className="inputs">
            <input type="checkbox" value={3} id="3" />
            <label htmlFor="3">Shoes</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Price Range : </h2>
          <div className="inputs">
            <span>0</span>
            <input type="range" min={0} max={1000}  onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By : </h2>
          <div className="inputs">
            <input type="radio" name="price" id="asd" onChange={() => setSort("asd")} />
            <label htmlFor="asd">Price (Lowest First)</label>
          </div>
          <div className="inputs">
            <input type="radio" name="price" id="desc" onChange={() => setSort("desc")} />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://render.fineartamerica.com/images/rendered/search/t-shirt/23/2/images/artworkimages/medium/3/classic-video-games-jacob-zelazny-transparent.png?targetx=0&targety=0&imagewidth=430&imageheight=516&modelwidth=430&modelheight=575"
          alt=""
        />
        <Lists proId={proId} sort={sort} maxPrice={maxPrice} />
      </div>
    </div>
  );
};

export default Category;
