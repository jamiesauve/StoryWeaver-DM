import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import sizes from '../../../data/styles/sizes'

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
  text-align: ${props => props.textAlign || `center`};
  padding: 5px;
`

const List = (props) => {
  const {
    areBulletsVisible,
    numberOfColumns,
    items,
    heading,
    textAlign,
  } = props

  const generateColumns = () => {
    const columns = Array(numberOfColumns).fill(null).map(() => [])
  
    _.map(items, (item, index) => {
      columns[index % numberOfColumns].push(item)
    })

    return (
      <ColumnContainer>
        {_.map(columns, (column, columnIndex) => (
          <Column
            key={columnIndex}
          >
            {_.map(column, (item, itemIndex) => (
              <ListItem
                key={itemIndex}
                textAlign={textAlign}
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