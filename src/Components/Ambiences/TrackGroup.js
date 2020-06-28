import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { startTrack, } from '../../ambienceBotInterface/apiCalls'

const This = styled.div``

const TrackGroupBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: #333;
`

const TrackTitle = styled.div`
  padding: 5px 0;

  font-size: 16px;

  text-align: center;

  &:hover {
    background-color: #444;
    cursor: pointer;
  }
`

const TrackGroup =  props => {
  const copyTrack = (location) => {    
    const command = `;;play ${location}`
    navigator.clipboard.writeText(command)
  }

  const playTrack = async(trackTitle,location) => {
    const result = await startTrack(trackTitle, location)
  }

  const handleClickTrack = (trackTitle, location) => {
    // copyTrack(location)
    playTrack(trackTitle, location)
  }

  return (
    <This>
      <TrackGroupBody>
        {_.chain(props.tracks)
          .filter(trackObject => {
            if (_.isEmpty(trackObject.excludeFrom)) return true;

            return !_.includes(trackObject.excludeFrom, props.activeLocation)
          })
          .map(track => (
              <TrackTitle
                key={`${track.location}-${props.categoryTitle}-${track.title}`}
                onClick={() => handleClickTrack(track.title, track.location)}
              >
                {track.title}
              </TrackTitle>
          ))
          .value()
        }
      </TrackGroupBody>
    </This>
  )
}

export default TrackGroup