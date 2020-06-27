import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/UI/Structure/Section'
import Divider from '../Components/UI/Structure/Divider'

import Dresser from '../Components/UI/Structure/Dresser'

import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'

import ReagentDisplayCard from '../Components/DisplayCards/ReagentDisplayCard'
import RecipeDisplayCard from '../Components/DisplayCards/RecipeDisplayCard'

import reagents from '../data/aspectData/crafting/reagents'
import { reagentTypeColors } from '../data/aspectData/crafting/reagentTypes'
import recipes from '../data/aspectData/crafting/recipes'
import { recipeTypeColors } from '../data/aspectData/crafting/recipeTypes'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const Crafting = (props) => {
  const reagentsByTerrain = _.chain(reagents)
    .filter(reagent => 
      (
        _.isEmpty(reagent.terrain) 
        || _.isEmpty(props.activeLocation)
      )
      ? true
      : _.includes(reagent.terrain, props.activeLocation.name)
    )
    .sortBy('label')
    .value()

  const reagentDrawers = reagentsByTerrain
  .map(reagent => ({
    title: reagent.label,
    titleColor: reagentTypeColors[reagent.type.mainType],
    content: () => <ReagentDisplayCard
      data={reagent}
    />,
  }))

  const recipeDrawers = recipes
  .map(recipe => ({
    title: recipe.label,
    titleColor: recipeTypeColors[recipe.type.mainType],
    content: () => <RecipeDisplayCard
      data={recipe}
    />,
  }))

  return (
    <This
    className="crafting"
    >
      <Section
        className="section"
        height={"50%"}
        title="Reagents"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          <Dresser 
            className="dresser"
            drawers={reagentDrawers}
            hasToggleAllLink
            initiallyExpanded={false}
          />
        </ScrollableContainer>
      </Section>

      <Divider />

      <Section
        className="section"
        height={"50%"}
        title="Recipes"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          <Dresser 
            className="dresser"
            drawers={recipeDrawers}
            hasToggleAllLink
            initiallyExpanded={false}
          />
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Crafting