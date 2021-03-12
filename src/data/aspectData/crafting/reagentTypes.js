import _ from 'lodash'

import colors from '../../styles/colors'

const reagentTypes = {
  plant: [
    "aquatic",
    "cactus",
    "flax",
    "fungus",
    "grass",
    "herbaceous",
    "moss",
    "reed",
    "shrub",
    "succulent",
    "tree",
    "vine",
    "other",
  ],
  mineral: [
    "gem",
    "metal",
    "other",
  ],
  creature: [
    "aberration",
    "amphibian",
    "beast",
    "bird",
    "celestial",
    "construct",
    "dragon",
    "elemental",
    "fey",
    "fish",
    "fiend",
    "giant",
    "humanoid",
    "insect",
    "monstrosity",
    "ooze",
    "reptile",
    "sentient plant",
    "shellfish",
    "undead",
    "other",
  ],
  otherReagentType: [
    "other",
  ]
}

export const reagentTypeColors = {
  creature: colors.battleRed,
  plant: colors.forestGreen,
  mineral: colors.mountainsTeal,
  otherReagentType: colors.darkGrey,
}

const mappedReagentTypes = _.reduce(Object.entries(reagentTypes), (aggr, reagentGroup) => {
  const mainType = reagentGroup[0]
  
  return {
    ...aggr,
    [mainType]: _.reduce(reagentGroup[1], (aggr, subType) => ({
      ...aggr,
      [subType]: {
        mainType,
        subType,
      },
    }), {})
  }
}, {})

export default mappedReagentTypes