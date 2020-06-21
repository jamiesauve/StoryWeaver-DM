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
  color: ${props => props.color || colors.darkGrey};
`

const InlineStat = (props) => {
  const {
    color,
    label,
    value,
  } = props

  return (
    <This
      color={color}
    >
      {label}: {value}
    </This>
  )
}

export default InlineStat