import React from 'react'
import './ADAUniversityPage.css'
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import OurStory from './OurStory'
import MissionandVision from './MissionandVision'
import CoreValues from './CoreValues'
import BrandAssets from './BrandAssets'


const ADAUniversityPage: React.FC = () => {
  return (
    <div className="total-ada-university">
      <div className="video-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="https://www.ada.edu.az/file_upload/about/about_index_header_video.mov" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="top-ada-university">
            <div className="container">
                <button>
                <h1>ADA University</h1>
            </button>
            
            </div>

      </div>
      <div className="bottom-of-topada">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <FaArrowRightLong className="arrow-icon" />
            <span>About</span>
            <FaArrowRightLong className="arrow-icon" />
            <span className="active">ADA University</span>
          </div>
        </div>
      </div>
      <OurStory />
      <MissionandVision />
      <CoreValues />
      <BrandAssets />
    </div>
  )
}

export default ADAUniversityPage
