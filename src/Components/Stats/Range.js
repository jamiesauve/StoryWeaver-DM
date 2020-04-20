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
        backgroundColor = {`#bcf`}
        label={combatRange}
        value={combatRange === "Ranged" ? `${ranged.normal}/${ranged.long}` : melee}
      />

      {(combatRange === "Melee" && isThrowing) 
        && <StatBox
          backgroundColor = {`#bcf`}
          label={combatRange === "Ranged" ? "Melee" : "Ranged"}
          value={combatRange === "Melee" ? `${ranged.normal}/${ranged.long}` : melee}
        />
      }
    </This>
  )
}

export default Range