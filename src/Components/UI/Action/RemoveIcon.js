import React from 'react'
import styled from 'styled-components'

import theme from '../../../data/styles/theme'

const Icon = styled.div`
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  width: 15px;
  height: 15px;
  border-radius: 20px;
  color: ${theme.removeBackground};
  text-shadow: 2px 2px ${theme.darkBackground};

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