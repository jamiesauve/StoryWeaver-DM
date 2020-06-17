import React, { useEffect, useState, } from 'react'

import styled from 'styled-components'

import _ from 'lodash'

import Frame from '../Components/MainWindow/Frame'
import Pane from '../Components/MainWindow/Pane'

import MainWindowHeader from './MainWindowHeader'

import MainWindowContextProvider from '../context/MainWindowContextProvider'

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
  // I think this will update dynamically if it changes. onWindowResize, fire the useEffect? A listener for that?
  const [mainWindowBodyHeight, setMainWindowBodyHeight] = useState(null) 

  const [numberOfAspectSlots, setNumberOfAspectSlots] = useState(5)
  const [aspectSlots, setAspectSlots] = useState([])

  const [activeLocationType, setActiveLocationType] = useState('any')
  const [activeLocation, setActiveLocation] = useState('')

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
        aspects={aspectsArray}
      />
    ))
  }

  return (
    <MainWindowContextProvider
      activeLocation={activeLocation}
      mainWindowBodyHeight={mainWindowBodyHeight}
    >
      <This>
        <Frame
            className="frame"
            width='100%'
          >
            <Pane
              borderColor={_.get(activeLocation, 'color', null)}
              className="pane"
              isBorderTopVisible={true}
            >
              <MainWindowHeader 
                activeLocationType={activeLocationType}
                setActiveLocationType={setActiveLocationType}
                activeLocation={activeLocation}
                setActiveLocation={setActiveLocation}
              />
            </Pane>
        </Frame>

        <MainWindowBody
          className="mainWindowBody"
        >
          {aspectSlots}
        </MainWindowBody>
      </This>
    </MainWindowContextProvider>
  )
}

export default MainWindow
