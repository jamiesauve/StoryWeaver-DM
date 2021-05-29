import colors from '../../../../styles/colors'
import { placeNames } from '../../../../generalData/places'

import races from '../races'
import occupations from '../occupations'

export default {
  'turtora_and_neresha': {
    name: 'turtora_and_neresha',
    label: 'Turtora and Neresha',
    placeTags: [
      placeNames.gwimbledym,
    ],
    titleColor: colors.freshwaterBlue,
    quirks: [],
    traits: ['calm', 'close to each other'],
    storyInvolvement: [],
    age: 32,
    race: races['mermian'],
    occupations: [],
    description: [
      `Turtora and Neresha are a mermian boyfriend and girlfriend who live in the pool at the base of the big waterfall near Gwimbledym.`
    ],
  },
  'chohasso_and_ashendi': {
    name: 'chohasso_and_ashendi',
    label: 'Chohasso and Ashendi',
    placeTags: [
      placeNames.gwimbledym,
    ],
    titleColor: colors.puzzleOrange,
    quirks: [],
    traits: ['aggressive', 'egotistical'],
    storyInvolvement: [`They were guarding the entry to the Feydark that is close to Gwimbledym, under Lady Quickleberry's orders. Chohasso nearly cut off Mama Bear's ear.`],
    age: 247,
    race: races['eladrin'],
    occupations: [],
    description: [
      `Chohasso and Ashendi are two Eladrin guards who work for Lady Quickleberry.`
    ],
  },
  'lady_quickleberry': {
    name: 'lady_quickleberry',
    label: 'Lady Quickleberry',
    placeTags: [
      placeNames.gwimbledym,
    ],
    titleColor: colors.magicPink,
    quirks: [],
    traits: ['powerhungry', 'ambitious', 'cruel'],
    storyInvolvement: [`Lady Quickleberry invites Bilgrim to tea once she hears he's a prince, to judge if he's powerful enough to be used. If not, she sends them to the Feydark entrance as bait.`],
    age: 311,
    race: races['eladrin'],
    occupations: [],
    description: [
      `Lady Quickleberry is the Lady of Gwimbledym, and refers to herself as a Sidhe. She is feared and disliked by her subjects because of her vindictive abuse of her power. She is an attractive, pale-haired Eladrin who usually wears a purple robe.`,
      `She lives in Quickleberry House, a mansion built around the base of a tree, and keeps a guard posted at the door. She is quite rich and a capable spellcaster.`,
    ],
  },
  'mister_grinkle': {
    name: 'mister_grinkle',
    label: 'Mister Grinkle',
    placeTags: [
      placeNames.gwimbledym,
    ],
    titleColor: colors.darkGrey,
    quirks: ['rubs his chin'],
    traits: ['deceitful', 'courteous', 'selfish'],
    storyInvolvement: [`Mister Grinkle stole Narista the Sylph's rock collection some cycles ago. It contained a chip of Golden Lapis. He offers to sell it to them for 'the right price'.`],
    age: 582,
    race: races['eladrin'],
    occupations: [],
    description: [
      `Mister Grinkle is an aging Eladrin who runs a 'museum', where he keeps everything that he collects. Much of this 'collection' is done as thievery, using bribed or blackmailed pixies to do his dirty work. He keeps everything under powerful magical protection.`,
      `He is hated and feared by most of the residents of Gwimbledym. It is common knowledge that he has stolen valuables from nearly everyone, but he denies all of it and is too powerful for anyone else to take back their things, unless they trades other, more valuable things for them. But once Mister Grinkle knows they have something, it often gets stolen again anyway.`,

    ],
  },
  'narista': {
    name: 'narista',
    label: 'Narista',
    placeTags: [
      placeNames.gwimbledym,
    ],
    titleColor: colors.plainsYellow,
    quirks: ['pokes a finger in her cheek and frowns when thinking', 'has a lisp'],
    traits: ['busy', 'practical'],
    storyInvolvement: [`She will ask the party to get her rock collection back from Mister Grinke.`],
    age: 182,
    race: races['sylph'],
    occupations: [occupations['tavern keeper']],
    description: [
      `Narista owns and runs Narista's Nooks, a cafe in Gwimbledym. She keeps busy and has a young sprite named Yutetro working for her. She often dresses in a yellow apron. She shares the duties of cooking and serving with Yutetro.`,
    ],
  },
}