import React from 'react'
import "./HomeInfo.css"
import { IoLocationOutline } from 'react-icons/io5'
import { BiPound } from 'react-icons/bi'
import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlineBathtub } from 'react-icons/md'
import { LuBedDouble } from 'react-icons/lu'
import Modal from 'react-modal'

// MdOutlineBathtub
// LuBedDouble

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function HomeInfo({ property }) {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="home-info-container">
      <div className="container">
      <div className="home-address">
        <IoLocationOutline />
        <p>{property?.address?.city}</p>
        <p>{property?.address?.postcode}</p>
        <p>{property?.address?.street}</p>
        
      </div>
      <hr className="hr" />
      <div className="home">
        <div className='home-info-top'>
          <div className="info">
            <h4>Bedroom</h4>
            <p><LuBedDouble />{property?.bedroom_count}</p>
          </div>

          <div className="info">
            <h4>Bathroom</h4>
            <p><MdOutlineBathtub />{property?.bathroom_count}</p>
          </div>

          <div className="info">
            <h4>Property Type</h4>
            <p>{property.property_type}</p>
          </div>
        </div>

      <div className="main">
        <div className="info-container">
        <h4>Price</h4>
        <p><BiPound />{property.rent}</p>
        </div>

        <div className="info-container">
        <h4>Furnished Type</h4>
        <p>{property.furnished}</p>
        </div>
        <div className="info-container">
        <h4>Availabe From</h4>
        <p>{property?.availability}</p>
        </div>
        </div>  
      </div>
    </div>

      <div className="home-button">
        {/* <AiOutlineHeart className="heart-icon" /> */}
        <button className="home-shortlist-button"><AiOutlineHeart className="heart-icon" />Shortlist</button>
        <button className="booking-button" onClick={()=>setIsOpen(true)}>Book Viewing</button>
      </div>


      <div>
            <Modal
                isOpen={isOpen}
                
                onRequestClose={()=>setIsOpen(false)}
                style={customStyles}
                contentLabel="Booking Modal"
              >
                <div className="modal">
                  <h2>Book a Viewing </h2>
                  <p>{property?.address?.city}</p>
                  <p>{property?.address?.postcode}</p>
                  <p>{property?.address?.street}</p>
                </div>
                {/* <button className="modal-close-button" onClick={()=>setIsOpen(false)}>close</button> */}
                
                <form>
                  
                <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email address" id="email" />
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="number" placeholder="Enter your phone number" id="phone-number" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Enter your message" rows="4"></textarea>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
              </Modal>
            </div>
    </div>
  )
}

export default HomeInfo