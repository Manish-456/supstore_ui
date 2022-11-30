import React, { useState } from 'react'
import './Slider.scss'
import  EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import  WestOutlinedIcon from '@mui/icons-material/WestOutlined'
const Slider = () => {
 const [currentSlide , setCurrentSlide] = useState(0)
 const img = [
  "https://pixels.com/images/overview/apparel/mensTshirts002.jpg",
 "https://images.fineartamerica.com/public/images/overview/apparel/womensTshirts002.jpg",
 "https://images.fineartamerica.com/public/images/overview/apparel/sweatshirts002.jpg"

 ]
const prevSlide = () => {
 setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
}

const nextSlide = () => {
 setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
 }



  return (
    <div className='slider'>
       <div className="container" style={{
        transform : `translateX(-${currentSlide * 100}vw)`
       }}>
        <img src={img[0]} alt="" />
        <img src={img[1]} alt="" />
        <img src={img[2]} alt="" />
       </div>
       <div className="icons">
        <div className="icon" onClick={prevSlide}><WestOutlinedIcon /></div>
        <div className="icon" onClick={nextSlide}><EastOutlinedIcon /></div>
       </div>
    </div>
  )
}

export default Slider
