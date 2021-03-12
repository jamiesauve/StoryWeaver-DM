import React from 'react'
import styled from 'styled-components'

import colors from '../../../data/styles/colors'

const Icon = styled.div`
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  width: 15px;
  height: 15px;
  border-radius: 20px;
  color: ${colors.battleRed};
  text-shadow: 2px 2px ${colors.darkBackground};

  & > div {
    font-size: 40px;
  }

  &:hover {
    cursor: pointer;
  }
`

const RemoveIcon = props => (
  <Icon
    onClick={props.onClick}
  >
    <div>
      -
    </div>
  </Icon>
)

export default RemoveIcon