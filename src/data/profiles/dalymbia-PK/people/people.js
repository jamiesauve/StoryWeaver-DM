import {
  // gwimbledymPeople,
  portMarunaPeople,
  singHarborsPeople,
} from './peopleGroups'

const people = {
  // ...gwimbledymPeople,
  ...portMarunaPeople,
  ...singHarborsPeople,
}

export const peopleAsArray = Object.values(people) 

export default people