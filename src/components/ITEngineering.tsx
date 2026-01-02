import React from 'react'
import './ITEngineering.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import SchoolEngineering from './SchoolEngineering'
import EngineeringPrograms from './EngineeringPrograms'

const ITEngineering: React.FC = () => {
  return (
    <div className="it-engineering-total">
      <div className="image-background">
        <img src="https://www.ada.edu.az/assets/img/header/header_it.jpg" alt="IT & Engineering" className="background-image" />
      </div>
      <div className="top-it-engineering">
        <div className="container">
          <button>
            <h1>School Of Information Technologies And Engineering</h1>
          </button>
        </div>
      </div>
      <div className="bottom-it-engineering">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <FaArrowRightLong className="arrow-icon" />
            <span>Schools</span>
            <FaArrowRightLong className="arrow-icon" />
            <span className="active">School of IT and Engineering</span>
          </div>
        </div>
      </div>

      <SchoolEngineering />
      <EngineeringPrograms />
    </div>
  )
}

export default ITEngineering
