import React from 'react'
import styled from 'styled-components'

import SelectInput from '../UI/SelectInput'

const This = styled.div`
  width: 250px;
`

const TerrainDropdown = (props) => {
  return (
    <This
      className="terrainDropdown"
    >
      <SelectInput 
        options={[{label: 'Desert', value: 'desert'}]}
        value={{label: 'Desert', value: 'desert'}}
      />
    </This>
  )
}

export default TerrainDropdown