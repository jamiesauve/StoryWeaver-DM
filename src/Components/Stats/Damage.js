import React from 'react'
import styled from 'styled-components'

import StatBox from '../UI/Structure/StatBox'

import colors from '../../data/styles/colors'

const This = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

const Damage = (props) => {
  const {
    base,
    type,
    twoHanded,
  } = props.data

  return (
    <This>
      <StatBox
        borderColor={colors.battleRed}
        label={type}
        value={base}
      />

      {twoHanded 
        && <StatBox
        borderColor={colors.battleRed}
        label={twoHanded.type}
        value={`(2H) ${twoHanded.base}`}
      />
      }
    </This>
  )
}

export default Damage