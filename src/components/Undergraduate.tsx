import React from 'react'
import './Undergraduate.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import MainUndergraduate from './MainUndergraduate'

const Undergraduate: React.FC = () => {
  return (
    <div className="undergraduate-total">
      <div className="image-background">
        <img src="https://www.ada.edu.az/media/2024/07/03/whatsapp_image_2024_07_03_at_16_09_20_copy_-3.jpg" alt="Undergraduate Admissions" className="background-image" />
      </div>
      <div className="top-undergraduate">
        <div className="container">
          <button>
            <h1>UNDERGRADUATE ADMISSIONS</h1>
          </button>
        </div>
      </div>
      <div className="bottom-undergraduate">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <FaArrowRightLong className="arrow-icon" />
            <span>Admissions</span>
            <FaArrowRightLong className="arrow-icon" />
            <span className="active">Undergraduate</span>
          </div>
        </div>
      </div>

      <MainUndergraduate />
    </div>
  )
}

export default Undergraduate
