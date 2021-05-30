import colors from '../../styles/colors'
import { placeNames } from '../../generalData/places'

import races from './races'
import occupations from './occupations'

import {
  abundabarPeople,
  dragonFallsPeople,
  gwimbledymPeople,
  portMarunaPkPeople,
} from './peopleGroups'

const people = {
  ...abundabarPeople,
  ...dragonFallsPeople,
  ...gwimbledymPeople,
  ...portMarunaPkPeople,
}

export const peopleAsArray = Object.values(people) 

export default people