import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { IoSearch } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';

const Header:React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const found = (window as any).find(searchQuery);
      if (!found) {
        alert('No results found');
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
                <li><a className="dropdown-item" href="/italy-azerbaijan-university">Italy-Azerbaijan University</a></li>
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
                <li><Link className="dropdown-item" to="/undergraduate">Undergraduate</Link></li>
                <li><Link className="dropdown-item" to="/graduate">Graduate</Link></li>
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
                <li><Link className="dropdown-item" to="/it-engineering">IT & Engineering</Link></li>
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

            {searchOpen && (
              <div className="search-input-container ms-2">
                <input
                  ref={searchInputRef}
                  type="text"
                  className="form-control search-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
            )}

            <button 
              className="btn btn-light ms-2 search-button"
              onClick={() => {
                if (searchOpen && searchQuery) {
                  handleSearch();
                } else {
                  setSearchOpen(!searchOpen);
                  setSearchQuery('');
                }
              }}
            >
              <IoSearch size={20} />
            </button>

            <button 
              className="btn btn-light ms-2 theme-toggle-button"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header