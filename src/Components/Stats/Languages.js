import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Description from './Description'

import colors from '../../data/colors'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;
`

const Languages = (props) => {
  const {
    data: languages,
  } = props

  return (
    <This
      className="languages"
    >
      <Description
        borderColor={colors.coastBlue}
        text={languages.join(", ")}
        heading="Languages"
      />
    </This>
  )
}

export default Languages