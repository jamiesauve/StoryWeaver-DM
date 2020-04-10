import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ThemeBox from './ThemeBox'

import tracks from '../../assets/specialTracks'

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
  const [ isExpanded, setIsExpanded ] = useState(true)

  return (
    <This
      className="specialTrackSection"
    >
      <Title>
        Special Events
      </Title>

      <ThemeBox
        isExpanded={isExpanded}
        title={"Special Events"}
        titleColor={tracks.titleColor}
        setExpandedTheme={(theme) => setIsExpanded(Boolean(theme))}
        tracks={tracks.trackObjects}
      />
    </This>
  )
}

export default SpecialTrackSection