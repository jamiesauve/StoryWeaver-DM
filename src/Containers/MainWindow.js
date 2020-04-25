import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Frame from '../Components/styled/Frame'
import Pane from '../Components/styled/Pane'

import Creatures from './Creatures'
import MainWindowHeader from './MainWindowHeader'
import Alchemy from './Alchemy'
import SearchResults from './SearchResults'
import Sounds from './Sounds'

import makeSearchCall from '../utils/makeSearchCall'

const This = styled.div`
width: 75vw;
height: 100vh;

display: flex;
flex-direction: column;
`

const MainWindowBody = styled.div`
display: flex;
flex-direction: row;
justify-content: stretch;

flex-grow: 1;
`

const MainWindow = (props) => {
  const {
    activeTerrain,
    activeTerrainColor,
    setActiveTerrain
  } = props;

  const [headerHeight, setHeaderHeight] = useState(0)
  const [mainWindowBodyHeight, setMainWindowBodyHeight] = useState(0) 
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const mainWindowHeaderElement = useRef('')

  useEffect(() => {
    // TODO clean this up - using a ref for one and getElementsByClassName for the other
    setHeaderHeight(mainWindowHeaderElement.current.clientHeight)
    const appHeight = document.getElementsByClassName('App')[0].clientHeight
    
    setMainWindowBodyHeight(appHeight - headerHeight)
  }, [mainWindowHeaderElement.current])

  useEffect(() => {
    const runSearch = async (searchQuery) => {
      if (searchQuery) {
        const result = await(makeSearchCall(searchQuery))

        setSearchResults(result)
      }
    }

    runSearch(searchQuery)
  }, [searchQuery])

  return (
    <This>
      <Frame
          width='100%'
        >
          <Pane
            borderColor={activeTerrainColor}
          >
            <MainWindowHeader 
              mainWindowHeaderElement={mainWindowHeaderElement}
              activeTerrain={activeTerrain}
              setActiveTerrain={setActiveTerrain}
              setSearchQuery={setSearchQuery}
            />
          </Pane>
      </Frame>

      <MainWindowBody
        className="mainWindowBody"
      >
        <Frame
          className="frame"
          
        >
          <Pane
            borderColor={activeTerrainColor}
            className="pane"
            // margin, border and padding on pane for both this pane and the MainWindowHeader one
            height={`${mainWindowBodyHeight - 64}px`} 
          >
            <Sounds 
              activeTerrain={activeTerrain}
            />
          </Pane>
        </Frame>

        <Frame>
          <Pane
            borderColor={activeTerrainColor}
          >
            <Creatures
              activeTerrain={activeTerrain}
            />
          </Pane>
        </Frame>

        <Frame>
          <Pane
            borderColor={activeTerrainColor}
          >
            <SearchResults 
              searchResults={searchResults}
            />
          </Pane>

          <Pane
            borderColor={activeTerrainColor}
          >
            <Alchemy
              activeTerrain={activeTerrain}
            />
          </Pane>
        </Frame>
      </MainWindowBody>
    </This>
  )
}

export default MainWindow