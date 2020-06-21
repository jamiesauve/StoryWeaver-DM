import _ from 'lodash'

const reagentTypes = {
  plant: [
    "aquatic",
    "fungus",
    "grass",
    "herbaceous",
    "reed",
    "shrub",
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