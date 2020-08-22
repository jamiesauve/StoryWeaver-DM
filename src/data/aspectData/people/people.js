import colors from '../../styles/colors'
import places from '../../generalData/places'

import races from './races'
import occupations from './occupations'

const people = {
  'Oggshin': {
    name: 'oggshin',
    label: 'Oggshin',
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.puzzleOrange,
    quirks: [],
    traits: ['generous', 'gruff'],
    storyInvolvement: [],
    age: 35,
    race: races.hobgoblin,
    occupations: [occupations.carpenter],
    description: [
      `Oggshin is a carpenter (primarily a roofer) in Abundabar. He runs a small crew of hobgoblins, orcs, and goblins, and builds rooves for free in The Hovels whenever he has the resources. He doesn't trust or like dark elves but is civil to them.`,
    ]
  },
}

export const peopleAsArray = Object.values(people) 

export default people