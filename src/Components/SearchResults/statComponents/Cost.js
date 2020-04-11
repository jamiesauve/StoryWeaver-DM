import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const This = styled.div`
  margin-left: 10px;
  
  display: flex;
  flex-direction: row;
  
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color};
`

const Cost = (props) => {
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
      {data.amount}{data.unit}
    </This>
  )
}

export default Cost