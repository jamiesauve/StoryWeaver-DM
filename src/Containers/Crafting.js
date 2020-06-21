import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/Layout/Section'
import Divider from '../Components/styled/Divider'

import Dresser from '../Components/UI/Dresser'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import ReagentDisplayCard from '../Components/DisplayCards/ReagentDisplayCard'

import terrainTypes from '../data/terrainTypes'
import reagents from '../data/reagents'
import recipes from '../data/recipes'

import colors from '../data/colors'

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
    titleColor: _.get(_.find(terrainTypes, {name: props.activeLocation.name}), 'color', colors.forestGreen), // TODO: make the color match the type of plant somehow
    content: () => <ReagentDisplayCard
      data={reagent}
    />,
  }))

  const recipeDrawers = recipes
  .map(recipe => ({
    title: recipe.label,
    titleColor: _.get(_.find(terrainTypes, {name: props.activeLocation.name}), 'color', colors.swampGreen), // TODO: make the color match the type of plant somehow
    content: () => recipe.description,
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