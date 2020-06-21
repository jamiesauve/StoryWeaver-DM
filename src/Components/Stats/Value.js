import React from 'react'
import styled from 'styled-components'

import colors from '../../data/styles/colors'
import sizes from '../../data/styles/sizes'

const This = styled.div`
  margin-left: 10px;
  
  display: flex;
  flex-direction: row;
  
  font-size: ${sizes.small};
  font-weight: bold;
  color: ${props => props.color};
`

const Value = (props) => {
  const {
    data,
  } = props

  const unitColor = data.unit === "gp"
    ? colors.plainsYellow
    : data.unit === "sp"
      ? colors.darkGrey
      : colors.villageBrown

  return (
    <This
      color={unitColor}
    >
      {data.amount}{data.unit}{data.partLabel ? ` per ${data.partLabel}` : ``}
    </This>
  )
}

export default Value