import React from 'react'
import "./HomePrice.css"
import { BiPound } from 'react-icons/bi'

function HomePrice({prices}) {

    
   Object.keys(prices).forEach(item=>console.log(prices[item]))
   console.log('data is', Object.keys(prices))
    
  return (
    <div className="home-price-container">
        <h2 className="">Bedroom Prices</h2>
        <div className="border-container">
            {
                
                Object.values(prices).map((item,index) => 
                
                
                <div className="bedroom-container"> 
                
                    <p className="bedroom">{`Bedroom ${index+1}`}</p>
                    <p><BiPound />{item}</p>
                    
                </div>)
                // Object.keys(prices).map((item, index) => <p key={index.id}>{`Bedroom ${index+1}`} {prices[item]}</p>)
            }
            
        </div>
    </div>
  )
}

export default HomePrice