import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ColoredBox from '../UI/Style/ColoredBox'
import List from '../UI/Structure/List'
import EditableList from '../UI/Action/EditableList'
import EditableInput from '../UI/Action/EditableInput'

import { 
  DisplayCard, 
  Row,
} from '..//UI/Style/DisplayCard'

import colors from '../../data/styles/colors'

const This = styled.div``

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

                  <EditableInput // TODO: create a color picker here
                    alignItems="center"
                    heading="Color"
                    placeholder={placeholders.titleColor}
                    type="text"
                    value={wikiEntry.titleColor}
                    inputWidth="20px"
                  />
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