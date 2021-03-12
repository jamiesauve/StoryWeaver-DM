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
    borderColor,
    breadCrumbs,
  } = props

  return (
    <This>
     { _.map(breadCrumbs, breadCrumb => (
        <StatBox
          borderColor={borderColor}
          label={breadCrumb}
          key={breadCrumb}
        />
      ))}
    </This>
  )
}

export default BreadCrumbList