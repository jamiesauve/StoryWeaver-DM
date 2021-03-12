import _ from 'lodash'
import toCapitalCase from '../../../utils/toCapitalCase'

const plantParts = [
  "whole",

  "bark",
  "berry",
  "branch",
  "bulb",
  "cap",
  "crown",
  "flower", 
  "fruit",
  "flower",
  "flower bud",
  "heartwood",
  "leaf",
  "leaf bud",
  "limb",
  "nectar",
  "nut",
  "petal",
  "pollen",
  "root",
  "seed",
  "spores",
  "stalk",
  "stem",
  "taproot",
  "thorn",
  "trunk",
  "vine",
  "wood",
  
  "other",
]

const mappedPlantParts = _.reduce(plantParts, (aggr, plantPart) => {
  return {
    ...aggr,
    [plantPart]: {
      label: toCapitalCase(plantPart),
      name: plantPart,
    }
  }
}, {})

export default mappedPlantParts