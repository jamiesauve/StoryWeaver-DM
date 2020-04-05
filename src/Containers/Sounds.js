import React from 'react'
import _ from 'lodash'

import Section from '../Components/Layout/Section'

import ThemeBox from '../Components/ThemeBox'
import tracks from '../assets/tracks'

const copyTrack = (location) => {    
  const command = `;;play ${location}`
  navigator.clipboard.writeText(command)
}

const Sounds = () => {
  return (
    <Section
      title="Sounds"
    >
      <div>
        {_.map(tracks, (category, categoryName) => (
          <ThemeBox
            copyTrack={copyTrack}
            key={categoryName}
            label={categoryName}
            labelColor={category.labelColor}
            tracks={category.trackObjects}
          />
        ))}
      </div>
    </Section>
  )
}


export default Sounds