import React from 'react'
import './MissionandVision.css'

const MissionandVision: React.FC = () => {
  return (
    <div className="mission-total">
        <div className="container">
            <div className="mission-buttons">
                <button>
                    <h2>Mission</h2>
                    <p>
                        Our mission is to cultivate highly intellectual solution providers who <br />
                         are closely collaborating, efficiently communicating members of the <br />
                          global community, possessing ethics and a sense of citizenship.
                    </p>
                </button>

                <button>
                    <h2>Vision</h2>
                    <p>
                        We continually strive to be a world-class university in Azerbaijan <br />
                         with the excellence of “müəllim and alim” embedded into an <br />
                          innovative learning culture.
                    </p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default MissionandVision