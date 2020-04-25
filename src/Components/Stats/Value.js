import React from 'react'
import styled from 'styled-components'

import sizes from '../../data/sizes'

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
    ? "#fd0"
    : data.unit === "sp"
      ? "#ddd"
      : "fdb"

  return (
    <This
      color={unitColor}
    >
      {data.amount}{data.unit}{data.part ? ` per ${data.part}` : ``}
    </This>
  )
}

export default Value