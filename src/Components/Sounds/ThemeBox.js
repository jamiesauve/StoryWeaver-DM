import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import SectionTitle from '../styled/SectionTitle'

const This = styled.div`
  margin-top: 10px;
  
  border-radius: ${props => props.isExpanded ? `5px 5px 0 0` : `5px`};
  box-shadow: 0 0 3px #777;

  align-items: center;
`

const ThemeTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 7px;
  background-color: ${props => props.titleColor};
`

const ThemeBoxBody = styled.div`
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

const ThemeBox =  props => {
  const handleClickTitle = () => 
  {
    props.isExpanded
    ? props.setExpandedTheme('')
    : props.setExpandedTheme(props.title)
  }

  const handleClickTrack = (location) => {
    props.copyTrack(location)
    props.setExpandedTheme('')
  }

  return (
    <This
      className="themeBox"
      isExpanded={props.isExpanded}
    >
      <ThemeTitle
        className="themeTitle"
        titleColor={props.titleColor}
        onClick={handleClickTitle}
      >
        <SectionTitle>
        {props.title}
        </SectionTitle>
      </ThemeTitle>

        {
          props.isExpanded
          && <ThemeBoxBody>
            {_.map(props.tracks, (track) => (
                <TrackTitle
                  key={`${track.location}-${props.title}`}
                  onClick={() => handleClickTrack(track.location)}
                >
                  {track.title}
               </TrackTitle>
            ))}
          </ThemeBoxBody>
        }
    </This>
  )
}

export default ThemeBox