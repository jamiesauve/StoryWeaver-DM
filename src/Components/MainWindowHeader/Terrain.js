import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Frame from '../styled/Frame'
import Pane from '../styled/Pane'

import SelectInput from '../UI/SelectInput'

import * as terrainTypes from '../../data/terrainTypes'
import toCapitalCase from '../../utils/toCapitalCase'

const This = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TerrainTitle = styled.div`
  margin-right: 10px;
`

const terrainOptions = _.concat(
  {
    label: 'All',
    value: '',
  },
  _.map(terrainTypes, (terrainType) => ({
    label: toCapitalCase(terrainType.name),
    value: terrainType.name,
  }))
)


const Terrain = (props) => {
  const terrainValue = _.find(terrainOptions, {value: props.activeTerrain})

  return (
    <This
      className="terrain"
    >
      <TerrainTitle>
        Terrain: 
      </TerrainTitle>

      <SelectInput 
        onChange={terrainObject => props.setActiveTerrain(terrainObject.value)}
        options={terrainOptions}
        value={terrainValue}
      />
    </This>
  )
}

export default Terrain