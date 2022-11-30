import React from 'react'
import './Contact.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
       <span>BE IN TOUCH WITH US!</span>
       <div className="email">
        <input type="email" placeholder='Enter your email...' />
        <button>Join Us</button>
       </div>
       <div className="icons">
      <FacebookOutlinedIcon/>
      <GoogleIcon />
      <TwitterIcon />
      <InstagramIcon />
         
       </div>
      </div>
    </div>
  )
}

export default Contact
