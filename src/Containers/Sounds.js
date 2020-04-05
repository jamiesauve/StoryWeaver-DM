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

const Sounds = () => {
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
        {_.map(tracks, (category, categoryName) => (
          <ThemeBox
            copyTrack={copyTrack}
            isExpanded={areAllCategoriesExpanded ? true : expandedTheme === categoryName}
            key={categoryName}
            title={categoryName}
            titleColor={category.titleColor}
            setExpandedTheme={areAllCategoriesExpanded ? () => setExpandedTheme('') : setExpandedTheme}
            tracks={category.trackObjects}
          />
        ))}
      </ScrollableContainer>
    </Section>
  )
}


export default Sounds