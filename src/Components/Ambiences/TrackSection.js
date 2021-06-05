import React, { useCallback } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import TrackGroup from './TrackGroup'
import Dresser from '../UI/Structure/Dresser'

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
  const drawers = useCallback(_.map(props.tracks, category => ({
      title: category.categoryLabel,
      titleColor: category.titleColor,
      content: () => <TrackGroup
        activeLocation={props.activeLocation}
        tracks={category.trackObjects}
        categoryTitle={category.categoryLabel}
      />,
    })), [
      props.tracks,
      props.activeLocation
    ])

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
        isInitiallyExpanded={props.isInitiallyExpanded}
        shouldKeepDrawersRendered={true}
      />
    </This>
  )
}

export default TrackSection