import React from 'react'
import './Education.css'
import Education_Details from '../../Constants/Education-details'
const Education = () => {
  return (
    <div className='Educations' id='education'>
        <div className='Education'>
            <h2>Education</h2>
        </div>
        <div className='Education-Detail'>
            {Education_Details.map((item, index)=>(
                <div className='card' key={index}>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='card-inner'>
                        <h1>{item.degree}</h1>
                        <h3>{item.name}</h3>
                        <p>Graduated from {item.university} in {item.year}</p>
                        <p>GPA: {item.GPA}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education