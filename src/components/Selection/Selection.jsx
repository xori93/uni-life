import React from 'react'
import "./Selection.css"

function Selection() {
  return (
    
    <div className="selection-container">
      <div>
        <img className="selection-image" src="src\assets\Vector (20).png" />
        <div className="selection-info">
            <h2>Best Selection</h2>
            <p>Best selection of student accommodations. Never been easier to
               find a home that’s right for you.</p>
        </div>

        <img className="selection-image" src="src\assets\heart.png" />
        <div className="selection-info">
            <h2>Your favorite</h2>
            <p>Shortlist your favourite properties and
               send enquiries in one click.</p>
        </div>
        
        </div>
        <div>
           <img className="selection-man-image" src="src\assets\man.png" />
           </div>
    </div>
  )
}

export default Selection