import React from 'react'
import './NewsEventsPage.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import LatestNews from './LatestNews'
import LatestEvents from './LatestEvents'

const NewsEventsPage: React.FC = () => {
  return (
    <div className="events-total">
        
            <div className="image-background">
              <img src="https://www.ada.edu.az/assets/img/header/news-and-blog.jpg" alt="News and Events" className="background-image" />
              
          </div>
          <div className="top-events">
            <div className="container">
                  <button>
                      <h1>News & Events</h1>
                  </button>

              </div>
          </div>
            <div className="bottom-events">
                 <div className="container">
                  <div className="breadcrumb-nav">
                      <Link to="/" className="breadcrumb-link">Home</Link>
                      
                      <FaArrowRightLong className="arrow-icon" />
                      <span className="active">News & Events</span>
                  </div>
              </div>
            </div>

            <LatestNews />
            <LatestEvents />
        </div>

  )
}

export default NewsEventsPage
