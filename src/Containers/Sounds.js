import React, { useState } from 'react'
import _ from 'lodash'

import Section from '../Components/Layout/Section'
import Spacer from '../Components/styled/Spacer'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import MoodTrackSection from '../Components/Sounds/MoodTrackSection'

const Sounds = (props) => {
  return (
    <Section
      title="Sounds"
    >
      <ScrollableContainer
        className="scrollableContainer"
        >
          <MoodTrackSection
            activeTerrain={props.activeTerrain}
          />

          <Spacer />

          {/* <TrackSection 
            activeTerrain={props.activeTerrain}
            title="Environments"
            tracks={tracks.environments}
          /> */}
        
      </ScrollableContainer>
    </Section>
  )
}


export default Sounds