import React from 'react'
import "./Footer.css"
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { AiFillCopyrightCircle } from 'react-icons/ai'


// BsFacebook
// AiFillTwitterCircle
// BsInstagram
// AiFillCopyrightCircle

function Footer() {

  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-info">
          <h2>Keep in touch</h2>
          <p>Curious about new offerings? Sign up for
            our weekly newsletter and stay informed.</p>
          <input placeholder="Your email" />
        </div>

        <div className="footer-socialize">
          <h2>Let's Socialize</h2>

          <div className="icons">
          <BsFacebook />
          <p>Facebook</p>
          </div>

          <div className="icons">
          <AiFillTwitterCircle />
          <p>Twitter</p>
          </div>

          <div className="icons">
          <BsInstagram />
          <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-about">
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy & Cookie Policies</p>
        </div>
        <div className="footer-about">
          <p>2022</p>
          <AiFillCopyrightCircle />
          <p>UniLife</p>
        </div>
      </div>

    </div>
  )
}

export default Footer