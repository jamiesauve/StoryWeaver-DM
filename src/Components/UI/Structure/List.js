import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import TextWithLinksActivated from '../Structure/TextWithLinksActivated'
import Heading from '../Structure/Heading'

import theme from '../../../data/styles/theme'

const This = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: ${theme.smallTextSize};
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
                <TextWithLinksActivated
                  text={`${areBulletsVisible ? `- ` : ``}${item}`}
                />
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