import React from 'react'
import "./Header.css"
import { MdOutlineMail } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai"
import {Link} from 'react-router-dom'
import Modal from 'react-modal';

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');



// MdOutlineMail
// BsHouses


function Header() {
  // create state to control my modal
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="header-container">
      <div className="header-item">
      
      <Link to="/"> <img src="/house.png" className="house-image"></img></Link>
        <Link to="/" className="header-h3"><h3>UniLife</h3></Link>
        </div>
        <div className="header-button">
          <AiOutlineHeart className="heart-icon" />
            <button className="shortlist-button">Shortlist</button>

            <div className="icon-contact">
            <MdOutlineMail className="mail-icon" />
            <button className="contact-us-button" onClick={()=>setIsOpen(true)}>Contact Us</button>
            </div>
            <div>
            <Modal
                isOpen={isOpen}
                
                onRequestClose={()=>setIsOpen(false)}
                style={customStyles}
                contentLabel="Contact Us Modal"
              >
                <div className="modal">
                <h2>Contact Us</h2>
                <p>Feel free to contact us id you have any questions. Looking forward to hear from you.</p>
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
    </div>
  )
}

export default Header