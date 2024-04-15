import React from 'react'
import './TechnicalSkills.css'
import { TechnicalSkill } from '../../Constants/Skills-details'

const TechnicalSkills = () => {
    return (
        <div className='TechnicalSkills' id='technicalskills'>
            <div className='TechnicalSkill'>
                <h2>Technical Skills</h2>
            </div>

            <div className='TechnicalSkills-detail'>
                {TechnicalSkill.map((item, index) => (
                    <div className="cards" key={index}>
                        <div className="cards-overlay"></div>
                        <div className="cards-inner">
                            <h2>{item.name}</h2>
                            <progress value={item.percentage} />
                        </div>
                    </div>
                    //<div className='cards' key={index}>
                    //     <h1>{item.name}</h1>
                    //     <progress value={item.percentage}/>
                    // </div>
                ))}
            </div>

        </div>
    )
}

export default TechnicalSkills