import React from 'react'
import SkillsText from './SkillsText'
import AllSkill from './AllSkill'

function SkillMain() {
  return (
    <div className='max-w-[1200px] mx-auto px-4 py-6' id='skills'>
      <SkillsText/>
      <AllSkill/>
    </div>
  )
}

export default SkillMain