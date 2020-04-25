import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import colors from '../../data/colors'
import sizes from '../../data/sizes'

const This = styled.div`
  flex-grow: 1;

  margin: 2px;
  border: 1px solid ${props => props.borderColor || colors.darkGrey};
  border-radius: 5px;
  padding: 3px;
  
  display: flex;
  flex-direction: column;

  min-width: 30px;

  background: ${colors.darkBackground};
  color: ${colors.lightGrey};
`

const Heading = styled.div`
  align-self: center;

  font-weight: bold;
  font-size: ${sizes.small};
`

const ListItem = styled.div`
  font-size: ${sizes.small};
  text-align: center;
`

const Description = (props) => {
  const {
    borderColor,
    items,
    heading,
  } = props

  return (
    <This
      borderColor={borderColor}
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