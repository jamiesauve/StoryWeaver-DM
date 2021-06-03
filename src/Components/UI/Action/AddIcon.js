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
  color: ${theme.addBackground};
  text-shadow: 2px 2px ${theme.darkBackground};

  & > div {
    font-size: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`

const AddIcon = props => (
  <Icon
    onClick={props.onClick}
  >
    <div>
      +
    </div>
  </Icon>
)

export default AddIcon