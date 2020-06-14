import React, { useState, useEffect, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import MainWindow from './Containers/MainWindow'

import colors from './data/colors'
import sizes from './data/sizes'
import * as terrainTypes from './data/terrainTypes'

const This = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  align-content: flex-start;
  
  background-color: ${colors.mediumBackground};

  font-family: sans-serif;
  font-size: ${sizes.default};
  color: ${colors.lightGrey};
`


function App() {
  const [activeTerrain, setActiveTerrain] = useState('')
  const [activeLocationType, setActiveLocationType] = useState('terrain')
  const [activeTerrainColor, setActiveTerrainColor] = useState('')

  useEffect(() => {
    const activeTerrainColor = activeTerrain 
      ? _.find(terrainTypes, {name: activeTerrain}).color
      : ''

    setActiveTerrainColor(activeTerrainColor)
  }, [activeTerrain])

  return (
    <This
      className="App"
    >
      <MainWindow 
        activeTerrain={activeTerrain}
        activeLocationType={activeLocationType}
        setActiveLocationType={setActiveLocationType}
        setActiveTerrain={setActiveTerrain}
        activeTerrainColor={activeTerrainColor}
      />
    </This>
  );
}

export default App
