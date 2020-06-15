import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import _ from 'lodash'

import Frame from '../Components/MainWindow/Frame'
import Pane from '../Components/MainWindow/Pane'

import MainWindowHeader from './MainWindowHeader'

import AspectSlot from '../Components/MainWindow/AspectSlot'

import aspects from '../utils/getAspectsAsArray'

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

  const [numberOfAspectSlots, setNumberOfAspectSlots] = useState(4)
  const [aspectSlots, setAspectSlots] = useState([])

  useEffect(() => { // can this become a custom hook?
    // TODO clean this up - using a ref for one and getElementsByClassName for the other
    setHeaderHeight(mainWindowHeaderElement.current.clientHeight)
    const appHeight = document.getElementsByClassName('App')[0].clientHeight
    
    setMainWindowBodyHeight(appHeight - headerHeight)
  }, [mainWindowHeaderElement.current])

  useEffect(() => {
    const aspectSlots = generateAspectSlots(numberOfAspectSlots, aspects)
    setAspectSlots(aspectSlots)
  }, [])

  const generateAspectSlots = (numberOfAspectSlots, aspects) => {
    const aspectsNestedArray = Array(numberOfAspectSlots)
      .fill(null)
      .map(() =>[])

    _.forEach(Object.values(aspects), (aspect, index) => {
      aspectsNestedArray[index % numberOfAspectSlots].push(aspect)
    })

    return aspectsNestedArray.map(aspectsArray => (
      <AspectSlot
        activeTerrain={activeTerrain}
        aspects={aspectsArray}
        mainWindowBodyHeight={mainWindowBodyHeight}
      />
    ))
  }

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
          {aspectSlots}
        </MainWindowBody>
    </This>
  )
}

export default MainWindow
