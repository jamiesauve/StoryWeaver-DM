import React from 'react'
import styled from 'styled-components'

import theme from '../../../data/styles/theme'

const This = styled.div`
  flex-grow: 1;

  margin: 2px;
  border: 1px solid ${props => props.borderColor || theme.darkGreyText};
  border-radius: 5px;
  padding: 3px;
  
  display: flex;
  flex-direction: column;

  min-width: 30px;

  background: ${props => props.backgroundColor || theme.darkBackground};
  color: ${theme.lightGreyText};
`

const StatBoxNumber = styled.div`
  font-size: 22px;
  text-align: center;
`

const StatBoxLabel = styled.div`
  font-size: ${theme.smallTextSize};
  text-align: center;
`

const StatBoxHeading = styled.div`
  font-weight: bold;
`

const StatBox = (props) => (
  <This
    backgroundColor={props.backgroundColor}
    borderColor={props.borderColor}
  >
    <StatBoxNumber>
      {props.value}
    </StatBoxNumber>

    <StatBoxLabel>
      {props.labelHeading ? <StatBoxHeading>{props.labelHeading}</StatBoxHeading> : ``}{props.label}
    </StatBoxLabel>
  </This>
)

export default StatBox