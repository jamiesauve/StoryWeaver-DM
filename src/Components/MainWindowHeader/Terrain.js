import React from 'react'
import styled from 'styled-components'

import Frame from '../styled/Frame'
import Pane from '../styled/Pane'

import SelectInput from '../UI/SelectInput'

const This = styled.div`
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

      <SelectInput 
        options={[{label: 'Desert', value: 'desert'}]}
        value={{label: 'Desert', value: 'desert'}}
      />
    </This>
  )
}

export default Terrain