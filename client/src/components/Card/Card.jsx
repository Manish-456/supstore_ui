import React from 'react'
import './Card.scss'
import {Link} from 'react-router-dom'
const Card = ({item}) => {

  return (
   <Link className='link' to={`/product/${item.id}`}>
    <div className='Card'>
      
    <div className="imgContainer">
      {item.isNew && <span>New Season</span>}
      <img src={item.image} className="primary" alt="" />
      <img src={item.image2} className="secondary" alt="" />
    </div>
    <h2>{item.title}</h2>
    <div className="PriceContainer">
   <h3 className='oldPrice'>${item.oldprice}</h3>
   <h3 className='newPrice'>${item.newPrice}</h3>
    </div>
     </div>
   </Link>
  )
}

export default Card
