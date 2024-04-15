import React, {useState} from 'react'
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive]=useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
      };
  return (
    <nav className='Navbar'>
        <div className='Navbar-paragraph'>
            <p>Omar Rifai</p>
        </div>
        <div className={`Navbar-menu ${isActive ? 'active' : ''}`}>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#education'>Education</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#softskills'>Soft Skills</a></li>
                <li><a href='#technicalskills'>Technical Skills</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
        <div
        className="navbar-toggle"
        onClick={toggleMenu}
        role="button" // Add role attribute
        tabIndex="0"   // Add tabIndex attribute for keyboard accessibility
      >
        &#9776;
      </div>
    </nav>
  )
}

export default Navbar

