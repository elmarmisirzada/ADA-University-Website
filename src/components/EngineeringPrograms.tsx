import React from 'react'
import './EngineeringPrograms.css'
const EngineeringPrograms: React.FC = () => {
  return (
    <div className="engineering-programs-total">
        <div className="container">
            <h2>Programs</h2>
            <div className="three-button-engineering">
                <div className="row">
                    <div className="first-button-engineering col-4">
                        <button>
                        <h4>Undergraduate</h4>
                        <nav>
                            <a href="https://www.ada.edu.az/en/schools/site/programs/computer-science">Computer Science</a>
                            <a href="https://www.ada.edu.az/en/schools/site/programs/computer-engineering">Computer Engineering</a>
                            <a href="https://www.ada.edu.az/en/schools/site/programs/information-technology">Information Technology</a>
                            <a href="https://www.ada.edu.az/en/schools/site/programs/mathematics">Mathematics</a>
                            <a href="https://www.ada.edu.az/en/schools/site/programs/electrical-and-electronics-engineering">Electrical and Electronics Engineering</a>
                        </nav>
                </button>
                    </div>

                    <div className="second-button-engineering col-4">   
                        <button>
                        <h4>Graduate</h4>
                        <nav>
                            <a href="https://www.ada.edu.az/en/schools/site/programs/computer-science-and-data-analytics">Computer Science and Data Analytics</a>
                            <a href="https://www.ada.edu.az/en/schools/site/programs/electrical-and-power-engineering">Electrical and Power Engineering</a>
                            <a href="https://www.ada.edu.az/en/schools/site/programs/computer-engineering-and-high-performance-computing">Computer Engineering and High Performance Computing</a>
                        </nav>
                </button>
                    </div>

                    <div className="first-button-engineering col-4">
                        <button>
                        <h4>PhD</h4>
                        <nav>
                            <a href="https://www.ada.edu.az/en/schools/site/programs/site-phd">PhD Programs</a>
                            
                        </nav>
                </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EngineeringPrograms