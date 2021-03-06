import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const This = styled.div`
  margin-top: 10px;
  
  border-radius: ${props => props.isExpanded ? `5px 5px 0 0` : `5px`};
  box-shadow: 0 0 3px #777;

  align-items: center;
`

const SectionTitle = styled.div`
  margin-bottom: 7px;
  font-weight: bold;
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

  const copyTrack = (location) => {    
    const command = `;;play ${location}`
    navigator.clipboard.writeText(command)
  }

  const handleClickTrack = (location) => {
    copyTrack(location)
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