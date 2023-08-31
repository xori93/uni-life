import React from 'react'
import "./Compare.css"

function Compare() {
  return (
    <div className="compare-container">
        
        <div className="info-box">
        <img src="src\assets\search.png"/>
        <h4>Search</h4>
        <p>Find your dream home in the perfect
           area near your university.</p>
        </div>

        <div className="info-box">
            <img src="src\assets\check.png" />
            <h4>Compare</h4>
            <p>Compare student accommodation to 
               find the right home for you.</p>
        </div>

        <div className="info-box">
        <img src="src\assets\bills.png" />
            <h4>Bills Included</h4>
            <p>Bills are included in all rent prices. 
               No hidden fees.</p>
        </div>
    </div>
  )
}

export default Compare