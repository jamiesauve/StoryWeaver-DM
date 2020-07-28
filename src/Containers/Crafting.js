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
import createRecipePlaceholders from '../data/aspectData/crafting/createRecipePlaceholders'
import { recipeTypeColors } from '../data/aspectData/crafting/recipeTypes'
import places from '../data/generalData/places'
import colors from '../data/styles/colors'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const Crafting = (props) => {
  const getReagentsByLocation = () => { 
    if (_.isEmpty(props.activeLocation)) {
      return reagents
    } else if (props.activeLocationType === "terrain") {
      return _.filter(reagents, reagent => {
        if ( _.includes(reagent.terrain, props.activeLocation.name)) {
          return true
        } else if  (
          _.isEmpty(reagent.terrain) && _.isEmpty(reagent.places)
          || _.isEmpty(props.activeLocation)
        ) {
          return true
        }  
      })
    } else if (props.activeLocationType === "place") {
      const place = _.find(places, {name: props.activeLocation.name})

      return _.filter(reagents, reagent => {
        if ( _.includes(reagent.places, props.activeLocation.name)) {
          return true
        }

        const reagentIsInAllPlaceTerrains = _.every(place.terrainTypes, placeTerrainType => _.includes(reagent.terrain, placeTerrainType))
        
        return reagentIsInAllPlaceTerrains
      })
    } else { // I don't think this will ever get hit
      return reagents
    }
  }

  const reagentDrawers = getReagentsByLocation()
  .map(reagent => ({
    name: reagent.name,
    title: reagent.label,
    titleColor: reagentTypeColors[reagent.type.mainType],
    titleDetail: reagent.type.subType || reagent.type.mainType,
    content: () => <ReagentDisplayCard
      data={reagent}
    />,
  }))

  const recipeDrawers = recipes
  .map(recipe => ({
    name: recipe.name,
    title: recipe.label,
    titleColor: recipeTypeColors[recipe.type.mainType],
    titleDetail: recipe.type.subType || recipe.type.mainType,
    content: () => <RecipeDisplayCard
      data={recipe}
    />,
  }))
  .concat({
    name: null,
    title: `+`,
    titleColor: colors.winterWhite,
    content: () => <RecipeDisplayCard
      isEditable={true}
      isInCreateMode={true}
      placeholders={createRecipePlaceholders}
    />
  })

  const getReagentDrawerToOpen = () => {
    const reagent = _.find(reagentDrawers, {name: props.currentWikiLink.linkTarget})

    return reagent
      ? reagent.title
      : ''
  }

  const getRecipeDrawerToOpen = () => {
    const recipe = _.find(recipeDrawers, {name: props.currentWikiLink.linkTarget})

    return recipe
      ? recipe.title
      : ''
  }
    
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
            drawerToOpen={getReagentDrawerToOpen()}
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
            drawerToOpen={getRecipeDrawerToOpen()}
            hasToggleAllLink
            initiallyExpanded={false}
          />
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Crafting