import React, { useState, } from 'react'

import styled from 'styled-components'

import _ from 'lodash'

import Frame from '../Components/MainWindow/Frame'
import Pane from '../Components/MainWindow/Pane'

import MainWindowHeader from './MainWindowHeader'
import MainWindowBody from './MainWindowBody'

import MainWindowContextProvider from '../context/MainWindowContextProvider'

import useWindowResize from '../hooks/UseWindowResize'

const This = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`



const MainWindow = (props) => {
  const windowHeight = useWindowResize() 

  const [activeLocationType, setActiveLocationType] = useState('any')
  const [activeLocation, setActiveLocation] = useState('')



  return (
    <MainWindowContextProvider
      activeLocation={activeLocation}
      windowHeight={windowHeight}
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
          windowHeight={windowHeight}
        />
      </This>
    </MainWindowContextProvider>
  )
}

export default MainWindow
