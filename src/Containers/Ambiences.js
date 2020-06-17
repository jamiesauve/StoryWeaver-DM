import React, { useState, useEffect, } from 'react'

import Section from '../Components/Layout/Section'
import Spacer from '../Components/styled/Spacer'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import TrackSection from '../Components/Ambiences/TrackSection'

import getMoodTracks from '../data/getMoodTracks'
import getEnvironmentTracks from '../data/getEnvironmentTracks'
import specialTracks from '../data/getSpecialTracks'

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
            title="Moods"
            tracks={moodTracks}
          />

          <Spacer />

          <TrackSection
            activeLocation={props.activeLocation}
            hasToggleAllLink={!Boolean(props.activeLocation)}
            initiallyExpanded={Boolean(props.activeLocation)}
            title="Environment"
            tracks={environmentTracks}
          />

          <Spacer />

          <TrackSection
            activeLocation={props.activeLocation}
            initiallyExpanded
            title="Special Events"
            tracks={specialTracks}
          />
        
      </ScrollableContainer>
    </Section>
  )
}


export default Ambiences