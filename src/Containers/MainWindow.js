import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { 
  useRecoilState,
 } from 'recoil'

import {
  activeLocationAtom,
  activeLocationTypeAtom,
} from '../state/atoms/generalAtoms'

import theme from '../data/styles/theme'

import Frame from '../Components/MainWindow/Frame'
import Pane from '../Components/MainWindow/Pane'

import MainWindowHeader from './MainWindowHeader'
import MainWindowBody from './MainWindowBody'

const This = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  align-content: flex-start;
  
  background-color: ${theme.mediumBackground};

  font-family: sans-serif;
  font-size: ${theme.mediumTextSize}; // TODO: make default small text
  color: ${theme.lightGreyText};
`

const MainWindowContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

const MainWindow = () => {
  const [activeLocationType, setActiveLocationType] = useRecoilState(activeLocationTypeAtom)
  const [activeLocation, setActiveLocation] = useRecoilState(activeLocationAtom)

  const setActiveLocationTypeAndResetActiveLocation = (activeLocationType) => {
    setActiveLocation({})
    setActiveLocationType(activeLocationType)
  }

  return (
    <This>
      <MainWindowContainer>
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
                setActiveLocationType={setActiveLocationTypeAndResetActiveLocation}
                activeLocation={activeLocation}
                setActiveLocation={setActiveLocation}
              />
            </Pane>
        </Frame>

        <MainWindowBody />
        </MainWindowContainer>
    </This>
  )
}

export default MainWindow
