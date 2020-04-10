import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ThemeBox from './ThemeBox'
import ToggleExpandedButton from './ToggleExpandedButton'

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

  return (
    <This
      className="TrackSection"
    >
      {
        props.title && <Title>
          {props.title}
        </Title>
      }
      <ToggleExpandedButton 
        areAllCategoriesExpanded={areAllCategoriesExpanded}
        setAreAllCategoriesExpanded={setAreAllCategoriesExpanded}
      />

      {_.map(props.tracks, (category, categoryName) => {
        const filteredTracks = props.activeTerrain 
          ? _.filter(category.trackObjects, trackObject => {
            if (_.isEmpty(trackObject.terrain)) return true;

            return _.includes(trackObject.terrain, props.activeTerrain)

          })
          : category.trackObjects

        console.log(props.activeTerrain)

        return _.isEmpty(filteredTracks)
          ? null
          : (
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