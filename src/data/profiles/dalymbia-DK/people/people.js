import colors from '../../../styles/colors'
import { placeNames } from '../places'

import races from './races'
import occupations from './occupations'

import {
  abundabarPeople,
  dragonFallsPeople,
  gwimbledymPeople,
} from './peopleGroups'

const people = {
  ...abundabarPeople,
  ...dragonFallsPeople,
  ...gwimbledymPeople,
}

export const peopleAsArray = Object.values(people) 

export default people