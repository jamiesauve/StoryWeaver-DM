import React from 'react'
import styled from 'styled-components'

import Frame from '../Components/styled/Frame'
import Pane from '../Components/styled/Pane'

import TerrainDropdown from '../Components/Terrain/TerrainDropdown'

const This = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TerrainTitle = styled.div`
  margin-right: 10px;
`

const Terrain = (props) => {
  return (
    <This
        className="terrain"
        ref={props.TerrainElement}
      >
        <TerrainTitle>
          Terrain: 
        </TerrainTitle>

        <TerrainDropdown 
          onChange={(e) => console.log('change', e)}
        />
      </This>
  )
}

export default Terrain