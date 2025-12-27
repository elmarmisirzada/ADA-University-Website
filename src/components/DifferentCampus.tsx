import React from 'react'
import './DifferentCampus.css'
const DifferentCampus: React.FC = () => {
    return (
        <div className="different-campus">
            <div className="container">
                <h1 className='special-h1'>
                    Different Campuses-One University
                </h1>
                <p className='special-p'>
                    Explore our locations in Azerbaijan and beyond. Our campuses are united with features that encourage ADA lifestyle.
                </p>

                <div className="all-campus row">
                    <div className="campus-one col-md-4">
                        <img src="https://www.ada.edu.az/assets/img/location-campus/m-campus-01-v2.jpg" alt="Baku Campus" />
                        <a href="">
                            <h3>ADA University Baku Campus</h3>
                        </a>

                        <a href="">
                            <p>
                                Green and Smart Campus in the heart of Baku. Its state-of-the-art facilities foster growth
                            </p>                    </a>

                    </div>

                    <div className="campus-two col-md-4">
                        <img src="https://www.ada.edu.az/assets/img/content/03_grid-thumbnail_786x548.jpg" alt="Baku Campus" />
                        <a href="">
                            <h3>ADA University Gazakh Center</h3>
                        </a>

                        <a href="">
                            <p>
                                Reviving history of education in Azerbaijan at historical Gazakh Teachers’ Seminary.
                            </p>                    </a>

                    </div>

                    <div className="campus-three col-md-4">
                        <img src="https://www.ada.edu.az/assets/img/content/02_grid-thumbnail_786x548.jpg" alt="Baku Campus" />
                        <a href="">
                            <h3>ADA University Washington Center</h3>
                        </a>

                        <a href="">
                            <p>
                                Historical building located just steps away from Dupont Circle and Philipps Collection.

                            </p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DifferentCampus