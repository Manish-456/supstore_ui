import React from 'react'
import {Link} from 'react-router-dom'
import './Categories.scss'
const Categories = () => {
  return (
    <div className='Categories'>
     <div className="col">
      <div className="row">
      <img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      <button>   <Link className='link' to='/category/1'>Sale</Link></button>
      </div>
      <div className="row">
       <img src="https://images.pexels.com/photos/5898553/pexels-photo-5898553.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
       <button>   <Link className='link' to='/category/1'>Women</Link></button>
      </div>
     </div>
     <div className="col">
      <div className="row">
       <img src="https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
       <button>   <Link className='link' to='/category/1'>New Season</Link></button>
      </div>
     </div>
     <div className="col col-l">
      <div className="row">
       <div className="col">
        <div className="row">
       <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <button>   <Link className='link' to='/category/1'>Accessories</Link></button>
        </div>
       </div>
       <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <button>   <Link className='link' to='/category/1'>Men</Link></button>
        </div>
       </div>
      </div>
      <div className="row">
       <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      <button>   <Link className='link' to='/category/1'>Shoes</Link></button>
      </div>
     </div>
      
    </div>
  )
}

export default Categories
