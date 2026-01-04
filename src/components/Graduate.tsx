import React from 'react'
import './Graduate.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import MainGraduate from './MainGraduate'

const Graduate: React.FC = () => {
  return (
    <div className="graduate-total">
      <div className="image-background">
        <img
          src="https://www.ada.edu.az/media/2024/07/01/graduate_01.jpg"
          alt="Graduate Admissions"
          className="background-image"
        />
      </div>

      <div className="top-graduate">
        <div className="container">
          <button>
            <h1>GRADUATE ADMISSIONS</h1>
          </button>
        </div>
      </div>

      <div className="bottom-graduate">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <FaArrowRightLong className="arrow-icon" />
            <span>Admissions</span>
            <FaArrowRightLong className="arrow-icon" />
            <span className="active">Graduate Admissions</span>
          </div>
        </div>
      </div>

      <MainGraduate />
    </div>
  )
}

export default Graduate
