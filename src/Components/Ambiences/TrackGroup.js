import React, { useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { useRecoilValue } from 'recoil';

import { mp3sAtom } from '../../state/atoms/staticDataAtoms';


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

const TrackContainer = styled.div`
  // TODO: add breakpoints so this shows up properly. Or redo it in a non-hacky way.
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 113%;
  overflow: hidden;
`

const TrackLabel = styled.div`
  width: 40%;
  z-index: 1;
  background: #333;
  height: 25px;
  line-height: 25px;
`

const TrackControls = styled.div`
  width: 60%;
  height: 25px;
  z-index: 0;

  audio {
    margin-left: -18px;
    overflow: hidden;
    width: 110%;
    height: 100%;
    padding: 0;
  }
  
  audio::-webkit-media-controls-panel {
    background-color: #333;
  }

  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display {
    display: none;
  }
`

const TrackGroup =  props => {
  const mp3s = useRecoilValue(mp3sAtom)

  return (
    <This>
      <TrackGroupBody>
        {_.chain(props.tracks)
          .filter(trackObject => {
            if (_.isEmpty(trackObject.excludeFrom)) return true;

            return !_.includes(trackObject.excludeFrom, props.activeLocation)
          })
          .map(track => {
            return (
              <TrackTitle
                key={`${track.location}-${props.categoryTitle}-${track.title}`}
                // onClick={() => handleClickTrack(track.title, track.location, track.isMyOwnSong, track.modifyVolumeBy)}
              >
                <TrackContainer>
                  <TrackLabel>
                    {track.title}
                  </TrackLabel>

                  <TrackControls>
                    <audio controls loop>
                      <source src={mp3s[`${track.location}.mp3`]} type="audio/mpeg" />
                    </audio>
                  </TrackControls>
                </TrackContainer>
              </TrackTitle>
          )})
          .value()
        }
      </TrackGroupBody>
    </This>
  )
}

export default TrackGroup