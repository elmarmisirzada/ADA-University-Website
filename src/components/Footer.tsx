import React from 'react'
import './Footer.css' 

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <img src="https://www.ada.edu.az/assets/img/logo-white.svg" alt="ADA logo" />
            <h4>Connect With Us</h4>
          </div>

          <div className="col-12 col-md-3">
            <h5>About Us</h5>
            <p>ADA University</p>
            <p>Campus</p>
            <p>Admissions</p>
            <p>Student Life</p>
            <p>Career@ADA</p>
          </div>

          <div className="col-12 col-md-3">
            <h5>Quick Links</h5>
            <p>Washington Center of ADA University</p>
            <p>Giving to ADA</p>
            <p>Institute for Development and Diplomacy</p>
            <p>ADA University Library</p>
            <p>MyADA</p>
          </div>

          <div className="col-12 col-md-3">
            <h5>Contact Us</h5>
            <p>info@ada.edu.az</p>
            <p>(+994 12) 437 32 35</p>
            <p>(+994 12) 437 32 36</p>
            <p>Ahmadbey Aghaoghlu str. 61, Baku, Azerbaijan, AZ1008</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
