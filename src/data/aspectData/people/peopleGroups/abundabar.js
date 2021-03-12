import colors from '../../../styles/colors'
import { placeNames } from '../../../generalData/places'

import races from '../races'
import occupations from '../occupations'

export default {
  'Oggshin': {
    name: 'oggshin',
    label: 'Oggshin',
    placeTags: [
      placeNames.abundabar,
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
  'kingus': {
    name: 'kingus',
    label: 'Kingus',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.exoticPink,
    quirks: ['moves shoulders', 'touches people he talks to'],
    traits: ['seductive', 'confident'],
    storyInvolvement: [],
    age: 135,
    race: races['dark elf'],
    occupations: [occupations.tattooist],
    description: [
      `Long and lanky dark elf with pale blue hair, wears a vest made of shimmering silver sequins. Has a tattoo of a snake twisting among vines down each arm that glitters different colors. Wears a V-neck soft fur vest with no sleeves and a necklace with a triple hade spiral gem. Is very fond of ;;;Trelindara%%%trelindara;;;, an enchantress.`,
    ]
  },
  'trelindara': {
    name: 'trelindara',
    label: 'Trelindara',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.magicPink,
    quirks: [],
    traits: ['excitable', 'friendly'],
    storyInvolvement: [],
    age: 147,
    race: races['dark elf'],
    occupations: [occupations.enchanter],
    description: [
      `Excitable, friendly and has a purple streak in her white hair to match her nails. Keeps her hair pulled back in a long ponytail.`,
    ]
  },
  'alahandra': {
    name: 'alahandra',
    label: 'Alahandra',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.cavesPurple,
    quirks: [],
    traits: ['relaxed', 'reassuring'],
    storyInvolvement: [],
    age: 364,
    race: races['dark elf'],
    occupations: [occupations.esthetician],
    description: [
      `an esthetician who specialized in altering hair. Color, texture, length, amount, etc. Long purple hair, half-lidded eyes, and a blunt but friendly manner.`,
    ]
  },
  'dursh': {
    name: 'dursh',
    label: 'Dursh',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.villageBrown,
    quirks: ['missing many teeth'],
    traits: ['easygoing', 'materialistic'],
    storyInvolvement: [],
    age: 34,
    race: races.orc,
    occupations: [occupations.laborer],
    description: [
      `Dursh is an orc from The Hovels who is part of a portaging crew to take boats up to one of the higher lakes by hand. He is missing most of his teeth, and generally likes to fish and relax whenever he has the time. He is best friends with a goblin named Smarma.`,
    ]
  },
  'indabara': {
    name: 'indabara',
    label: 'Indabara',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.swampGreen,
    quirks: ['winks a lot'],
    traits: ['sniffy', 'elderly', 'judgmental'],
    storyInvolvement: [],
    age: 513,
    race: races['dark elf'],
    occupations: [occupations.herbalist],
    description: [
      `Indabara is a sniffy, elderly herbalist. She is judgmental of others, particularly outlandish races. She has long, thin white hair and deep blue skin, and wears dusky green robes.`,
      `Indabara is a Guide. She is the primary contact for a few Guides in Abundabar.`,
    ]
  },
  'alturas': {
    name: 'alturas',
    label: 'Alturas',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.freshwaterBlue,
    quirks: ['talks slowly'],
    traits: ['patient', 'generous', 'supercilious (unintentionally)'],
    storyInvolvement: [],
    age: 306,
    race: races['dark elf'],
    occupations: [occupations.glassblower],
    description: [
      `Alturas is an average-looking male dark elf with blue eyes. His mate is ;;;Elissandra%%%elissandra;;;, a surface elf from the Lindir Forest, and they run a glassblowing business together. Alturas focuses on orbs and supplies some of the local enchanters. In spite of his maleness in Gulandabar, he is generally respected as a good person. He buys metal beads for his work from ;;;Ninantura%%%ninantura;;;.`,
    ]
  },
  'elissandra': {
    name: 'elissandra',
    label: 'Elissandra',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.freshwaterBlue,
    quirks: ['looks down a lot'],
    traits: ['shy', 'low self-esteem', 'quiet'],
    storyInvolvement: [],
    age: 241,
    race: races.elf,
    occupations: [occupations.glassblower],
    description: [
      `Elissandra is a wood elf from Lindiria, with fair skin, hazel eyes, and wavy brown hair. She has very little confidence and hides behind her mate ;;;Alturas%%%alturas;;; a bit, in spite of the general gender roles in Abundabar. She is an artistic glassblower, but Alturas sells her work as she never feels it's good enough and won't sell it for much.`,
    ]
  },
  'ninantura': {
    name: 'ninantura',
    label: 'Ninantura',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.mountainsTeal,
    quirks: [`grunts, doesn't talk much`],
    traits: ['blunt', 'sturdy', 'no-nonsense'],
    storyInvolvement: [],
    age: 541,
    race: races.elf,
    occupations: [occupations.blacksmith],
    description: [
      `Ninantura is a female dark elf past her prime. She is a blacksmith and looks like one - she keeps her pale purple hair tied in a stiff ponytail to keep it out of her work and doesn't usually speak unless spoken to. She is not grumpy, but extremely pragmatic. She makes small items - beads for orbs, fishing sinkers, horseshoes, nails and needles, latches, silverware, etc.`,
    ]
  },
  'elberara': {
    name: 'elberara',
    label: 'Elberara',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.mountainsTeal,
    quirks: [`folds arms and leans back when not talking`],
    traits: [`kind`, `inquisitive`, `thoughtful`],
    storyInvolvement: [`Saw Mama Bear's parents seventy years ago while traveling through Mushroom Village.`],
    age: 429,
    race: races['dark elf'],
    occupations: [occupations['tavern keeper']],
    description: [
      `Elberara is a kind-looking, middle-aged female dark elf. She has long blue hair with green highlights. She works at Mamunda's Tavern in ;;;Abundabar%%%abundabar;;;.`,
    ]
  },
  'kamabia_kalendalar': {
    name: 'kamabia_kalendalar',
    label: 'Kamabia Kalendalar',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.battleRed,
    quirks: [`inspects her fingernails while talking down to people`],
    traits: [`haughty`, `proud`, `attractive`],
    storyInvolvement: [`Talia snuck into House Kalendalar and into her bedroom while invisible and saw her enchanting something. She also saw a scrying bowl and a large collection of fancy dresses and jewelry.`],
    age: 388,
    race: races['dark elf'],
    occupations: [occupations.noble],
    description: [
      `Kamabia is the head of House Kalendalar, which is known as a producer of enchanted orbs. She has long black hair and a proud, attractive face, and generally wear fancy, risque dresses. She is a skilled enchanter and spellcaster.`,
    ],
  },
  'alabara': {
    name: 'alabara',
    label: 'Alabara',
    placeTags: [
      placeNames.abundabar,
    ],
    titleColor: colors.magicPink,
    quirks: [],
    traits: ['vain', `concerned about others' thoughts`],
    storyInvolvement: [`Alabara was involved in Talia and Mama Bear's spa treatment at Mud Heaven in Abundabar.`],
    age: 176,
    race: races['dark elf'],
    occupations: [occupations.esthetician],
    description: [
      `Alabara is a young female dark elf with long purple hair, which she takes great pride in.`
    ],
  },
}