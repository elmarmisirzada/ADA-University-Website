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

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<
    'about' | 'admissions' | 'academics' | 'schools' | 'experience' | 'adaSchool' | null
  >(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()

    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false)
      return
    }
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) return
    const prevOverflow = document.body.style.overflow
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prevOverflow || ''
    }
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen, isMobile])

  useEffect(() => {
    if (menuOpen) {
      setOpenSection(null)
    }
  }, [menuOpen])

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

  const toggleMenu = () => {
    setMenuOpen(prev => {
      const next = !prev
      if (next) setOpenSection(null)
      return next
    })
    setSearchOpen(false)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const toggleSection = (section: Exclude<typeof openSection, null>) => {
    setOpenSection(prev => (prev === section ? null : section))
  }

  return (
    <div className='header-wrapper'>
      {isMobile ? (
        <>
          <div className='mobile-header-bar'>
            <div className='mobile-header-left'>
              <img src="https://www.ada.edu.az/assets/img/logo.svg" alt="ADA Logo" />
            </div>

            <div className='mobile-header-actions'>
              <button
                type="button"
                className='mobile-header-icon'
                aria-label="Search"
                onClick={() => {
                  if (!menuOpen) {
                    setMenuOpen(true)
                  }
                  setTimeout(() => searchInputRef.current?.focus(), 0)
                }}
              >
                <IoSearch size={20} />
              </button>

              <button type="button" className='mobile-header-lang' aria-label="Language">
                EN
              </button>

              <button
                type="button"
                className='mobile-header-menu'
                aria-expanded={menuOpen}
                aria-controls="mobile-menu-panel"
                onClick={toggleMenu}
              >
                <span className='mobile-header-menu-label'>MENU</span>
                <span className='mobile-header-menu-icon'>{menuOpen ? '×' : '≡'}</span>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div id="mobile-menu-panel" className='mobile-menu-panel' role="dialog" aria-label="Menu">
              <div className='mobile-menu-search'>
                <input
                  ref={searchInputRef}
                  type="text"
                  className="mobile-menu-search-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <button
                  type="button"
                  className='mobile-menu-search-button'
                  aria-label="Search"
                  onClick={handleSearch}
                >
                  <IoSearch size={18} />
                </button>
              </div>

              <div className='mobile-menu-sections'>
                <div className='mobile-menu-section'>
                  <div className='mobile-menu-section-header'>
                    <div className='mobile-menu-section-title'>ABOUT</div>
                    <button
                      type="button"
                      className='mobile-menu-section-toggle'
                      aria-label="Close About"
                      onClick={() => toggleSection('about')}
                    >
                      {openSection === 'about' ? '×' : '˅'}
                    </button>
                  </div>
                  {openSection === 'about' && (
                    <div className='mobile-menu-section-body'>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>LEADERSHIP & GOVERNANCE</a>
                      <Link className='mobile-menu-link' to="/ada-university" onClick={closeMenu}>ADA UNIVERSITY</Link>
                      <Link className='mobile-menu-link' to="/italy-azerbaijan-university" onClick={closeMenu}>ITALY-AZERBAIJAN UNIVERSITY</Link>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>ACCREDITATIONS AND RANKINGS</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>CAMPUS</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>STRATEGIC PLAN</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>HONORARY DEGREES</a>
                    </div>
                  )}
                </div>

                <div className='mobile-menu-section'>
                  <div className='mobile-menu-section-header'>
                    <div className='mobile-menu-section-title'>ADMISSIONS</div>
                    <button
                      type="button"
                      className='mobile-menu-section-toggle'
                      aria-label="Toggle Admissions"
                      onClick={() => toggleSection('admissions')}
                    >
                      {openSection === 'admissions' ? '×' : '˅'}
                    </button>
                  </div>
                  {openSection === 'admissions' && (
                    <div className='mobile-menu-section-body'>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>FIND YOUR PROGRAM</a>
                      <Link className='mobile-menu-link' to="/undergraduate" onClick={closeMenu}>UNDERGRADUATE</Link>
                      <Link className='mobile-menu-link' to="/graduate" onClick={closeMenu}>GRADUATE</Link>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>INTERNATIONAL</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>FINANCIAL AID</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>TUITION AND COSTS</a>
                    </div>
                  )}
                </div>

                <div className='mobile-menu-section'>
                  <div className='mobile-menu-section-header'>
                    <div className='mobile-menu-section-title'>ACADEMICS</div>
                    <button
                      type="button"
                      className='mobile-menu-section-toggle'
                      aria-label="Toggle Academics"
                      onClick={() => toggleSection('academics')}
                    >
                      {openSection === 'academics' ? '×' : '˅'}
                    </button>
                  </div>
                  {openSection === 'academics' && (
                    <div className='mobile-menu-section-body'>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>RESEARCH</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>PUBLICATIONS</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>CORE COMPETENCIES</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>ACADEMIC CALENDAR</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>POLICIES</a>
                    </div>
                  )}
                </div>

                <div className='mobile-menu-section'>
                  <div className='mobile-menu-section-header'>
                    <div className='mobile-menu-section-title'>SCHOOLS</div>
                    <button
                      type="button"
                      className='mobile-menu-section-toggle'
                      aria-label="Toggle Schools"
                      onClick={() => toggleSection('schools')}
                    >
                      {openSection === 'schools' ? '×' : '˅'}
                    </button>
                  </div>
                  {openSection === 'schools' && (
                    <div className='mobile-menu-section-body'>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>COLLEGE</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>PUBLIC & INTERNATIONAL AFFAIRS</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>BUSINESS</a>
                      <Link className='mobile-menu-link' to="/it-engineering" onClick={closeMenu}>IT & ENGINEERING</Link>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>EDUCATION</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>LAW</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>AGRICULTURAL & FOOD SCIENCES</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>DESIGN & ARCHITECTURE</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>EXECUTIVE EDUCATION</a>
                    </div>
                  )}
                </div>

                <div className='mobile-menu-section'>
                  <div className='mobile-menu-section-header'>
                    <div className='mobile-menu-section-title'>ADA EXPERIENCE</div>
                    <button
                      type="button"
                      className='mobile-menu-section-toggle'
                      aria-label="Toggle ADA Experience"
                      onClick={() => toggleSection('experience')}
                    >
                      {openSection === 'experience' ? '×' : '˅'}
                    </button>
                  </div>
                  {openSection === 'experience' && (
                    <div className='mobile-menu-section-body'>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>STUDENT LIFE</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>EXCHANGE PROGRAMS</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>CAREER SERVICES</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>ALUMNI</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>STUDENT SUCCESS</a>
                    </div>
                  )}
                </div>

                <div className='mobile-menu-section'>
                  <div className='mobile-menu-section-header'>
                    <div className='mobile-menu-section-title'>ADA SCHOOL</div>
                    <button
                      type="button"
                      className='mobile-menu-section-toggle'
                      aria-label="Toggle ADA School"
                      onClick={() => toggleSection('adaSchool')}
                    >
                      {openSection === 'adaSchool' ? '×' : '˅'}
                    </button>
                  </div>
                  {openSection === 'adaSchool' && (
                    <div className='mobile-menu-section-body'>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>ADA PRIMARY SCHOOL</a>
                      <a className='mobile-menu-link' href="#" onClick={closeMenu}>ADA HIGH SCHOOL</a>
                    </div>
                  )}
                </div>

                <div className='mobile-menu-links'>
                  <a className='mobile-menu-link' href="#" onClick={closeMenu}>LIBRARY</a>
                  <a className='mobile-menu-link' href="#" onClick={closeMenu}>CENTERS AND INSTITUTES</a>
                  <Link className='mobile-menu-link' to="/news-events" onClick={closeMenu}>NEWS & EVENTS</Link>
                  <a className='mobile-menu-link' href="#" onClick={closeMenu}>ADA FOUNDATION</a>
                  <a className='mobile-menu-link' href="#" onClick={closeMenu}>CAREER@ADA</a>
                  <a className='mobile-menu-link' href="#" onClick={closeMenu}>MYADA</a>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
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
                  <li><Link className="dropdown-item" to="/ada-university">ADA University</Link></li>
                  <li><Link className="dropdown-item" to="/italy-azerbaijan-university">Italy-Azerbaijan University</Link></li>
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

              <Link className="btn btn-light ms-2 admin-nav-button" to="/admin">
                Admin
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header