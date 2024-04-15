import React from 'react'
import './Experience.css'
import Experience_detail from '../../Constants/Experience-detail'


const Experience = () => {
    return (
        <div className='Experiences' id='experience'>
            <div className='Experience'>
                <h2>Experience</h2>
            </div>
            <div className='Experience-Details'>
                {Experience_detail.map((item, index) => (
                    <div className="book" key={index}>
                        <ul>
                            {item.Description.map((desc, idx)=>(
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                        <div className="cover">
                            <h1>{item.title}</h1>
                            <h4>{item.organization}, {item.year}</h4>
                        </div>
                    </div>
                    // <div key={index}>
                    //     <h1>{item.title}</h1>
                    //     <p>{item.organization}, {item.year}</p>
                    //     <p>{item.Description}</p>
                    // </div>
                ))}
            </div>
        </div>
    )
}

export default Experience