import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import theme from '../../data/styles/theme'

import {
  colorsAtom,
} from '../../state/atoms/staticDataAtoms'

const This = styled.div`
  margin-left: 10px;
  
  display: flex;
  flex-direction: row;
  
  font-size: ${theme.smallTextSize};
  font-weight: bold;
  color: ${props => props.color};
`

const Value = (props) => {
  const colors = useRecoilValue(colorsAtom)
  
  const {
    data,
  } = props

  const unitColor = data.unit === "gp"
    ? colors.plainsYellow
    : data.unit === "sp"
      ? colors.darkGreyText
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