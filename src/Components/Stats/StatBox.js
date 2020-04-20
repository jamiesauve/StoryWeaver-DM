import React from 'react'
import styled from 'styled-components'

const This = styled.div`
  flex-grow: 1;

  margin: 2px;
  border: 1px solid #777;
  border-radius: 5px;
  padding: 3px;
  
  display: flex;
  flex-direction: column;

  min-width: 30px;

  background: ${props => props.backgroundColor || `#fff`};
  color: #222;
`

const StatBoxNumber = styled.div`
  font-size: 20px;
  text-align: center;
`

const StatBoxLabel = styled.div`
  font-size: 12px;
  text-align: center;
`

const StatBoxHeading = styled.div`
  font-weight: bold;
`

const StatBox = (props) => (
  <This
    backgroundColor={props.backgroundColor}
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