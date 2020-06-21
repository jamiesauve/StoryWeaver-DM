import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import colors from '../../data/styles/colors'
import sizes from '../../data/styles/sizes'

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

const Table = styled.div `
  flex-grow: 1;

  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
`

const ColumnLeftAligner = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`

const ListItem = styled.div`
  font-size: ${sizes.small};
  text-align: center;
  padding: 5px 0;
`

const BulletList = (props) => {
  const {
    borderColor,
    items,
    heading,
  } = props

  const [itemsLeft, itemsRight] = _.chunk(items, Math.ceil(items.length / 2))
  
  return (
    <This
      borderColor={borderColor}
    >
      {heading && 
        <Heading>
          {heading}
        </Heading>
      }
      
      <Table>
        <Column>
          <ColumnLeftAligner>
            {_.map(itemsLeft, item => (
              <ListItem key={item}>
                {item}
              </ListItem>
            ))}
          </ColumnLeftAligner>
        </Column>

        <Column>
          <ColumnLeftAligner>
            {_.map(itemsRight, item => (
              <ListItem key={item}>
                {item}
              </ListItem>
            ))}
          </ColumnLeftAligner>
        </Column>
      </Table>
    </This>
  )
}

BulletList.defaultProps = {
  numberOfColumns: 1,
}

export default BulletList