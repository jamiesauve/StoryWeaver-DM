import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Card from '../styled/DisplayCard/Card'
import Row from '../styled/DisplayCard/Row'
import Title from '../styled/DisplayCard/Title'
import TitleDetail from '../styled/DisplayCard/TitleDetail'

import Description from '../Stats/Description'
import ReagentUses from '../Stats/ReagentUses'
import StatBox from '../Stats/StatBox'
import Value from '../Stats/Value'
import BreadCrumbList from '../Stats/BreadCrumbList'

import toCapitalCase from '../../utils/toCapitalCase'

const This = styled.div``

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
      <Card>
        <Row>
          <Title>
            {reagent.label}
          </Title>

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
          <VerticalList>
            <Description
              backgroundColor="#fb6"
              text={reagent.location}
              heading="Location"
            />

            <BreadCrumbList 
              backgroundColor="#bb6"
              data={_.map(reagent.terrain, terrainType => toCapitalCase(terrainType))}
            />
          </VerticalList>
        </Row>

        <Row>
          <Description
            backgroundColor="#6b6"
            text={reagent.description}
            heading="Description"
          />
        </Row>

        <Row>

        <StatBox
          backgroundColor="#bcf"
          label="Identify DC (Nature)"
          value={reagent.identifyDC || 5}
        />

        <StatBox
          backgroundColor="#bcf"
          label="Harvest DC (Nature)"
          value={reagent.harvestDC || 5}
        />          
          
        </Row>

        <Row>
          <Description
            backgroundColor="#0bb"
            text={reagent.lore}
            heading="Lore"
          />
        </Row>

        <Row>
          <ReagentUses
            className="reagentUses"
            backgroundColor="b6b"
            data={reagent.uses}
            heading="Uses"
          />
        </Row>
      </Card>
    </This>
  )
}

export default ReagentDisplayCard