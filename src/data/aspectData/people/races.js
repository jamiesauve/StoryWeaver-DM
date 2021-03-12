import _ from 'lodash'
import toCapitalCase from '../../../utils/toCapitalCase'

const races = [
  "aasimar",
  "blink dog",
  "brownie",
  "bugbear",
  "changeling",
  "dark elf",
  "dragon",
  "dragonborn",
  "dryad",
  "dwarf",
  "eladrin",
  "elf",
  "faerie dragon",
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
  "mermian",
  "naiad",
  "nymph",
  "oni",
  "orc",
  "pixie",
  "plant",
  "quickling",
  "sprite",
  "sylph",
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