import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ColoredBox from '../UI/Style/ColoredBox'
import DataTable from '../UI/Structure/DataTable'
import EditableList from '../UI/Action/EditableList'
import List from '../UI/Structure/List'
import Row from '..//UI/Style/DisplayCard/Row'
import TitleDetail from '..//UI/Style/DisplayCard/TitleDetail'

import colors from '../../data/styles/colors'
import sizes from '../../data/styles/sizes'

const This = styled.div`
  padding: 1px;

  font-size: ${sizes.small};
`

const Heading = styled.div`
  align-self: center;

  font-weight: bold;
  font-size: ${sizes.small};
`

const RecipeDisplayCard = (props) => {
  const {
    data: {
      amountCreated,
      creationDC,
      creationTime,
      description,
      distillingTime,
      effects,
      ingredients,
      instructions,
      lore,
      onCreateFail,
      type,
      value,
    },
    isEditable,
    isInCreateMode,
    placeholders,
  } = props

  const ingredientsList = _.map(ingredients, ingredient => (
    `${ingredient.label} (${ingredient.amount || `1 oz`})`
  ))

  const recipeTableData = [{
    labelCell: `Create DC:`,
    valueCells: [creationDC],
  }, {
    labelCell: `On Fail:`,
    valueCells: [onCreateFail],
  }, {
    labelCell: `Creating Time:`,
    valueCells: [creationTime],
  }, {
    labelCell: `Distilling Time:`,
    valueCells: [distillingTime],
  }, {
    labelCell: `Yield:`,
    valueCells: [amountCreated || `1 ounce`],
  }, {
    labelCell: `Value:`,
    valueCells: [`${value.amount} ${isInCreateMode 
      ? null
      : value.unit.shortName} per ${value.amountCreated || `ounce`
    }`],
  }]

  return (
    <This>
      <Row
        justifyContent="center"
        padding="5px"
      >
        <TitleDetail>
          {type.mainType}{type.subType ? ` (${type.subType})` : ``}
        </TitleDetail>
      </Row>

      <Row>
        <ColoredBox
          color={colors.forestGreen}
        >
          {isEditable
            ? <EditableList
              heading="Description"
              items={[description]}
              placeholder={placeholders.description}
            />
            : <List
              heading="Description"
              items={[description]}
            />
          }
        </ColoredBox>
      </Row>

      {!_.isEmpty(lore)
        && <Row>
          <ColoredBox
            color={colors.plainsYellow}
          >
            <List
              heading="Lore"
              items={lore}
            />
          </ColoredBox>
        </Row>
      }

      <Row>
        <ColoredBox
          color={colors.jungleGreen}
        >
          <List
            areBulletsVisible={ingredientsList.length > 1}
            heading="Ingredients"
            items={ingredientsList}
          />
        </ColoredBox>
      </Row>

      <Row>
        <ColoredBox
          color={colors.villageBrown}
        >
          <List
            heading="Instructions"
            items={[instructions]}
          />
        </ColoredBox>
      </Row>

      <Row>
        <ColoredBox
          color={colors.creepyPurple}
        >
          <Heading>
            Creation Stats
          </Heading>

          <DataTable
            tableRows={recipeTableData}
          />
        </ColoredBox>
      </Row>

      <Row>
        <ColoredBox
          color={colors.battleRed}
        >
          <List
            heading="Effects"
            items={effects}
          />
        </ColoredBox>
      </Row>
    </This>
  )
}

RecipeDisplayCard.defaultProps = {
  data: {
    ingredients: {},
    type: {},
    value: {},
  },
}

export default RecipeDisplayCard