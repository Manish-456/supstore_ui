import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
const Cart = () => {
 const data =  [ {
  id: 2,
  isNew : true,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  oldprice: 22.3,
   newPrice : 30.03,
  description:
    "Slim-fitting style, contrast raglan long sleeve",
  category: "men's clothing",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
   image2 : "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600",

 },
 {
  id: 3,
  title: "Mens Cotton Jacket",
  oldprice: 55.99,
   newPrice : 50.25,
  description:
    "great outerwear jackets for Spring/Autumn/Winter",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  image2 : "https://images.pexels.com/photos/11446276/pexels-photo-11446276.jpeg?auto=compress&cs=tinysrgb&w=1600",
  rating: {
    rate: 4.7,
    count: 500,
  },
  isNew : true,
},

]
  return (
    <div className='cart'>
    <h1>Products in your Cart</h1>
   {data?.map((item) => {
    return <div key={item.id} className="items">
     <img src={item.image} alt="" />
     <div className="details">
      <h1 className="title">{item.title}</h1>
      <p>{item.description.substring(0, 100)}...</p>
      <div className="price">1 x ${item.newPrice}</div>
     </div>
     <DeleteOutlinedIcon className='delete' />
    </div>
   })}

   <div className="total"><span>SUBTOTAL</span>
    <span className='amount'>$456</span>

   </div>
   <button>PROCEED TO CHECKOUT</button>
   <span className='reset'>Reset Cart</span>
    </div> 
  )
}

export default Cart
