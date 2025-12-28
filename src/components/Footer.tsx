import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <>
      <div className='footer'>
        <div className="container">
          <div className="footer-components row">
            <div className="col-12 col-md-3">
              <div className="logo-section">
                <img src="https://www.ada.edu.az/assets/img/logo-white.svg" alt="ADA logo" />
                <h4>Connect With Us</h4>
                <div className="social-icons">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <BsTelegram />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <h5>About Us</h5>
              <a href=""><p>ADA University</p></a>
              <a href=""><p>Campus</p></a>
              <a href=""><p>Admissions</p></a>
              <a href=""><p>Student Life</p></a>
              <a href=""><p>Career@ADA</p></a>
            </div>

            <div className="col-12 col-md-3">
              <h5>Quick Links</h5>
              <a href=""><p>Washington Center of ADA University</p></a>
              <a href=""><p>Giving to ADA</p></a>
              <a href=""><p>Institute for Development and Diplomacy</p></a>
              <a href=""><p>ADA University Library</p></a>
              <a href=""><p>MyADA</p></a>
            </div>

            <div className="col-12 col-md-3">
              <h5>Contact Us</h5>
              <p>info@ada.edu.az</p>
              <p>(+994 12) 437 32 35</p>
              <p>(+994 12) 437 32 36</p>
              <p>Ahmadbey Aghaoghlu str. 61,Baku, Azerbaijan, AZ1008</p>
              <button className='footer-button'>Apply Now </button>
            </div>
          </div>


        </div>
        
        <div className="last-sentence">
          <p>
            Copyright © 2025 ADA. All rights reserved.
          </p>
        </div>
      </div>

      
    </>


  )
}

export default Footer
