import React from 'react'
import styled from 'styled-components'

import LocationType from '../Components/MainWindowHeader/LocationType'
import Terrain from '../Components/MainWindowHeader/Terrain'

import Search from '../Components/MainWindowHeader/Search'

const This = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const MainWindowHeader = (props) => {
  return (
    <This
      className="mainWindowHeader"
      ref={props.mainWindowHeaderElement}
    >
        <LocationType
          activeLocationType={props.activeLocationType}
          setActiveLocationType={props.setActiveLocationType}
        />

      <Terrain 
        activeTerrain={props.activeTerrain}
        setActiveTerrain={props.setActiveTerrain}
      />

      <Search
        setSearchQuery={props.setSearchQuery}
      />
    </This>
  )
}

export default MainWindowHeader