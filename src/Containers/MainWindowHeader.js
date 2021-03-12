import React from 'react'
import styled from 'styled-components'

import DiceRoller from '../Components/MainWindowHeader/DiceRoller'
import LocationType from '../Components/MainWindowHeader/LocationType'
import LocationDropdown from '../Components/MainWindowHeader/LocationDropdown'

import places from '../data/generalData/places'
import terrainTypes from '../data/generalData/terrainTypes'


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
  justify-content: flex-end;

  & > div {
    margin-left: 20px;
  }
`



const MainWindowHeader = (props) => {

  return (
    <This
      className="mainWindowHeader"
    >
      <LeftContainer>
        <LocationType
          activeLocationType={props.activeLocationType}
          setActiveLocationType={props.setActiveLocationType}
        />

        {
          props.activeLocationType === "terrain"
          && <LocationDropdown
            activeLocation={props.activeLocation}
            setActiveLocation={props.setActiveLocation}
            locationOptions={terrainTypes}
            title="Terrain"
          />
        } 

{
          props.activeLocationType === "place"
          && <LocationDropdown
            activeLocation={props.activeLocation}
            setActiveLocation={props.setActiveLocation}
            locationOptions={places}
            title="Place"
          />
        } 

      </LeftContainer>

      <RightContainer>
        <DiceRoller />
      </RightContainer>
    </This>
  )
}

export default MainWindowHeader