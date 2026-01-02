import React from 'react'
import './ItalyAzerbaijanUniversity.css'
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import AboutUsItaly from './AboutUsItaly'
import Campus from './Campus'
import Partners from './Partners'

const ItalyAzerbaijanUniversity: React.FC = () => {
  return (
    <><div className="total-italy-azerbaijan-university">
          <div className="image-background">
              <img src="https://www.ada.edu.az/media/2024/10/25/website_slider_italy_azerbaijan.jpg" alt="Italy-Azerbaijan University" className="background-image" />
              
          </div>
          <div className="top-italy-azerbaijan-university">
              <div className="container">
                  <button>
                      <h1>Italy-Azerbaijan University</h1>
                  </button>

              </div>

          </div>
          <div className="bottom-of-top-italy">
              <div className="container">
                  <div className="breadcrumb-nav">
                      <Link to="/" className="breadcrumb-link">Home</Link>
                      <FaArrowRightLong className="arrow-icon" />
                      <span>About</span>
                      <FaArrowRightLong className="arrow-icon" />
                      <span className="active">Italy-Azerbaijan University</span>
                  </div>
              </div>
          </div>

      </div><AboutUsItaly />
      <Campus />
        <Partners />
      </>
    
  )
}

export default ItalyAzerbaijanUniversity
