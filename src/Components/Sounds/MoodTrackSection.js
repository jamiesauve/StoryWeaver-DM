import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ThemeBox from './ThemeBox'
import ToggleExpandedButton from './ToggleExpandedButton'

import tracks from '../../data/moodTracks'

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
          if (_.isEmpty(trackObject.excludeFrom)) return true;

          return !_.includes(trackObject.excludeFrom, props.activeTerrain)

        })
        : category.trackObjects

        return (
          <ThemeBox
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