import React from 'react'
import styled from 'styled-components'

import TrackGroup from './TrackGroup'
import Dresser from '../UI/Dresser'

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
  const drawers = props.tracks
    .map(category => ({
      title: category.categoryName,
      titleColor: category.titleColor,
      content: () => <TrackGroup
        tracks={category.trackObjects}
        activeTerrain={props.activeTerrain}
      />,
    }))

  return (
    <This
      className="TrackSection"
    >
      <Title>
        {props.title}
      </Title>

      <Dresser 
        drawers={drawers}
        hasToggleAllLink={props.hasToggleAllLink}
        initiallyExpanded={props.initiallyExpanded}
      />
    </This>
  )
}

export default TrackSection