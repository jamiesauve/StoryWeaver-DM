import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Row from '..//UI/Style/DisplayCard/Row'
import TitleDetail from '..//UI/Style/DisplayCard/TitleDetail'

import ColoredBox from '../UI/Style/ColoredBox'
import List from '../UI/Structure/List'

import TerrainBreadCrumbs from '../Crafting/TerrainBreadCrumbs'

import Harvesting from '../Crafting/Harvesting'

import colors from '../../data/styles/colors'

const This = styled.div`
  padding: 1px;
`

const ReagentDisplayCard = (props) => {
  const {
    data: reagent,
  } = props

  return (
    <This>
      <Row
        justifyContent="center"
        padding="5px"
      >
        <TitleDetail>
          {reagent.type.mainType}{reagent.type.subType ? ` (${reagent.type.subType})` : ``}
        </TitleDetail>
      </Row>

      <Row>
        <TerrainBreadCrumbs 
          data={reagent.terrain}
        />
      </Row>

      <Row>
        <ColoredBox
          color={colors.coastBlue}
        >
          <List
            heading="Location"
            items={[reagent.location]}
          />
        </ColoredBox>    
      </Row>

      <Row>
        <ColoredBox
          color={colors.forestGreen}
        >
          <List
            heading="Description"
            items={[reagent.description]}
          />
        </ColoredBox>
      </Row>

      {reagent.effects
        && <Row>
           <ColoredBox
            color={colors.battleRed}
          >
            <List
              heading="Effects"
              areBulletsVisible={_.get(reagent, 'effects', []).length > 1}
              items={reagent.effects}
            />
          </ColoredBox>
        </Row>
      }

      <Row>
        <ColoredBox 
          color={colors.plainsYellow}
        >
          <List
            heading="Lore"
            areBulletsVisible={_.get(reagent, 'lore', []).length > 1}
            items={reagent.lore || ['--']}
          />
        </ColoredBox>
      </Row>
      
      <Harvesting
        reagent={reagent.harvesting}
      />

    </This>
  )
}

export default ReagentDisplayCard