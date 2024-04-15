import React from 'react'
import './Services.css';
import WebDeveloper from '../../Assets/web developer.png';
import AppDeveloper from '../../Assets/App Developer.png';

const Services = () => {
  return (
    <div className='Services' id='services'>
        <div className='Service'>
            <h2>Services</h2>
        </div>
        <div>
            <h2>What I Do?</h2>
        </div>
        <div className='Service-Details'>
            <div className='Service-Details-card'>
                <img src={WebDeveloper} alt='web developer'/>
                <h1>Web Developer</h1>
                <p>Proficient in front-end web development, <br/>
                I specialize in utilizing HTML, CSS, JavaScript, and React.js to create engaging and dynamic user interfaces.</p>
            </div>
            <div className='Service-Details-card'>
                <img src={AppDeveloper} alt='app developer'/>
                <h1>App Developer</h1>
                <p>Experienced in mobile app development, <br/>
                I specialize in building cross-platform applications using Flutter and Dart, crafting seamless and responsive user experiences.</p>
            </div>
        </div>
    </div>
  )
}

export default Services