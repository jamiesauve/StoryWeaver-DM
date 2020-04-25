import React from 'react'
import styled from 'styled-components'

const This = styled.div`
  margin-left: 10px;
  
  display: flex;
  flex-direction: row;
  
  font-size: 14px;
  font-weight: bold;
  color: #ca7;
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