import React from 'react'
import "./Slider.css"

function Slider({headLine, textLine, banner, bannerText, headLiner, textLiner}) {
     
  return (
    <div className="slider-container">
        <h3>{headLine}</h3>
        <p>{textLine}</p>
        <h3>{banner}</h3>
        <p className="bannerText">{bannerText}</p>
        <h3>{headLiner}</h3>
        <p>{textLiner}</p>
        </div>
  ) 
}

export default Slider

