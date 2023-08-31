import React from 'react'
import "./CityCards.css"
import { Link } from 'react-router-dom'

function CityCards({city}) {
  
  return (
    <div className="city-container"> 
    {/* <div className="city-container-overlay"></div> */}
     <Link to={`/details/${city?._id}`}> <img className="city-cards-image" src={city?.image_url} /></Link>
      
      <div className="city-container-info">
      <h2>{city.name}</h2>
      <p>{city.property_count}Properties</p>
      </div>
    </div>
  )
}

export default CityCards