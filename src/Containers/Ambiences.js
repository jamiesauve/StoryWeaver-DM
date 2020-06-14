import React, { useState, useEffect, } from 'react'

import Section from '../Components/Layout/Section'
import Spacer from '../Components/styled/Spacer'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import TrackSection from '../Components/Ambiences/TrackSection'

import getMoodTracks from '../data/getMoodTracks'
import getEnvironmentTracks from '../data/getEnvironmentTracks'
import specialTracks from '../data/getSpecialTracks'

const Ambiences = (props) => {
  const [moodTracks, setMoodTracks] = useState(getMoodTracks(props.activeTerrain))
  const [environmentTracks, setEnvironmentTracks] = useState(getEnvironmentTracks(props.activeTerrain))

  useEffect(() => {
    setMoodTracks(getMoodTracks(props.activeTerrain))
    setEnvironmentTracks(getEnvironmentTracks(props.activeTerrain))
  }, [props.activeTerrain])

  return (
    <Section
      title="Ambiences"
      className="Section"
    >
      <ScrollableContainer
        className="scrollableContainer"
        >
          <TrackSection
            activeTerrain={props.activeTerrain}
            hasToggleAllLink={true}
            title="Moods"
            tracks={moodTracks}
          />

          <Spacer />

          <TrackSection
            activeTerrain={props.activeTerrain}
            hasToggleAllLink={!Boolean(props.activeTerrain)}
            initiallyExpanded={Boolean(props.activeTerrain)}
            title="Environment"
            tracks={environmentTracks}
          />

          <Spacer />

          <TrackSection
            activeTerrain={props.activeTerrain}
            initiallyExpanded
            title="Special Events"
            tracks={specialTracks}
          />
        
      </ScrollableContainer>
    </Section>
  )
}


export default Ambiences