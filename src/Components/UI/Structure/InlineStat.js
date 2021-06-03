import React from 'react'
import styled from 'styled-components'

import theme from '../../../data/styles/theme'

const This = styled.div`
  margin: ${props => props.margin || `none`};
  
  display: flex;
  flex-direction: row;
  
  font-size: ${theme.smallTextSize};
  font-weight: ${props => props.fontWeight || `normal`};
  font-style: ${props => props.fontStyle || `normal`};
  color: ${props => props.color || theme.darkGreyText};
`

const InlineStat = (props) => {
  const {
    color,
    label,
    margin,
    fontStyle,
    fontWeight,
    value,
  } = props

  return (
    <This
      color={color}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      margin={margin}
    >
      {label}: {value}
    </This>
  )
}

export default InlineStat