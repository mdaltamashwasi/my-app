import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import { useState }  from "react";


  //<ProductDisplay/> We are unable to declare her but able to in index.js and app.js
const imgs = process.env.PUBLIC_URL + '/assets/pexels-photo-3836292.jpeg'
const images = [
    "./images/pexels-photo-3836292.jpeg",
    "./images/pexels-photo-3836292.jpeg",
    "./images/pexels-photo-2792157.jpeg",
    "./images/pexels-photo-1166209.jpeg",
    "./images/pexels-photo-1661179.jpeg",
    "./images/kitty-cat-kitten-pet-45201.jpeg",
    "./images/Hero-Image-01-1.jpg",
    "./images/Hero-Image-01-1.jpg"
   
];
//const [current, setCurrent] = useState(0);
let imageStyle = {
  'max-width': '100%',
  'height': 'auto' 
}

const   HomeComponent =  () => {
    const [current, setCurrent] = useState(0);
    function previousSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
     }
     
     function nextSlide() {
       setCurrent(current === images.length - 1 ? 0 : current + 1);
     }
        return(
            <div>
           <h2>Product Details</h2>
           <div className="slider">
              <div className="left-arrow" onClick={previousSlide}> ⬅</div>
              <div className="right-arrow" onClick={nextSlide}> ⮕</div>
              {images.map((image,index) =>
                current === index && (
                  <div key={image} className="slide">
                {/*<img src={image} alt="images"/>*/}
                <Image src={image} style={imageStyle}/>
                </div>
                ))
              }
             
           </div>
           <Image src={images[0]} style={imageStyle}/>
        </div>
              );
           
            
}
export default HomeComponent;