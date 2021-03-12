import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import EditableIngredients from '../Crafting/EditableIngredients'

import ColoredBox from '../UI/Style/ColoredBox'
import DataTable from '../UI/Structure/DataTable'
import EditableList from '../UI/Action/EditableList'
import Heading from '../UI/Structure/Heading'
import List from '../UI/Structure/List'
import Row from '..//UI/Style/DisplayCard/Row'

import colors from '../../data/styles/colors'
import sizes from '../../data/styles/sizes'
import {
  getCreateRecipeData,
  getEditRecipeData,
  getStaticRecipeData,
} from '../Crafting/recipeCreationStats'

const This = styled.div`
  padding: 1px;

  font-size: ${sizes.small};
`

const RecipeDisplayCard = (props) => {
  const {
    data,
    isEditable,
    isInCreateMode,
    placeholders,
  } = props

  const {
    description,
    effects,
    ingredients,
    instructions,
    lore,
    type,
  } = data

  const ingredientsList = _.map(ingredients, ingredient => (
    `${ingredient.label} (${ingredient.amount || `1 oz`})`
  ))

  const recipeTableData = isEditable
    ? isInCreateMode
      ? getCreateRecipeData(placeholders)
      : getEditRecipeData(data, placeholders)
    : getStaticRecipeData(data, placeholders)

  return (
    <This>
      <Row>
        <ColoredBox
          color={colors.battleRed}
        >
          {isEditable
            ? <EditableList
              heading="Effects"
              items={effects}
              placeholder={placeholders.effects}
            />
            : <List
              heading="Effects"
              items={effects}
            />
          }
        </ColoredBox>
      </Row>

      <Row>
        <ColoredBox
          color={colors.forestGreen}
        >
          {isEditable
            ? <EditableList
              heading="Description"
              items={[description]}
              maxLength={1}
              placeholder={placeholders.description}
            />
            : <List
              heading="Description"
              items={[description]}
            />
          }
        </ColoredBox>
      </Row>

      {(isEditable || !_.isEmpty(lore))
        && <Row>
          <ColoredBox
            color={colors.plainsYellow}
          >
            {isEditable
              ? <EditableList
                heading="Lore"
                items={lore}
                placeholder={placeholders.lore}
              />
              : <List
                heading="Lore"
                items={lore}
              />
            }
          </ColoredBox>
        </Row>
      }

      <Row>
        <ColoredBox
          color={colors.jungleGreen}
        >
          {isEditable
            ? <EditableIngredients
              ingredients={[ingredients]}
              placeholder={placeholders.ingredients}
            />
            : <List
              areBulletsVisible={ingredientsList.length > 1}
              heading="Ingredients"
              items={ingredientsList}
            />
          }
        </ColoredBox>
      </Row>

      <Row>
        <ColoredBox
          color={colors.villageBrown}
        >
          {isEditable
            ? <EditableList
              heading="Instructions"
              items={[instructions]}
              maxLength={1}
              placeholder={placeholders.instructions}
            />
            : <List
              heading="Instructions"
              items={[instructions]}
            />
          }
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
            keyColumnWidth={'70px'}
            tableRows={recipeTableData}
          />
        </ColoredBox>
      </Row>
    </This>
  )
}

RecipeDisplayCard.defaultProps = {
  data: {
    description: '',
    effects: [],
    ingredients: {},
    lore: [],
    type: {},
    value: {},
  },
}

export default RecipeDisplayCard