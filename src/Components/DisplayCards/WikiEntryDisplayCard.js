import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ColoredBox from '../UI/Style/ColoredBox'
import List from '../UI/Structure/List'
import ColorPicker from '../UI/Action/ColorPicker/ColorPicker'
import EditableList from '../UI/Action/EditableList'
import EditableInput from '../UI/Action/EditableInput'

import Heading from '../UI/Structure/Heading'

import { 
  DisplayCard, 
  Row,
} from '..//UI/Style/DisplayCard'

import colors from '../../data/styles/colors'

const This = styled.div``

const PositionWrapper = styled.div`
  align-self: stretch;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const WikiEntryStatsSection = styled.div`
  padding: 5px;
`

const WikiEntryDisplayCard = (props) => {
  const {
    isEditable,
    isInCreateMode,
    placeholders,
    wikiEntry,
  } = props
  
  const paragraphs = wikiEntry.paragraphs || []
  const titleColor = wikiEntry.titleColor || colors.mountainsTeal

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
            {
              isEditable 
              && <WikiEntryStatsSection>
                <Row
                  className="row"
                  padding="0 0 5px 0"
                >
                  <EditableInput
                    flexGrow={1}
                    heading="Associated Locations"
                    placeholder={placeholders.locationTags}
                    type="text"
                    value={wikiEntry.locationTags}
                  />
                </Row>

                <Row
                  className="row"
                  padding="0 0 5px 0"
                >
                  <EditableInput // TODO: replace with a select
                    flexGrow={1}
                    heading={"Type"}
                    placeholder={placeholders.type}
                    type="text"
                    value={wikiEntry.type}
                  />

                  <PositionWrapper>
                    <Heading>
                      Color
                    </Heading>

                    <ColorPicker
                      onChange={(color) => console.log('new color: ', color)}
                      initialValue={colors.mountainsTeal}
                    />
                  </PositionWrapper>
                </Row>

                <Row
                  className="row"
                  padding="0 0 5px 0"
                >
                  <EditableInput // TODO: replace with a multi
                    flexGrow={1}
                    heading="Title"
                    placeholder={placeholders.label}
                    type="text"
                    value={wikiEntry.label}
                  />
                </Row>
              </WikiEntryStatsSection>
            }
            {
              isEditable
              ? <EditableList 
                heading="About"
                items={paragraphs}
                placeholder={placeholders.paragraphs}
              />
              : <List
              items={paragraphs}
              textAlign="left"
            />
            }
          </ColoredBox>
        </Row>
      </DisplayCard>
    </This>
  )
}

export default WikiEntryDisplayCard