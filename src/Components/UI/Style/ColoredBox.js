import React from 'react'
import styled from 'styled-components'

import theme from '../../../data/styles/theme'

import shade from '../../../utils/shade'

const StyledBox = styled.div`
  flex-grow: 1;

  margin: 2px;
  border: 1px solid ${props => props.color || theme.lightGreyText};
  border-radius: 5px;
  padding: 3px;
  
  display: flex;
  flex-direction: column;

  min-width: 30px;

  background: ${props => shade(props.color || theme.lightGreyText, -70) || theme.darkBackground};
  color: ${theme.mediumGreyText};
`

const ColoredBox = (props) => (
  <StyledBox
    {...props}
  >
    {props.children}
  </StyledBox>
)


export default ColoredBox
