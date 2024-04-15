import React from 'react'
import './SoftSkills.css'
import { SoftSkill } from '../../Constants/Skills-details'

const SoftSkills = () => {
  return (
    <div className='SoftSkills' id='softskills'>
        <div className='SoftSkill'>
            <h2>Soft Skills</h2>
        </div>

        <div className='SoftSkills-detail'>
            {SoftSkill.map((item, index)=>(
                <div className='card' key={index}>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>

    </div>
  )
}

export default SoftSkills