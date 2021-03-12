import React from 'react'
import styled from 'styled-components'

import colors from '../../../data/styles/colors'

import shade from '../../../utils/shade'

const StyledBox = styled.div`
  flex-grow: 1;

  margin: 2px;
  border: 1px solid ${props => props.color || colors.lightGrey};
  border-radius: 5px;
  padding: 3px;
  
  display: flex;
  flex-direction: column;

  min-width: 30px;

  background: ${props => shade(props.color || colors.lightGrey, -70) || colors.darkBackground};
  color: ${colors.mediumGrey};
`

const ColoredBox = (props) => (
  <StyledBox
    {...props}
  >
    {props.children}
  </StyledBox>
)


export default ColoredBox
