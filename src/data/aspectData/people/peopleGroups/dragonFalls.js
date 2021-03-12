import colors from '../../../styles/colors'
import { placeNames } from '../../../generalData/places'

import races from '../races'
import occupations from '../occupations'

export default {
  'marklifton_moggin': {
    name: 'marklifton_moggin',
    label: 'Marklifton Moggin',
    placeTags: [
      placeNames.dragon_falls,
    ],
    titleColor: colors.villageBrown,
    quirks: [`twists his mustache thoughtfully`],
    traits: [`quiet`, `focused on his work`],
    storyInvolvement: [`Can sell the party a map of Dalymbia.`],
    age: 476,
    race: races['gnome'],
    occupations: [occupations.mapmaker],
    description: [
      `Marklifton Moggin is an old, distinguished gnome with a curled mustache and well-groomed dark beard. He is friendly enough, but his first love is mapmaking.`
    ],
  },
  'shanklin_the_great': {
    name: 'shanklin_the_great',
    label: 'Shanklin the Great',
    placeTags: [
      placeNames.dragon_falls,
    ],
    titleColor: colors.exoticPink,
    quirks: [`speaketh like this`, `useth elaborate insults freely`],
    traits: [`loud`, `unconsciously obnoxious`, `a little slow`],
    storyInvolvement: [``],
    age: 26,
    race: races['human'],
    occupations: [occupations.scribe],
    description: [
      `Shanklin the Great - a loud mage who speaketh loudly like this and boasteth, thou scoundrel! He claims to have read so many ancient and powerful spell books that he can’t help it. He claims to have done everything in town - the Fight Club was too easy and since he is virtuous he didn’t want to hurt the novices unnecessarily. He is a scrawny human who wears a helmet all the time. He is an extremely talented and quick scribe at the Scholar’s Guild, where they instituted an arcane block on sounds louder than a whisper because of him.`
    ],
  },
  'taylor_bubble': {
    name: 'taylor_bubble',
    label: 'Taylor Bubble',
    placeTags: [
      placeNames.dragon_falls,
    ],
    titleColor: colors.magicPink,
    quirks: [`spreads his hands wide often`, `says "a ___ you say?"`],
    traits: [`loud`, `flamboyant`, `excitable`],
    storyInvolvement: [``],
    age: 56,
    race: races['human'],
    occupations: [occupations.tailor],
    description: [
      `Taylor is the tailor at Dapper Gentlemen and thinks the play on his name and his profession are the biggest joke in the world.`,
    ],
  },
  'chipchopwizzle_hamberly': {
    name: 'chipchopwizzle_hamberly',
    label: 'Chipchopwizzle Hamberly',
    placeTags: [
      placeNames.dragon_falls,
    ],
    titleColor: colors.citySalmon,
    quirks: [`pinches his lips together and frowns`, `waggles a finger`],
    traits: [`has bushy eyebrows`],
    storyInvolvement: [``],
    age: 256,
    race: races['gnome'],
    occupations: [occupations.jeweler],
    description: [
      `Chipchopwizzle runs a small jewelry store called Special Gems in Westcliff. He is a skilled spellcaster.`,
    ],
  },
  'elissana_handiren': {
    name: 'elissana_handiren',
    label: 'Elissana Handiren',
    placeTags: [
      placeNames.dragon_falls,
    ],
    titleColor: colors.forestGreen,
    quirks: [`tucks hair behind her ear`],
    traits: [`gentle`, `shy`],
    storyInvolvement: [``],
    age: 201,
    race: races['elf'],
    occupations: [occupations.student],
    description: [
      `Elissana is a student of Transmution at the Crystal Academy. She can often be found playing the harp by a fountain in the Gardens. She plays very well; she's homesick for Chinclincha, her home city, but is trying to learn all she can about Transmutation to bring the knowledge back with her.`,
    ],
  },
}