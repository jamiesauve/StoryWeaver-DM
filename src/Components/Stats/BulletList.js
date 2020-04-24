import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const This = styled.div`
  flex-grow: 1;

  margin: 2px;
  border: 1px solid #777;
  border-radius: 5px;
  padding: 3px;
  
  display: flex;
  flex-direction: column;

  min-width: 30px;

  background: #222;
  color: ${props => props.color || `#fff`};
`

const Heading = styled.div`
  align-self: center;

  font-weight: bold;
  font-size: 12px;
`

const ListItem = styled.div`
  font-size: 12px;
  text-align: center;
`

const Description = (props) => {
  const {
    color,
    items,
    heading,
  } = props

  return (
    <This
      color={color}
    >
      <Heading>{heading}</Heading>
      {_.map(items, item => (
        <ListItem key={item}>
          {item}
        </ListItem>
      ))}
    </This>
  )
}

export default Description