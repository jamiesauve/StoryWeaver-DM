import React from 'react'
import styled from 'styled-components'

import StatBox from './StatBox'

const This = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

const Range = (props) => {
  const {
    borderColor,
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
        borderColor={props.borderColor}
        label={combatRange}
        value={combatRange === "Ranged" ? `${ranged.normal}/${ranged.long}` : melee}
      />

      {(combatRange === "Melee" && isThrowing) 
        && <StatBox
          borderColor={props.borderColor}
          label={combatRange === "Ranged" ? "Melee" : "Ranged"}
          value={combatRange === "Melee" ? `${ranged.normal}/${ranged.long}` : melee}
        />
      }
    </This>
  )
}

export default Range