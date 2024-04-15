import React from 'react'
import AboutDetails from '../../Constants/data'
import './Home.css';
import Me from '../../Assets/Omar-Rifai.JPG';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin} from 'react-icons/fa';
import {BsCalendarDateFill  } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='Home' id='/home'>
        <div className='About'>
            <h2>About</h2>
        </div>
        <div className='Home-detail'>
            <p>{AboutDetails.Description}</p>
        </div>
        <div className='Me-detail'>
            <div className='image'>
                <img src={Me} alt='me'/>
            </div>
            <div className='Details'>
                <div><FaMapMarkerAlt /> Lebanon</div>
                <div><FaPhone /> +96171800276</div>
                <div><FaEnvelope /> omar.rifai.966@gmail.com</div>
                <div><FaLinkedin /> https://linkedin.com/in/omar-rifai-6314751a1/</div>
                <div><BsCalendarDateFill  /> 8 June 1996 </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home

