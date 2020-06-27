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

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ListItem = styled.div`
  font-size: ${sizes.small};
  text-align: center;
  padding: 5px 0;
`

const List = (props) => {
  const {
    areBulletsVisible,
    numberOfColumns,
    items,
    heading,
  } = props

  const generateColumns = () => {
    const columns = Array(numberOfColumns).fill(null).map(() => [])
  
    _.map(items, (item, index) => {
      columns[index % numberOfColumns].push(item)
    })

    return (
      <ColumnContainer>
        {_.map(columns, column => (
          <Column
            key={column[0]}
          >
            {_.map(column, item => (
              <ListItem
                key={item}
              >
                {areBulletsVisible ? `- ` : ``}{item}
              </ListItem>
            ))}
          </Column>
        ))}
      </ColumnContainer>
    )
  } 
  
  return (
    <This>
      {heading && 
        <Heading>
          {heading}
        </Heading>
      }
      
      {generateColumns()}
    </This>
  )
}

List.defaultProps = {
  numberOfColumns: 1,
}

export default List