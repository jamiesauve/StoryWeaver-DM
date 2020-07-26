import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ColoredBox from '../UI/Style/ColoredBox'
import List from '../UI/Structure/List'

import { 
  DisplayCard, 
  Row,
} from '..//UI/Style/DisplayCard'

import TextWithLinksActivated from '../UI/Structure/TextWithLinksActivated'

const This = styled.div``

const WikiEntryDisplayCard = (props) => {
  const {
    paragraphs,
    titleColor,
  } = props.wikiEntry

  const paragraphsWithLinksActivated = _.map(paragraphs, paragraph => <TextWithLinksActivated text={paragraph} />)

  return (
    <This>
      <DisplayCard>        
        <Row
          justifyContent="flex-start"
          padding="0 0 5px 0"
        >
          <ColoredBox
            color={titleColor}
          >
            <List
              items={paragraphsWithLinksActivated}
              textAlign="left"
            />
          </ColoredBox>
        </Row>
      </DisplayCard>
    </This>
  )
}

export default WikiEntryDisplayCard