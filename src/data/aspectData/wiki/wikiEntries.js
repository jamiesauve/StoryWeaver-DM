import colors from '../../styles/colors'
import places from '../../generalData/places'

import wikiEntryTypes from './wikiEntryTypes'

const wikiEntries = {
  'chinclincha': {
    name: 'chinclincha',
    label: 'Chinclincha',
    placeTags: [
      places.climina
    ],
    titleColor: colors.mountainsTeal,
    type: wikiEntryTypes.place.city,
    paragraphs: [
      `Chinclincha, also known as the City of Wind Chimes, is a medium-sized city on the coast of the Great Sea, in the northern reaches of Dalymbia. It sits a few hundred feet from a high cliff overlooking the ocean. Chinclincha is known primarily for its artwork; the city is home to artisans of all crafts, particularly glasswork, gold- and silversmithing, gemcutting, enchantment, and potion making. It is a favored spot for travelers to visit because of its delicate, artsy culture and the beauty of the city.`,
    ]
  },
  'ambalora': {
    name: 'ambalora',
    label: 'Ambalora',
    placeTags: [
      places.ambalora,
      places.gulandabar,
    ],
    titleColor: colors.creepyPurple,
    type: wikiEntryTypes.place['ruined city'],
    paragraphs: [
      `Ambalora is a ruined city built around 3700 SA by elvish necromancers from ;;;Abundabar%%%abundabar;;;, who were seeking a place to practice their dark arts. They chose to build on top of an abandoned diamond mine called Hoh I Noor; Hoh I Noor had been abandoned a few decades earlier when a Beholder moved in, but it was still believed to be rich in diamonds. The Ambalorans, as the eight founders called themselves, thought very highly of themselves and their magical prowess and planned to drive out the Beholder and reclaim the mine. This would provide them with a good supply of diamonds for their experiments, as diamonds are a common component in resurrection magic.`,
      `Currently, Ambalora is a small 'island' - the main streets of the fortress are only knee-deep in water - with gracefully arching stone bridges crossing the water into it (these were originally constructed to connect the city to the rest of the land around it since mining had dug away most of the surrounding rock). These bridges are the only way it can be accessed, and is a dark place of stone and ruins, with flickers of magical activity every so often, and some wards that never sleep.`,
    ]
  },
  'abundabar': {
    name: 'abundabar',
    label: 'Abundabar',
    placeTags: [
      places.abundabar,
      places.gulandabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.place.city,
    paragraphs: [
      `Abundabar was the capital city of the Underdark country of Gulandabar. It was founded and populated mainly by dark elves, with a scattering of goblins and the occasional orc, though these last two usually held lower places in society and faced some racism from the elves.`,
      `Gulandabarans are often seen as rude by foreigners because of their bluntness; they make no pretenses and speak their minds, and are often impatient with politics, diplomacy and speeches. In Gulandabaran culture, cheating is only cheating if you are caught; everyone expects everyone else to try to take advantage of them, and anyone complaining about fairness is likely to be laughed at, even by authorities. Locksmiths and Abjurers are common in Gulandabar, due to the general philosophy that your belongings are your own only as long as you can hang onto them.`,
     `That being said, Gulandabarans are not lawless; murder, violence and slavery are no more accepted here than anywhere else, and Gulandabarans are no more likely to seek evil than other cultures.`,
    ]
  },
}

export const wikiEntriesAsArray = Object.values(wikiEntries) 

export default wikiEntries