import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { useRecoilValue } from 'recoil'

import ColoredBox from '../UI/Style/ColoredBox'
import List from '../UI/Structure/List'
import ColorPicker from '../UI/Action/ColorPicker/ColorPicker'
import EditableList from '../UI/Action/EditableList'
import EditableInput from '../UI/Action/EditableInput'
import SelectInput from '../UI/Action/SelectInput'

import Heading from '../UI/Structure/Heading'

import { 
  DisplayCard, 
  Row,
} from '..//UI/Style/DisplayCard'


import colors from '../../data/styles/colors'

const This = styled.div``

const ColorPickerWrapper = styled.div`
  flex-grow: 1;
  align-self: stretch;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const PersonStatsSection = styled.div`
  padding: 5px;
`

const QuirksAndTraitsContainer = styled.div`
  flex-grow: 1;
  display: flex;

  & > * {
    flex-basis: 100%;
  }
`

const PersonDisplayCard = (props) => {
  const {
    isEditable,
    isInCreateMode,
    placeholders,
    person,
  } = props

  
  const description = person.description || []
  const titleColor = person.titleColor || colors.freshwaterBlue
  const {
    quirks,
    traits,
  } = person

  return (
    <This>
      <DisplayCard>        
        <Row
          justifyContent="flex-start"
          padding="0 0 5px 0"
        >
          <QuirksAndTraitsContainer>
            <ColoredBox
              color={titleColor}
            >
              <List
                heading="quirks"
                items={[quirks.join(', ')]}
                textAlign="left"
              />
            </ColoredBox>

            <ColoredBox
              color={titleColor}
            >
              <List
                heading="traits"
                items={[traits.join(', ')]}
                textAlign="left"
              />
            </ColoredBox>
          </QuirksAndTraitsContainer>

        </Row>

        <Row
          justifyContent="flex-start"
          padding="0 0 5px 0"
        >
          <ColoredBox
            color={titleColor}
          >
            {
              isEditable 
              && <PersonStatsSection>
                 <Row
                  className="row"
                  padding="0 0 5px 0"
                >
                  <EditableInput
                    flexGrow={1}
                    heading="Title"
                    placeholder={placeholders.label}
                    type="text"
                    value={person.label}
                  />
                </Row>
                
                <Row
                  className="row"
                  padding="0 0 5px 0"
                >
                  <EditableInput
                    flexGrow={1}
                    heading="Associated Locations"
                    placeholder={placeholders.placeTags}
                    type="text"
                    value={person.placeTags}
                  />
                </Row>

                <Row
                  className="row"
                  padding="0 0 5px 0"
                >
                  <ColorPickerWrapper>
                    <Heading>
                      Color
                    </Heading>

                    <ColorPicker
                      horizontalShiftInPixels={-154} // odd number caused by flex-grows of containers
                      onChange={(color) => console.log('new color: ', color)}
                      initialValue={colors.mountainsTeal}
                      sizeInPixels={38} // match height of SelectInput, as it is not customizable
                    />
                  </ColorPickerWrapper>
                </Row>
              </PersonStatsSection>
            }
            {
              isEditable
              ? <EditableList // not in use
                heading="Description"
                items={[]}
                placeholder={{}}
              />
              : <List
              items={description}
              textAlign="left"
            />
            }
          </ColoredBox>
        </Row>
      </DisplayCard>
    </This>
  )
}

export default PersonDisplayCard