import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import StatBox from './StatBox'

import colors from '../../data/styles/colors'

const This = styled.div`
  display: flex;
  flex-direction: row;
`

const Senses = (props) => {
  const {
    data: senses,
  } = props

  return (
    <This>
      {_.map(senses, sense => (
        <StatBox
          borderColor={colors.exploringTeal}
          label={sense.name}
          value={`${sense.value}${!_.isNull(sense.unit) ? sense.unit : ``}`}
        />
      ))}
    </This>
  )
}

export default Senses