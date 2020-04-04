import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Frame from '../Components/styled/Frame'
import Pane from '../Components/styled/Pane'

import ThemeBox from '../Components/ThemeBox'
import tracks from '../assets/tracks'

const This = styled.div`
width: 75vw;
height: 100vh;

display: flex;
flex-direction: column;
`

const MainWindowHeader = styled.div`
width: 100%;
`;

const MainWindowBody = styled.div `
display: flex;
flex-direction: row;

flex-grow: 1;
`

const copyTrack = (location) => {    
  const command = `;;play ${location}`

  navigator.clipboard.writeText(command)
}

const MainWindow = () => {
  return (
    <This>
      <MainWindowHeader>
        <Frame
          width='100%'
        >
          <Pane>
            Terrain
          </Pane>
        </Frame>
      </MainWindowHeader>
      
      <MainWindowBody>
        <Frame>
          <Pane>
            Sounds
            {/* <div>
        {_.map(tracks, (category, categoryName) => (
          <ThemeBox
            copyTrack={copyTrack}
            key={categoryName}
            label={categoryName}
            labelColor={category.labelColor}
            tracks={category.trackObjects}
          />
        ))}
        </div> */}
          </Pane>
        </Frame>

        <Frame>
          <Pane>
            Creatures
          </Pane>
        </Frame>

        <Frame>
          <Pane>
            Plants
          </Pane>

          <Pane>
            Recipes
          </Pane>
        </Frame>
      </MainWindowBody>
    </This>
  )
}

export default MainWindow