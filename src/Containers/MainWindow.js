import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Frame from '../Components/styled/Frame'
import Pane from '../Components/styled/Pane'
import TabContainer from '../Components/MainWindow/TabContainer'

import MainWindowHeader from './MainWindowHeader'

// Aspects
import Ambiences from './Ambiences'
import Creatures from './Creatures'
// Gameplay
import Notes from './Notes'
// NPCs
import Reagents from './Reagents'
// Recipes
import Search from './Search'

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

  const mainWindowHeaderElement = useRef('')

  const dummyData = [
    {
      color: colors.villageBrown,
      label: "Notes",
      value: "notes",
    },
    {
      color: colors.forestGreen,
      label: "Reagents",
      value: "reagents",
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
                />
                :  <Reagents
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
              <Ambiences 
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
              <Search />
            </Pane>
          </Frame>
        </MainWindowBody>
    </This>
  )
}

export default MainWindow