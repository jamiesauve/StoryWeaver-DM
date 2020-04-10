import React, { useState } from 'react'
import _ from 'lodash'

import Section from '../Components/Layout/Section'
import Spacer from '../Components/styled/Spacer'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import MoodTrackSection from '../Components/Sounds/MoodTrackSection'
import EnvironmentTrackSection from '../Components/Sounds/EnvironmentTrackSection'
import SpecialTrackSection from '../Components/Sounds/SpecialTrackSection'

const Sounds = (props) => {
  return (
    <Section
      title="Sounds"
      className="Section"
    >
      <ScrollableContainer
        className="scrollableContainer"
        >
          <MoodTrackSection
            activeTerrain={props.activeTerrain}
          />

          <Spacer />

          <EnvironmentTrackSection 
            activeTerrain={props.activeTerrain}
          />

          <Spacer />

          <SpecialTrackSection />
        
      </ScrollableContainer>
    </Section>
  )
}


export default Sounds