import React,{ Component } from "react";
import { useState }  from "react";
import Image from 'react-bootstrap/Image'
//import "./../../../styles.css";
//import pexels_photo from "src/assets/pexels-photo-3836292.jpeg";
//import pexels from "./src/assets/pexels-photo-3836292.jpeg";
//import {pexels} from "./images/pexels-photo-3836292";

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

export default function  ProductDisplay () {
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

//let current=1;


/*function previousSlide() {
    // current = current - 1;
    setCurrent(current === 0 ? images.length - 1 : current - 1);
 }
 
 function nextSlide() {
     alert();
     //current = current + 1;
   setCurrent(current === images.length - 1 ? 0 : current + 1);
 }

class ProductDispaly extends Component {
   
    render() {
        return(
          <div>
             <h2>Product Details</h2>
             <div className="slider">
                <div className="left-arrow" onClick={previousSlide}> ⬅</div>
                <div className="right-arrow" onClick={nextSlide}> ⮕</div>
                {images.map((image,index) =>
                  current === index && (
                    <div key={image} className="slide">
                  <img src={image} alt="images"/>
                  </div>
                  ))
                }
             </div>
          </div>
        );
    }
}
export default ProductDispaly;*/