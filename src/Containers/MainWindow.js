import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Frame from '../Components/styled/Frame'
import Pane from '../Components/styled/Pane'

import MainWindowHeader from './MainWindowHeader'
import Sounds from './Sounds'

const This = styled.div`
width: 75vw;
height: 100vh;

display: flex;
flex-direction: column;
`

const MainWindowBody = styled.div `
display: flex;
flex-direction: row;

height: 100%;

flex-grow: 1;
`

const MainWindow = () => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [mainWindowBodyHeight, setMainWindowBodyHeight] = useState(0) 

  const TerrainElement = useRef('')

  useEffect(() => {
    // clean this up; wll also need to have the height update on window resize (electron?)
    setHeaderHeight(TerrainElement.current.clientHeight)
    const appHeight = document.getElementsByClassName('App')[0].clientHeight
    
    setMainWindowBodyHeight(appHeight - headerHeight - 32) // margins
  }, [TerrainElement.current])

  return (
    <This>
      <Frame
          width='100%'
        >
          <Pane>
            <MainWindowHeader 
              TerrainElement={TerrainElement}
            />
          </Pane>
      </Frame>

      <MainWindowBody
        className="mainWindowBody"
      >
        <Frame
          maxHeight={`${mainWindowBodyHeight}px`}
        >
          <Pane>
            <Sounds />
          </Pane>
        </Frame>

        <Frame>
          <Pane>
            Creatures
          </Pane>
        </Frame>

        <Frame>
          <Pane>
            Search Results
          </Pane>

          <Pane>
            Plants
          </Pane>
        </Frame>
      </MainWindowBody>
    </This>
  )
}

export default MainWindow