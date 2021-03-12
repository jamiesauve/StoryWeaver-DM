import React from 'react'
import styled from 'styled-components'

import colors from '../../data/styles/colors'
import sizes from '../../data/styles/sizes'

const This = styled.div`
  margin-left: 10px;
  
  display: flex;
  flex-direction: row;
  
  font-size: ${sizes.small};
  font-weight: bold;
  color: ${colors.villageBrown};
`

const Weight = (props) => {
  const {
    data,
  } = props

  return (
    <This>
      {data} lbs
    </This>
  )
}

export default Weight