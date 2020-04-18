import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import StatBox from './StatBox'

const This = styled.div`
  display: flex;
  flex-direction: row;
`

const Special = (props) => {
  const {
    data,
  } = props

  return (
    <This>
     { _.map(data, property => (
        <StatBox
          backgroundColor = {`#fbf`}
          label={property}
        />
      ))}
    </This>
  )
}

export default Special