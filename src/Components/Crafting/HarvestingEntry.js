import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import DataTable from '../UI/Structure/DataTable'

import colors from '../../data/styles/colors'

import shade from '../../utils/shade'

const This = styled.div`

  margin-top: 10px;
  box-shadow: 0 -1px 1px ${shade(colors.puzzleOrange, -50)};
  padding-top: 10px;
`

const ReagentName = styled.div`
  margin: 0 0 5px 5px;
  
  font-weight: bold;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`



const HarvestingEntry = (props) => {
  const {
    harvestingEntry: {
      reagentPart,
      harvestDC,
      onHarvestFailure,
      recipes,
      simpleUses,
      value,
    },
  } = props

  const formattedRecipes = _.map(recipes, (recipe, index) => (
    `${recipe.label} (${recipe.type.mainType} - ${recipe.type.subType})`
  ))

  const formattedSimpleUses = _.map(simpleUses, simpleUse => (
    `${simpleUse.mainType} (${simpleUse.subType})`
  ))

  const harvestingData = [{
    labelCell: `Value:`,
    valueCells: [_.isEmpty(value) ? `` : `${value.amount} ${value.unit.shortName} per ${value.amountOfReagent || `ounce`}`],
  }, {
    labelCell: `Harvest DC:`,
    valueCells: [harvestDC],
  }, {
    labelCell: `On Fail:`,
    valueCells: [onHarvestFailure],
  }, {
    labelCell: `Raw Uses:`,
    valueCells: [formattedSimpleUses],
  }, {
    labelCell: `Recipes:`,
    valueCells: [formattedRecipes],
  }];

  return (
    <This>
      <Row>
        <ReagentName>
          {reagentPart.label}
        </ReagentName>
      </Row>

      <DataTable 
        title={`Harvesting`}
        tableRows={harvestingData}
      />
    </This>
  )
}

export default HarvestingEntry