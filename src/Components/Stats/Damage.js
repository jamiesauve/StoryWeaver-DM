import React from 'react'
import styled from 'styled-components'

import StatBox from './StatBox'

const This = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

const Damage = (props) => {
  const {
    base,
    borderColor,
    type,
    twoHanded,
  } = props.data

  return (
    <This>
      <StatBox
        borderColor={props.borderColor}
        label={type}
        value={base}
      />

      {twoHanded 
        && <StatBox
        borderColor={props.borderColor}
        label={twoHanded.type}
        value={`(2H) ${twoHanded.base}`}
      />
      }
    </This>
  )
}

export default Damage