import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/Layout/Section'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import ThemeBox from '../Components/Sounds/ThemeBox'
import ToggleExpandedButton from '../Components/Sounds/ToggleExpandedButton'

import tracks from '../assets/tracks'

const copyTrack = (location) => {    
  const command = `;;play ${location}`
  navigator.clipboard.writeText(command)
}

const Sounds = (props) => {
  const [ expandedTheme, setExpandedTheme ] = useState('')
  const [ areAllCategoriesExpanded, setAreAllCategoriesExpanded ] = useState(false)

  
  return (
    <Section
    title="Sounds"
    rightItem={
      <ToggleExpandedButton 
      areAllCategoriesExpanded={areAllCategoriesExpanded}
      setAreAllCategoriesExpanded={setAreAllCategoriesExpanded}
      />
    }
    >
      <ScrollableContainer
        className="scrollableContainer"
        >
        {_.map(tracks, (category, categoryName) => {
          const filteredTracks = props.activeTerrain 
            ? _.filter(category.trackObjects, trackObject => _.includes(trackObject.terrain, props.activeTerrain))
            : category.trackObjects

          console.log(props.activeTerrain)
          console.log('filtered', filteredTracks) 

          return (
            <ThemeBox
              copyTrack={copyTrack}
              isExpanded={areAllCategoriesExpanded ? true : expandedTheme === categoryName}
              key={categoryName}
              title={categoryName}
              titleColor={category.titleColor}
              setExpandedTheme={areAllCategoriesExpanded ? () => setExpandedTheme('') : setExpandedTheme}
              tracks={filteredTracks}
            />
          )
        })}
      </ScrollableContainer>
    </Section>
  )
}


export default Sounds