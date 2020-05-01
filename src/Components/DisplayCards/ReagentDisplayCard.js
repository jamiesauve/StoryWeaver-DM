import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Row from '../styled/DisplayCard/Row'
import TitleDetail from '../styled/DisplayCard/TitleDetail'

import Description from '../Stats/Description'
import ReagentUses from '../Stats/ReagentUses'
import StatBox from '../Stats/StatBox'
import Value from '../Stats/Value'
import TerrainBreadCrumbs from '../Alchemy/TerrainBreadCrumbs'

import colors from '../../data/colors'

const This = styled.div`
  padding: 1px;
`

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
          {reagent.type}{reagent.subTypes ? ` (${_.join(reagent.subTypes, ', ')})` : ``}
        </TitleDetail>
          
        <VerticalList>
          {_.map(reagent.value, reagentValueItem => (
            // add comma as needed (or space)
            <Value
              data={reagentValueItem}
              key={reagentValueItem.part}
            />
          ))}
        </VerticalList>
      </Row>

      <Row>
        <Description
          borderColor={colors.exploringTeal}
          text={reagent.location}
          heading="Location"
        />    
      </Row>

      <Row>
        <TerrainBreadCrumbs 
          data={reagent.terrain}
        />
      </Row>

      <Row>
        <Description
          borderColor={colors.puzzleOrange}
          text={reagent.description}
          heading="Description"
        />
      </Row>

      {reagent.effects
        && <Row>
          <Description
            borderColor={colors.specialPink}
            text={reagent.effects}
            heading="Effects"
          />
        </Row>
      }

      <Row>

      <StatBox
        borderColor={colors.forestGreen}
        label="Identify DC (Nature)"
        value={reagent.identifyDC || 5}
      />

      <StatBox
        borderColor={colors.swampGreen}
        label="Harvest DC (Nature)"
        value={reagent.harvestDC || 5}
      />          
        
      </Row>

      <Row>
        <Description
          borderColor={colors.villageBrown}
          text={reagent.lore}
          heading="Lore"
        />
      </Row>

      <Row>
        <ReagentUses
          className="reagentUses"
          borderColor={colors.weatherBlue}
          data={reagent.uses}
          heading="Uses"
        />
      </Row>
    </This>
  )
}

export default ReagentDisplayCard