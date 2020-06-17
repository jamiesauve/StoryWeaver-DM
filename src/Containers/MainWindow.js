import React, { useEffect, useState } from 'react'
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

  // I think this will update dynamically if it changes. onWindowResize, fire the useEffect? A listener for that?
  const [mainWindowBodyHeight, setMainWindowBodyHeight] = useState(null) 

  const [numberOfAspectSlots, setNumberOfAspectSlots] = useState(5)
  const [aspectSlots, setAspectSlots] = useState([])

  useEffect(() => {
    const height = document.getElementsByClassName('mainWindowBody')[0].clientHeight
    
    setMainWindowBodyHeight(height)
  }, [])

  useEffect(() => {
    if (!_.isNull(mainWindowBodyHeight)) {
      const aspectSlots = generateAspectSlots(numberOfAspectSlots, aspects)
      setAspectSlots(aspectSlots)
    }
  }, [mainWindowBodyHeight])

  const generateAspectSlots = (numberOfAspectSlots, aspects) => {
    const aspectsNestedArray = Array(numberOfAspectSlots)
      .fill(null)
      .map(() =>[])

    _.forEach(aspects, aspect => {
      aspectsNestedArray[aspect.defaultAspectSlot].push(aspect)
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
              isBorderTopVisible={true}
            >
              <MainWindowHeader 
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
