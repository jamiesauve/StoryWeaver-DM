import _ from 'lodash'

import toCapitalCase from '../../../utils/toCapitalCase'

const creatureParts = [
  "whole",

  "antenna",
  "beak",
  "bile",
  "blood",
  "bone",
  "boogers",
  "brain",
  "breath",
  "cartilage",
  "claw",
  "dung",
  "ear",
  "earwax",
  "egg",
  "egg sac",
  "eye",
  "eyelash",
  "fang",
  "fat",
  "feather",
  "flesh",
  "fin",
  "finger",
  "fluid",
  "fundamentum",
  "fur",
  "gland",
  "gut",
  "hair",
  "hand",
  "head",
  "heart",
  "hide",
  "intestine",
  "kidney",
  "leg",
  "lip",
  "liver",
  "lung",
  "mucus",
  "nail",
  "nosehair",
  "paw",
  "pelt",
  "pus",
  "saliva",
  "scale",
  "skin",
  "spine",
  "shell",
  "skull",
  "spawn",
  "stinger",
  "stomach",
  "sweat",
  "tail",
  "talon",
  "tendon",
  "tentacle",
  "throat",
  "toe",
  "tooth",
  "tongue",
  "urine",
  "venom gland",
  "vertebrae",
  "vocal cords",
  "vomit",
  "web",
  "wing",
  // for sentient plants, use the plantParts list

  "other",
]

const mappedCreatureParts = _.reduce(creatureParts, (aggr, creaturePart) => {
  return {
    ...aggr,
    [creaturePart]: {
      label: toCapitalCase(creaturePart),
      name: creaturePart,
    }
  }
}, {})

export default mappedCreatureParts