import _ from 'lodash'
import toCapitalCase from '../../../utils/toCapitalCase'

const races = [
  "aasimar",
  "bugbear",
  "changeling",
  "dragonborn",
  "dwarf",
  "eladrin",
  "elf",
  "firbolg",
  "genasi",
  "giant",
  "gnome",
  "goblin",
  "goliath",
  "half-elf",
  "half-orc",
  "halfling",
  "hobgoblin",
  "human",
  "kobold",
  "lamia",
  "lizardfolk",
  "orc",
  "plant",
  "tabaxi",
  "tiefling",
  "troll",

  "other",
  "unknown",
]

const mappedRaces = _.reduce(races, (aggr, race) => {
  return {
    ...aggr,
    [race]: {
      label: toCapitalCase(race),
      name: race,
    }
  }
}, {})

export default mappedRaces