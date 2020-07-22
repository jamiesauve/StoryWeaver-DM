import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ColoredBox from '../UI/Style/ColoredBox'
import List from '../UI/Structure/List'

import { 
  DisplayCard, 
  Row,
  Title,
  TitleDetail,
} from '..//UI/Style/DisplayCard'

import colors from '../../data/styles/colors'

const This = styled.div``

const WikiEntryDisplayCard = (props) => {
  const {
    label,
    paragraphs,
    titleColor,
    type,
  } = props.wikiEntry

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
              items={paragraphs}
              textAlign="left"
            />
          </ColoredBox>
        </Row>
      </DisplayCard>
    </This>
  )
}

export default WikiEntryDisplayCard