import React from 'react'
import './MeetAlumni.css'

const MeetAlumni: React.FC = () => {
    return (
        <div className="total-meet">
            <div className="container">
                <div className="top-alumni">
                    <h1>Meet Our Alumni</h1>
                    <button>
                        Learn More
                    </button>
                </div>
                <div className="middle-alumni">
                    <iframe 
                    width="1240" 
                    height="650" 
                    src="https://www.youtube.com/embed/_cgWiPKSGy0?si=rc9EA3L-X1ZEoNKr" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                    web-share" referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                    </iframe>
                </div>
                <div className="bottom-alumni my-5">
                    <h1>
                        Connect to Our Alumni Community
                    </h1>

                    <p>
                        Staying connected to your alma mater is easier than ever through the resources of our Office of Alumni Affairs. Remain a vital part of the university’s exceptionally engaged community and live up to ADA values wherever you go.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MeetAlumni
