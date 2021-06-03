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
  color: ${props => props.colors.villageBrown};
`

const Weight = (props) => {
  const colors = useRecoilValue(colorsAtom)

  const {
    data,
  } = props

  return (
    <This
      colors={colors}
    >
      {data} lbs
    </This>
  )
}

export default Weight