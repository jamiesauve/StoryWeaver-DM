import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/Layout/Section'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

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
      <ScrollableContainer>
        {_.map(tracks, (category, categoryName) => (
          <ThemeBox
            copyTrack={copyTrack}
            key={categoryName}
            label={categoryName}
            labelColor={category.labelColor}
            tracks={category.trackObjects}
          />
        ))}
      </ScrollableContainer>
    </Section>
  )
}


export default Sounds