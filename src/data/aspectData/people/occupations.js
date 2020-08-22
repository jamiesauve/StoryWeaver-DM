import _ from 'lodash'
import toCapitalCase from '../../../utils/toCapitalCase'

const occupations = [
  "adventurer",
  "alchemist",
  "artist",
  "assassin",
  "blacksmith",
  "baker",
  "butcher",
  "carpenter",
  "cartographer",
  "cook",
  "criminal",
  "enchanter",
  "farmer",
  "fletcher",
  "fisherman",
  "forager",
  "gemcutter",
  "grocer",
  "guard",
  "guard captain",
  "herbalist",
  "hermit",
  "hunter",
  "knight",
  "leatherworker",
  "lumberjack",
  "mason",
  "mercenary",
  "merchant",
  "miner",
  "noble",
  "peddler",
  "performer",
  "pirate",
  "politician",
  "priest",
  "ranger",
  "researcher",
  "sailor",
  "scribe",
  "sculptor",
  "servant",
  "shepherd",
  "smuggler",
  "slave",
  "soldier",
  "thief",
  "tinker",
  "water hauler",
  "wizard",

  "other",
  "unknown",
]

const mappedOccupations = _.reduce(occupations, (aggr, occupation) => {
  return {
    ...aggr,
    [occupation]: {
      label: toCapitalCase(occupation),
      name: occupation,
    }
  }
}, {})

export default mappedOccupations