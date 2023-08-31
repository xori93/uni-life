import React,{useEffect, useState} from 'react'
import "./HomeImage.css"
import HomeDetails from './../../Pages/HomeDetails/HomeDetails';

function HomeImage({images}) {

  const changeImage = (index) => {
    let imgIndex = document.getElementById('imageIndex');
    imgIndex?.setAttribute('src', images[index]);
  }
    
  return (
    <div className="home-image-container">
        
        <img id="imageIndex" className="top" src={images[0]} />
        <div className="bottom">
            <img onClick={()=>changeImage(0)} src={images[0]} />
            <img onClick={()=>changeImage(1)} src={images[1]} />
            <img onClick={()=>changeImage(2)}  src={images[2]} />
            <img onClick={()=>changeImage(3)}  src={images[3]} />
        </div>        
    </div>
  )
}

export default HomeImage