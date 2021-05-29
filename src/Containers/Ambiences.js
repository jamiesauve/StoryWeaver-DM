import React, { useState, useEffect, } from 'react'

import Section from '../Components/UI/Structure/Section'
import Spacer from '../Components/UI/Structure/Spacer'

import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'

import TrackSection from '../Components/Ambiences/TrackSection'

import getMoodTracks from '../data/generalData/ambiences/getMoodTracks'
import getEnvironmentTracks from '../data/generalData/ambiences/getEnvironmentTracks'
import specialTracks from '../data/generalData/ambiences/getSpecialTracks'

import _ from 'lodash'

const Ambiences = (props) => {
  const [moodTracks, setMoodTracks] = useState(getMoodTracks(props.activeLocationType, props.activeLocation))
  const [environmentTracks, setEnvironmentTracks] = useState(getEnvironmentTracks(props.activeLocationType, props.activeLocation))

  useEffect(() => {
    setMoodTracks(getMoodTracks(props.activeLocationType, props.activeLocation))
    setEnvironmentTracks(getEnvironmentTracks(props.activeLocationType, props.activeLocation))
  }, [
    props.activeLocation,
    props.activeLocationType
  ])

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