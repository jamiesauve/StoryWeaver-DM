import React from 'react'
import styled from 'styled-components'

import DiceRoller from '../Components/MainWindowHeader/DiceRoller'
import LocationType from '../Components/MainWindowHeader/LocationType'
import Search from '../Components/MainWindowHeader/Search'
import Terrain from '../Components/MainWindowHeader/Terrain'

const This = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > div:not(:first-child) {
    margin-left: 20px;
  }
`

const RightContainer = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;

  & > div {
    margin-left: 20px;
  }
`



const MainWindowHeader = (props) => {
  return (
    <This
      className="mainWindowHeader"
      ref={props.mainWindowHeaderElement}
    >
      <LeftContainer>
        <LocationType
          activeLocationType={props.activeLocationType}
          setActiveLocationType={props.setActiveLocationType}
        />

        <Terrain 
          activeTerrain={props.activeTerrain}
          setActiveTerrain={props.setActiveTerrain}
        />

        <DiceRoller />
      </LeftContainer>

      <RightContainer>
        <Search
          setSearchQuery={props.setSearchQuery}
        />
      </RightContainer>
    </This>
  )
}

export default MainWindowHeader