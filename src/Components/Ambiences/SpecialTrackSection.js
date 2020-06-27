import React, { useState } from 'react'
import styled from 'styled-components'

import ThemeBox from './ThemeBox'

import tracks from '../../data/specialTracks'
import ToggleExpandedButton from '../UI/Structure/ToggleExpandedButton'

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

const SpecialTrackSection = () => {
  const [ areAllCategoriesExpanded, setAreAllCategoriesExpanded ] = useState(true)

  return (
    <This
      className="specialTrackSection"
    >
      <Title>
        Special Events
      </Title>

      <ToggleExpandedButton 
        areAllCategoriesExpanded={areAllCategoriesExpanded}
        setAreAllCategoriesExpanded={setAreAllCategoriesExpanded}
      />

      <ThemeBox
        isExpanded={areAllCategoriesExpanded}
        title={"Special Events"}
        titleColor={tracks.titleColor}
        setExpandedTheme={setAreAllCategoriesExpanded}
        tracks={tracks.trackObjects}
      />
    </This>
  )
}

export default SpecialTrackSection