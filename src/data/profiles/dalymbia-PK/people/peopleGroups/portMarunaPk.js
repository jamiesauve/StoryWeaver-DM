import colors from '../../../../styles/colors'
import { placeNames } from '../../places'

import races from '../races'
import occupations from '../occupations'

export default {
  'Lord Gindel Eshellen': {
    name: 'lord-gindel-eshellen',
    label: 'Lord Gindel Eshellen',
    placeTags: [
      placeNames.port_maruna_pk,
    ],
    titleColor: colors.puzzleOrange,
    quirks: ['talks in a nasal, supercilious voice'],
    traits: ['devious'],
    storyInvolvement: [],
    age: 335,
    race: races.elf,
    occupations: [occupations.noble],
    description: [
      `Lord Gindel Eshellen owns House Eshellen in Port Maruna. He is the husband of Lady Adralla Eshellen and a skilled spellcaster.
       Want: Political power; he wants to be the next king as the current queen has no heir.
       Fear: Assassination
       Connection: His wife and he are close, but because they are allies going for the same goal, not so much out of affection.
      `,
    ]
  },
  'Lady Adralla Eshellen': {
    name: 'lady-adralla-eshellen',
    label: 'Lady Adralla Eshellen',
    placeTags: [
      placeNames.port_maruna_pk,
    ],
    titleColor: colors.puzzleOrange,
    quirks: ['talks slowly and sniffs a lot'],
    traits: ['arrogant'],
    storyInvolvement: [],
    age: 321,
    race: races.elf,
    occupations: [occupations.noble],
    description: [
      `Lady Adralla Eshellen owns House Eshellen in Port Maruna. She is the wife of Lord Gindel Eshellen and a skilled spellcaster.
       Want: Political power; she wants to help her husband become the next king by political means.
       Fear: Foreigners (racism)
       Connection: She and her husband are close because they are allies going for the same goal, not so much out of affection. She has toyed with the idea of betraying him once he has power, but isn't sure if she wants to do that yet.
      `,
    ]
  },
}