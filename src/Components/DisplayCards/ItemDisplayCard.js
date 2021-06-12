import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ColoredBox from '../UI/Style/ColoredBox'

import Heading from '../UI/Structure/Heading'

import { 
  DisplayCard, 
  Row,
} from '..//UI/Style/DisplayCard'

import TextWithFormattingActivated from '../../Components/UI/Structure/TextWithFormattingActivated'

import colors from '../../data/styles/colors'
import theme from '../../data/styles/theme'

const This = styled.div``

const IsAttunementRequired = styled.div`
  font-size: ${theme.smallTextSize};
  font-style: italic;
`

const ItemDisplayCard = (props) => {
  const {
    isAttunementRequired,
    description,
    effect,
    lore,
  } = props.item

  return (
    <This>
      <DisplayCard> 
        {
          isAttunementRequired
            ? <Row
              justifyContent="flex-start"
              padding="0 0 10px 0"
            >
              <IsAttunementRequired>
                {`requires attunement`}
              </IsAttunementRequired>
            </Row>
            : null
        }

        {
          description
            ? <ColoredBox
              color={colors.freshwaterBlue}
            >
              <Heading>
                Description
              </Heading>

              <TextWithFormattingActivated
                text={description}
              />
          </ColoredBox>
            : null
        }

        <ColoredBox
          color={colors.battleRed}
        >
          <Heading>
            Effect
          </Heading>

          <TextWithFormattingActivated
            text={effect}
          />
        </ColoredBox>

        {
          lore
            ? <ColoredBox
            color={colors.villageBrown}
          >
            <Heading>
              Lore
            </Heading>

            <TextWithFormattingActivated
              text={lore}
            />
          </ColoredBox>
            : null
        }
      </DisplayCard>
    </This>
  )
}

export default ItemDisplayCard