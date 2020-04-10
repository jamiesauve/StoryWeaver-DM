import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ThemeBox from './ThemeBox'
import ToggleExpandedButton from './ToggleExpandedButton'

import tracks from '../../assets/moodTracks'

const This = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Title = styled.div`
  margin-top: 20px;
  border-top: 1px solid #777;
  padding-top: 20px;
  color: #aaa;

  text-align: center;
`

const TrackSection = (props) => {
  const [ expandedTheme, setExpandedTheme ] = useState('')
  const [ areAllCategoriesExpanded, setAreAllCategoriesExpanded ] = useState(false)

  const copyTrack = (location) => {    
    const command = `;;play ${location}`
    navigator.clipboard.writeText(command)
  }

  console.log('props', props)

  return (
    <This
      className="TrackSection"
    >
      <Title>
        Moods
      </Title>

      <ToggleExpandedButton 
        areAllCategoriesExpanded={areAllCategoriesExpanded}
        setAreAllCategoriesExpanded={setAreAllCategoriesExpanded}
      />

      {_.map(tracks, (category, categoryName) => {
        const filteredTracks = props.activeTerrain 
        ? _.filter(category.trackObjects, trackObject => {
          console.log(trackObject)
          if (_.isEmpty(trackObject.excludeFrom)) return true;

          console.log('exclude', trackObject.excludeFrom, props.activeTerrain)

          return !_.includes(trackObject.excludeFrom, props.activeTerrain)

        })
        : category.trackObjects

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
    </This>
  )
}

export default TrackSection