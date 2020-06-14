import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Frame from '../Components/styled/Frame'
import Pane from '../Components/styled/Pane'
import TabContainer from '../Components/MainWindow/TabContainer'

import Alchemy from './Alchemy'
import Creatures from './Creatures'
import MainWindowHeader from './MainWindowHeader'
import Notes from './Notes'
import SearchResults from './SearchResults'
import Sounds from './Sounds'

import makeSearchCall from '../utils/makeSearchCall'

import colors from '../data/colors'

const This = styled.div`
width: 100vw;
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

  const dummyData = [
    {
      color: colors.villageBrown,
      label: "Notes",
      value: "notes",
    },
    {
      color: colors.forestGreen,
      label: "Alchemy",
      value: "alchemy",
    },
    {
      color: colors.forestGreen,
      label: "Creatures",
      value: "creatures",
    }
  ]

  const [frame1ActiveTab, setFrame1ActiveTab] = useState("notes");


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
          className="frame"
          width='100%'
        >
          <Pane
            borderColor={activeTerrainColor}
            className="pane"
          >
            <MainWindowHeader 
              mainWindowHeaderElement={mainWindowHeaderElement}
              activeLocationType={props.activeLocationType}
              setActiveLocationType={props.setActiveLocationType}
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
            <TabContainer
              activeTab={frame1ActiveTab}
              activeTerrainColor={activeTerrainColor}
              dummyData={dummyData}
              setActiveTab={setFrame1ActiveTab}
            />

          <Pane
            borderColor={activeTerrainColor}
            className="pane"
            // margin, border and padding on pane for both this pane and the MainWindowHeader one
            height={`${mainWindowBodyHeight - 64}px`} 
              isBorderTopVisible={false}
          >
              {
                frame1ActiveTab === "notes"
                ? <Notes 
              activeTerrain={activeTerrain}
              setActiveTerrain={setActiveTerrain}
            /> 
                :  <Alchemy
                  activeTerrain={activeTerrain}
                />
              }
               
          </Pane> 
      </Frame>

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

        <Frame
          className="frame"
        >
          <Pane
            borderColor={activeTerrainColor}
            className="pane"
            // margin, border and padding on pane for both this pane and the MainWindowHeader one,
            // minus the border and padding for other pane in this frame
            height={`${mainWindowBodyHeight - 64}px`}
          >
            <Creatures
              activeTerrain={activeTerrain}
            />
          </Pane>
        </Frame>

        <Frame
          className="frame"
        >
          <Pane
            borderColor={activeTerrainColor}
            className="pane"
            // margin, border and padding on pane for both this pane and the MainWindowHeader one,
            // minus the border and padding for other pane in this frame
              height={`${mainWindowBodyHeight - 64}px`}
          >
            <SearchResults 
              searchResults={searchResults}
            />
          </Pane>
        </Frame>
      </MainWindowBody>
    </This>
  )
}

export default MainWindow