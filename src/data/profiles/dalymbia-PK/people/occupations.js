import _ from 'lodash'
import toCapitalCase from '../../../../utils/toCapitalCase'

const occupations = [
  "adventurer",
  "alchemist",
  "artist",
  "assassin",
  "blacksmith",
  "baker",
  "bureaucrat",
  "butcher",
  "carpenter",
  "cartographer",
  "collector",
  "cook",
  "criminal",
  "enchanter",
  "esthetician",
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
  "jeweler",
  "knight",
  "laborer",
  "leatherworker",
  "lumberjack",
  "mapmaker",
  "mason",
  "mercenary",
  "merchant",
  "miner",
  "noble",
  "peddler",
  "performer",
  "pirate",
  "politician",
  "potter",
  "priest",
  "ranger",
  "researcher",
  "sailor",
  "scribe",
  "sculptor",
  "scholar",
  "servant",
  "shepherd",
  "smuggler",
  "student",
  "slave",
  "soldier",
  "tailor",
  "tattooist",
  "tavern keeper",
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