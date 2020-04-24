import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import StatBox from './StatBox'

const This = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 1;
`

const BreadCrumbList = (props) => {
  const {
    color,
    data,
  } = props

  return (
    <This>
     { _.map(data, property => (
        <StatBox
          color={color}
          label={property}
          key={property}
        />
      ))}
    </This>
  )
}

export default BreadCrumbList