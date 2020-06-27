import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import StatBox from './StatBox'

import colors from '../../data/styles/colors'

const This = styled.div`
  display: flex;
  flex-direction: row;
`

const Speed = (props) => {
  const {
    travelMethods,
  } = props

  return (
    <This>
      {_.map(travelMethods, travelMethod => (
        <StatBox
          borderColor={colors.plainsYellow}
          key={travelMethod.name}
          label={travelMethod.name}
          value={`${travelMethod.value}${!_.isNull(travelMethod.unit) ? travelMethod.unit : ``}`}
        />
      ))}
    </This>
  )
}

export default Speed