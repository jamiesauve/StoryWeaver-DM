import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import shadeColor from '../../utils/shade'

import colors from '../../data/styles/colors'
import sizes from '../../data/styles/sizes'

const This = styled.div`
  display: flex;
  flex-direction: column;
`


const Heading = styled.div`
  align-self: center;

  font-weight: bold;
  font-size: ${sizes.small};
`

const ListItem = styled.div`
  font-size: ${sizes.small};
  text-align: center;
  padding: 5px 0;
`

const List = (props) => {
  const {
    areBulletsVisible,
    items,
    heading,
  } = props
  
  return (
    <This>
      {heading && 
        <Heading>
          {heading}
        </Heading>
      }
      
      {_.map(items, item => (
        <ListItem key={item}>
          {areBulletsVisible ? `- ` : ``}{item}
        </ListItem>
      ))}
    </This>
  )
}

List.defaultProps = {
  numberOfColumns: 1,
}

export default List