import colors from '../../../../styles/colors'
import places from '../../places'

import wikiEntryTypes from './../wikiEntryTypes'

export default {
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
      `;;;History%%%abundabar_history;;;`,
      `;;;Geography%%%abundabar_geography;;;`,
      `;;;Culture%%%abundabar_culture;;;`,
      ';;;Areas%%%abundabar_areas;;;',
      `;;;Factions in Abundabar%%%abundabar_factions;;;`,
    ]
  },
  'abundabar_history': {
    name: 'abundabar_history',
    label: 'Abundabar - History',
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.place.history,
    paragraphs: [
      `;;;Abundabar%%%abundabar;;; was the capital city of the Underdark country of Gulandabar. It was founded and populated mainly by dark elves, with a scattering of goblins and the occasional orc, though these last two usually held lower places in society and faced some racism from the elves.`,
      `In 4074, King Runazo of Dalymbia marched an army down the narrow Darking Road from Dragon Falls to Abundabar, intending to conquer the Underdark country; nearly all of his advisors urged him to abandon the idea since the Underdark was highly defensible and many of the Gulandabaran elves were skilled wizards and sorcerers. However, the dark elves surprised everyone by surrendering after a few small skirmishes that went very badly for the Dalymbians. King Runazo marched triumphantly into Abundabar, proclaimed Gulandabar a province of Dalymbia, and left, leaving behind a small contigent of Black Shields, which were promptly poisoned. The Gulandabarans sent messages to King Runazo informing him of the 'tragic accident', and assured him of their loyalty. King Runazo seemed to accept this and has not shown any further interest in Gulndabar since.`,
      `Most folks decided that the Gulandabarans, observing how Runazo had conquered Climina a few years earlier and seemed totally satisfied to leave the Climinai to their own devices once they had acknowledged him as their sovereign, cleverly gambled that he would treat them the same way. To this day, Gulandabarans all acknowledge that Runazo is their king but totally ignore him and his laws otherwise, with no repercussions. Abundabar remains the capital of the region.`,
    ]
  },
  'abundabar_geography': {
    name: 'abundabar_geography',
    label: 'Abundabar - Geography',
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.place.geography,
    paragraphs: [
      `Abundabar is located at a central point in the Underdark below Koona; It is a half-day's (arduous) journey down the Darking Road from Dragon Falls, and is centrally located around the Tiered Lakes and most of the waterways of the Underdark (see next paragraph). Additionally, Underdark roads lead from Abundabar to Durukhaaz in the Northwest, further into the kingdom to the south and east, and to Dong'goolum in the south.`,
      `There are three lakes near Abundabar that are all at very different altitudes; the middle lake is slightly below Abundabar, but the High Lake is three miles above it, near the surface, and the Low Lake is just over four miles below. The few folks who use the Underdark river system always leave from Abundabar and return to it, because all of the rivers in the region flow from the High Lake, out wherever the rivers take them in the Underdark, and back to either the Middle Lake or the Low Lake - the rivers only flow one way so it is always a big circuit. Those who don't pick the right forks in the rivers while out in the caves never make it back, as many rivers don't return to Abundabar and keep going downwards.`,
      `Abundabar is located at the edge of Middle Lake, in the massive Abunda cavern.`,
    ]
  },
  'abundabar_culture': {
    name: 'abundabar_culture',
    label: 'Abundabar - Culture',
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.place.culture,
    paragraphs: [
      `Abundabar is a center for the arcane arts, enchantment, the cultivation of mushrooms and fungi, and potion-making. Gnomes in the area are largely involved in gemcrafting, primarily as a service for enchanters. Much of the city appears to be ruined; Gulandabarans in general do not see the point of esthetics and frivolousness, and plain, serviceable structures (and clothing) are the norm here.`,
      `Racism is very much alive in Abundabar. Dark elves (the majority) hold the highest positions in society; goblins are usually given the dirtiest work, and orcs the most labor-intensive. Gnomes are generally more accepted by the elves, and respected as skilled craftsmen. A scattering of other races are present in Abundabar also, usually viewed with disinterest by the dark elves.`,
      `Gulandabarans are often seen as rude by foreigners because of their bluntness; they make no pretenses and speak their minds, and are often impatient with politics, diplomacy and speeches. In Gulandabaran culture, cheating is only cheating if you are caught; everyone expects everyone else to try to take advantage of them, and anyone complaining about fairness is likely to be laughed at, even by authorities. Locksmiths and Abjurers are common in Gulandabar, due to the general philosophy that your belongings are your own only as long as you can hang onto them. This leads to most other cultures (reasonably) distrusting Gulandabars and dark elves in general when they see them.`,
     `That being said, Gulandabarans are not lawless; murder, violence and slavery are no more accepted here than anywhere else, and Gulandabarans are no more likely to turn to evil than other cultures.`
    ]
  },
  'abundabar_areas': {
    name: 'abundabar_areas',
    label: 'Areas in Abundabar',
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.directory.directory,
    paragraphs: [
      `;;;The Hovels%%%abundabar_the-hovels;;;`,
      `;;;The Rising Lake%%%abundabar_the-rising-lake;;;`,
    ]
  },
  'abundabar_the-hovels': {
    name: 'abundabar_the-hovels',
    label: 'The Hovels',
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.place.neighborhood,
    paragraphs: [
      `The Hovels is a small, poor village next to the Low Lake, about a mile below Abundabar. It is largely inhabited by goblins and orcs, and is considered Abundabar society's dumping grounds. Most of the creatures who live here are fishers or gatherers, occasionally making the trek up to Abundabar with whatever they have collected to try to make a few coins. Disease is often rife and many of the creatures here are maimed in some way.`,
      `Some of the orcs in the area offer their services as portagers to the rare watercraft to enter the Low Lake.`,
    ]
  },
  'abundabar_the-rising-lake': {
    name: 'abundabar_the-rising-lake',
    label: 'The Rising Lake',
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.place.lake,
    paragraphs: [
      `The Rising Lake is the last body of water attainable from the Tentacle River, just beyond the Low Lake near Abundabar. It is under an ancient enchantment that causes the top ten feet of the lake to rise miles up through a shaft to the High Lake, carrying anything they contain with them. A noble house in Abundabar, House Rudinoda, lays claim to the Rising Lake and charges a hefty price for using it., Many boat owners choose to hire portagers from The Hovels nearby to help them instead.`,
    ]
  },
  'abundabar_factions': {
    name: 'abundabar_factions',
    label: 'Factions in Abundabar',
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.directory.directory,
    paragraphs: [
      `;;;The Hovels%%%abundabar_the-hovels;;;`,
      `;;;The Rising Lake%%%abundabar_the-rising-lake;;;`,
    ]
  },
  'abundabar_house-rudinoda': {
    name: 'abundabar_house-rudinoda',
    label: 'House Rudinoda',
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.faction.family,
    paragraphs: [
      `House Rudinoda is a merchant house in Abundabar specializing primarily in exotic herbs and potions (and poisons, covertly). They also lay claim to the Rising Lake and charge travelers for its use.`,
      `House Rudinoda's matriarch is Engalaria Rudinoda, an elderly dark elf who is known for her sharp wit, ruthless business practices, and vast knowledge of herbs, potions and poisons.`,
    ]
  },
  "abundabar_kugo'ra": {
    name: `abundabar_kugo'ra`,
    label: `Kugo'ra`,
    placeTags: [
      places.abundabar,
    ],
    titleColor: colors.exploringTeal,
    type: wikiEntryTypes.faction.guild,
    paragraphs: [
      `There is a very deadly assassin’s guild in Abundabar called Kugo’ra. They are mostly political in nature and thankfully disinterested in events outside of Gulandabar (and very little outside of Abundabar). Common folk are generally only in danger if they are in the wrong place at the wrong time but there is some paranoia among the nobles because of them.`,
      `No one seems to know who is involved with or connected to Kugo’ra, a testament in itself to the prowess of the guild given the number and power of magicians in Gulandabar.`,
    ]
  },
}