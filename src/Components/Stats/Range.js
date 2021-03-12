import React from 'react'
import styled from 'styled-components'

import StatBox from '../UI/Structure/StatBox'

import colors from '../../data/styles/colors'

const This = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

const Range = (props) => {
  const {
    combatRange,
    data,
  } = props

  const {
    isThrowing,
    melee,
    ranged,
  } = data

  return (
    <This>
      <StatBox
        borderColor={colors.weatherBlue}
        label={combatRange}
        value={combatRange === "Ranged" ? `${ranged.normal}/${ranged.long}` : melee}
      />

      {(combatRange === "Melee" && isThrowing) 
        && <StatBox
          borderColor={colors.weatherBlue}
          label={combatRange === "Ranged" ? "Melee" : "Ranged"}
          value={combatRange === "Melee" ? `${ranged.normal}/${ranged.long}` : melee}
        />
      }
    </This>
  )
}

export default Range