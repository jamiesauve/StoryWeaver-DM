import React, { useState, useEffect, } from 'react'

import { useRecoilValue } from 'recoil'

import Section from '../Components/UI/Structure/Section'
import Spacer from '../Components/UI/Structure/Spacer'

import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'

import TrackSection from '../Components/Ambiences/TrackSection'

import { ambiencesAtom } from '../state/atoms/aspectDataAtoms'

import toCapitalCase from '../utils/toCapitalCase'

import _ from 'lodash'

const Ambiences = (props) => {
  const ambiencesData = useRecoilValue(ambiencesAtom)
  const {
    getEnvironmentTracks,
    getMoodTracks,
    specialTracks,
  } = ambiencesData

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
            title={props.activeLocationType === "any" 
              ? "Location" 
              : toCapitalCase(props.activeLocationType)
            }
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