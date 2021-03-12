import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import terrainTypes from '../../data/generalData/terrainTypes'

import toCapitalCase from '../../utils/toCapitalCase'

import StatBox from '../UI/Structure/StatBox'

import colors from '../../data/styles/colors'

const This = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 1;
`

const TerrainBreadCrumbs = (props) => {
  const {
    data: presentTerrainTypes,
  } = props

  return (
    <This>
     { _.map(presentTerrainTypes, presentTerrainType => {
        const terrainType = _.find(terrainTypes, {name: presentTerrainType})
        const breadCrumbColor = terrainType ? terrainType.color : colors.lightGrey

        return (
         <StatBox
           backgroundColor={breadCrumbColor}
           borderColor={breadCrumbColor}
           label={toCapitalCase(presentTerrainType)}
           key={presentTerrainType}
         />
       )
     })}
    </This>
  )
}

export default TerrainBreadCrumbs