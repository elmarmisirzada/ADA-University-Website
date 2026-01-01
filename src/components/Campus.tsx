import React from 'react'
import './Campus.css'
const Campus: React.FC = () => {
  return (
    <div className="total-campus">
        <div className="container">
            <div className="campus-buttons">
                <button>
                    <h2>Campus</h2>
                    <p>
                        Italy-Azerbaijan University is currently located on ADA University's modern Baku campus. Two new buildings are being built and will be ready by September 2025.
                    </p>
                </button>

                <button>
                    <h2>Schools</h2>
                    <p>
                       We offer two Schools within Italy-Azerbaijan University: Agricultural and Food Sciences, Design and Architecture. In addition to the Schools, separate programs are offered within the School of Business and School of IT and Engineering of ADA University.
                    </p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Campus