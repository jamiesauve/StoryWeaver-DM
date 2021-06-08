import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { useRecoilValue } from 'recoil'

import {
  wikiEntryTypesAtom,
} from '../../state/atoms/staticDataAtoms'

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

const TypeSelectWrapper = styled.div`
  flex-grow: 10;
`

const ColorPickerWrapper = styled.div`
  flex-grow: 1;
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
    // isInCreateMode,
    placeholders,
    wikiEntry,
  } = props

  const wikiEntryTypes = useRecoilValue(wikiEntryTypesAtom)
  
  const paragraphs = wikiEntry.paragraphs || []
  const titleColor = wikiEntry.titleColor || colors.mountainsTeal

  const wikiEntryTypeOptions = _.map(wikiEntryTypes, type => ({
    label: `${type.mainType} - ${type.subType}`,
    value: type.subType,
  }))

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
                    heading="Title"
                    placeholder={placeholders.label}
                    type="text"
                    value={wikiEntry.label}
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
                    value={wikiEntry.placeTags}
                  />
                </Row>

                <Row
                  className="row"
                  padding="0 0 5px 0"
                >
                  <TypeSelectWrapper>
                    <Heading>
                      Type
                    </Heading>

                    <SelectInput 
                      backgroundColor={colors.mountainsTeal}
                      onChange={(e) => console.log('new choice', e)}
                      options={wikiEntryTypeOptions} // fix
                      styleType="dark"
                      value={wikiEntry.type}
                      width={`100%`}
                    />
                  </TypeSelectWrapper>

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

            {/* {
              isEditable
              ? <ButtonContainer>
                <SubmitButton />
                <CancelButton />
              </ButtonContainer>
              : null
            } */}
          </ColoredBox>
        </Row>
      </DisplayCard>
    </This>
  )
}

export default WikiEntryDisplayCard