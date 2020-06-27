import React from 'react'
import styled from 'styled-components'

import List from './List'

import colors from '../../data/styles/colors'
import ColoredBox from '../UI/ColoredBox'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;
`

const Languages = (props) => {
  const {
    languages,
  } = props

  return (
    <This
      className="languages"
    >
      <ColoredBox
        color={colors.coastBlue}
      >
        <List
          heading="Languages"
          
          items={[languages.join(', ')]}
        />
      </ColoredBox>
    </This>
  )
}

export default Languages