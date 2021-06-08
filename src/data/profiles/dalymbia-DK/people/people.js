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