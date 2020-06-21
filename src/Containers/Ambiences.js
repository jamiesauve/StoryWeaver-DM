import React, { useState, useEffect, } from 'react'

import Section from '../Components/Layout/Section'
import Spacer from '../Components/styled/Spacer'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import TrackSection from '../Components/Ambiences/TrackSection'

import getMoodTracks from '../data/aspectData/ambiences/getMoodTracks'
import getEnvironmentTracks from '../data/aspectData/ambiences/getEnvironmentTracks'
import specialTracks from '../data/aspectData/ambiences/getSpecialTracks'

import _ from 'lodash'

const Ambiences = (props) => {
  const [moodTracks, setMoodTracks] = useState(getMoodTracks(props.activeLocation))
  const [environmentTracks, setEnvironmentTracks] = useState(getEnvironmentTracks(props.activeLocation))

  useEffect(() => {
    setMoodTracks(getMoodTracks(props.activeLocation))
    setEnvironmentTracks(getEnvironmentTracks(props.activeLocation))
  }, [props.activeLocation])

  return (
    <Section
      className="Section"
    >
      <ScrollableContainer
        className="scrollableContainer"
        >
          <TrackSection
            activeLocation={props.activeLocation}
            hasToggleAllLink={true}
            isInitiallyExpanded={false}
            title="Moods"
            tracks={moodTracks}
          />

          <Spacer />

          <TrackSection
            activeLocation={props.activeLocation}
            hasToggleAllLink={!_.isEmpty(props.activeLocation)}
            isInitiallyExpanded={!_.isEmpty(props.activeLocation)}
            title="Environment"
            tracks={environmentTracks}
          />

          <Spacer />

          <TrackSection
            activeLocation={props.activeLocation}
            isInitiallyExpanded
            title="Special Events"
            tracks={specialTracks}
          />
        
      </ScrollableContainer>
    </Section>
  )
}


export default Ambiences