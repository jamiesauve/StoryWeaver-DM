import _ from 'lodash'

import colors from '../../styles/colors'

const recipeTypes = {
  consumable: [
  "potion",
  "edible",
  "beverage",
  "smoked",
  "other",
  ],
  cosmetic: [
  "makeup",
  "other",
  ],
  item: [
  "weapon",
  "armor",
  "utility",
  "tool",
  "expended",
  "instrument",
  "magical",
  "other",
  ],
  medecine: [
  "ingested",
  "applied",
  "other",
  ],
  poison: [
  "ingested",
  "inhaled",
  "contact",
  "wound",
  "other",
  ],
  other: [
  "other",
  ],
}

export const recipeTypeColors = {
  consumable: colors.desertOrange,
  cosmetic: colors.exoticPink,
  item: colors.villageBrown,
  medecine: colors.battleRed,
  poison: colors.swampGreen,
  other: colors.darkGrey,
}

const mappedRecipeTypes = _.reduce(Object.entries(recipeTypes), (aggr, recipeGroup) => {
  const mainType = recipeGroup[0]
  
  return {
    ...aggr,
    [mainType]: _.reduce(recipeGroup[1], (aggr, subType) => ({
      ...aggr,
      [subType]: {
        mainType,
        subType,
      },
    }), {})
  }
}, {})

export default mappedRecipeTypes