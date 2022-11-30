import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>

      <div className="top">
        <div className="item">
        <h1>Category</h1>
        <span>Men</span>
        <span>Women</span>
        <span>Children</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
        </div>
        <div className="item">
         <h1>Links</h1>
         <span>FAQ</span>
         <span>Pages</span>
         <span>Stores</span>
         <span>Compare</span>
         <span>Blog</span>
         <span>Cookies</span>
        </div>
        <div className="item">
         <h1>About</h1>
         <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ipsum numquam quibusdam facere modi! Hic similique enim odio delectus illo. Totam asperiores neque laborum voluptate adipisci, possimus labore nam eum?</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus facilis odio consequatur dolore optio laboriosam enim? Sunt repellendus debitis optio nam iusto laboriosam aliquam neque? Ut iste eveniet aliquid?</span>
        </div>
      </div>
      
      <div className="bottom">
     <div className="left">
      <span className='logo'>SupStore</span>
      <span className='copyRight'>Ⓒ copyright 2022-2025 . All Rights Reserved!</span>
     </div>
     <div className="right">
      <img src="/Assets/payment.jpg" alt="" />
     </div>
     </div></div>
  
  )
}

export default Footer
