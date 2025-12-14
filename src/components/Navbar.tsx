import React from 'react'
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
  <div className="container">
   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link" aria-current="page" href="#">Library</a>
        <a className="nav-link" href="#">Centers and Institutes</a>
        <a className="nav-link" href="#">News & Events</a>
        <a className="nav-link" href="true">ADA Foundation</a>
                <a className="nav-link" href="true">Career@ADA</a>
                        <a className="nav-link" href="true">MyADA</a>
                        <button className="btn-apply">APPLY NOW</button>
            


      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar