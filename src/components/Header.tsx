import React from 'react'
import './Header.css'

const Header:React.FC = () => {
  return (
    <div className='header-wrapper'>
      <div className='total-header'>
        <div className='header-left'>
            <img src="https://www.ada.edu.az/assets/img/logo.svg" alt="ADA Logo" />
        </div>

        
        <div className='header-right'>
          <div className="d-flex align-items-center">
            <div className="dropdown ms-2">
              <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Leadership & Governance</a></li>
                <li><a className="dropdown-item" href="/ada-university">ADA University</a></li>
                <li><a className="dropdown-item" href="#">Italy-Azerbaijan University</a></li>
                <li><a className="dropdown-item" href="#">Accreditations and Rankings</a></li>
                <li><a className="dropdown-item" href="#">Campus</a></li>
                <li><a className="dropdown-item" href="#">Strategic Plan</a></li>
                <li><a className="dropdown-item" href="#">Honorary Degrees</a></li>

              </ul>
            </div>

            <div className="dropdown ms-2">
              <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admission
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Find your Program</a></li>
                <li><a className="dropdown-item" href="#">Undergraduate</a></li>
                <li><a className="dropdown-item" href="#">Graduate</a></li>
                <li><a className="dropdown-item" href="#">International</a></li>
                <li><a className="dropdown-item" href="#">Financial Aid</a></li>
                <li><a className="dropdown-item" href="#">Tuition and Costs</a></li>
              </ul>
            </div>

            <div className="dropdown ms-2">
              <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Academics
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Research</a></li>
                <li><a className="dropdown-item" href="#">Publications</a></li>
                <li><a className="dropdown-item" href="#">Core Competencies</a></li>
                <li><a className="dropdown-item" href="#">Academic Calendar</a></li>
                <li><a className="dropdown-item" href="#">Policies</a></li>
              </ul>
            </div>

            <div className="dropdown ms-2">
              <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Schools
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">College</a></li>
                <li><a className="dropdown-item" href="#">Public & International Affairs</a></li>
                <li><a className="dropdown-item" href="#">Business</a></li>
                <li><a className="dropdown-item" href="#">IT & Engineering</a></li>
                <li><a className="dropdown-item" href="#">Education</a></li>
                <li><a className="dropdown-item" href="#">Law</a></li>
                <li><a className="dropdown-item" href="#">Agricultural & Food Sciences</a></li>
                <li><a className="dropdown-item" href="#">Design & Architecture</a></li>
                <li><a className="dropdown-item" href="#">Executive Education</a></li>
              </ul>
            </div>

            <div className="dropdown ms-2">
              <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                ADA Experience
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Student Life</a></li>
                <li><a className="dropdown-item" href="#">Exchange Programs</a></li>
                <li><a className="dropdown-item" href="#">Career Services</a></li>
                <li><a className="dropdown-item" href="#">Alumni</a></li>
                <li><a className="dropdown-item" href="#">Student Success</a></li>
              </ul>
            </div>

            <div className="dropdown ms-2">
              <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                ADA School
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">ADA Primary School</a></li>
                <li><a className="dropdown-item" href="#">ADA High School</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header