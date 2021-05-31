import colors from '../../../../styles/colors'
import places from '../../places'

import wikiEntryTypes from './../wikiEntryTypes'

export default {
  'dragon_falls': {
    name: 'dragon_falls',
    label: 'Dragon Falls',
    placeTags: [
      places.dragon_falls,
      // places.dalymbia,
    ],
    titleColor: colors.oceanBlue,
    type: wikiEntryTypes.place.city,
    paragraphs: [
      // `;;;History%%%dragon_falls_history;;;`,
      // `;;;Geography%%%dragon_falls_geography;;;`,
      // `;;;Culture%%%dragon_falls_culture;;;`,
      ';;;Areas%%%dragon_falls_areas;;;',
      // `;;;Factions in Dragon Falls%%%dragon_falls_factions;;;`,
    ]
  },
  'dragon_falls_areas': {
    name: 'dragon_falls_areas',
    label: 'Areas in Dragon Falls',
    placeTags: [
      places.dragon_falls,
    ],
    titleColor: colors.oceanBlue,
    type: wikiEntryTypes.directory.directory,
    paragraphs: [
      `;;;The Hills%%%dragon_falls_the_hills;;;`,
      `;;;The Cauldron%%%dragon_falls_the_cauldron;;;`,
      `;;;Westcliff%%%dragon_falls_westcliff;;;`,
      `;;;Southcliff%%%dragon_falls_southcliff;;;`,
      `;;;Whitecliff%%%dragon_falls_whitecliff;;;`,
      `;;;The Gardens%%%dragon_falls_the_gardens;;;`,
      `;;;The Caravan Market%%%dragon_falls_the_caravan_market;;;`,
    ]
  },
  'dragon_falls_the_hills': {
    name: 'dragon_falls_the_hills',
    label: 'The Hills',
    placeTags: [
      places.dragon_falls,
    ],
    titleColor: colors.oceanBlue,
    type: wikiEntryTypes.place.neighborhood,
    paragraphs: [
      `The Hills are the term for the general area around Dragon Falls. It is a hilly region and fairly dry; there are many ranches in the area and most of the region is pasture land.`,
      `In most of the surrounding area, the city falls away to ranches. A half mile or so to the northwest is a small ranch town called Saddle.`
    ]
  },
  'dragon_falls_the_cauldron': {
    name: 'dragon_falls_the_cauldron',
    label: 'The Cauldron',
    placeTags: [
      places.dragon_falls,
    ],
    titleColor: colors.oceanBlue,
    type: wikiEntryTypes.place.neighborhood,
    paragraphs: [
      `The Cauldron is the heart of Dragon Falls. It's a huge gorge, with houses and villas built into the cliff all around it. Dragon Falls itself cascades down out of a stone-sculpted dragon head's mouth far above, to crash into a pool at the rocky bottom of the Cauldron, near the entrance to the Darking Road. A long spiral staircase is carved into the walls of the Cauldron, leading from its base up to the rim in Westcliff.`,
      `Adventure tourism is rife at the Cauldron. A few cables cross it, which are used as ziplines by couriers who need to cross the Cauldron quickly. In the middle of the Cauldron, high above the ziplines, is a skyhook. This is used during the spring months for a tarzan rope from the Southcliff rim into a seasonal pool at the bottom, but may be commandeered for more practical uses also. Those who are brave can take the Plunge - a stone water slide that ejects riders from the dragon's mouth at the crest of Dragon Falls into the pool at its bottom, using Belts of Levitation provided by an operator for safety. A spellcaster is always present at the bottom to cast Feather Fall if needed - this is an extra charge if required.`
    ]
  },
  'dragon_falls_southcliff': {
    name: 'dragon_falls_southcliff',
    label: 'Southcliff',
    placeTags: [
      places.dragon_falls,
    ],
    titleColor: colors.oceanBlue,
    type: wikiEntryTypes.place.neighborhood,
    paragraphs: [
      `Southcliff is a poorer area, beyond the edge of the cliff, and is where the rougher, tougher folks often are. There are many warehouses in Southcliff, which contain much, as Dragon Falls is at the confluence of a few major trade routes. Consequently, Southcliff is home to many guards, mostly mercenaries. Taverns are numerous, as are middle-to-cheap class weaponsmiths, armorers, fletchers, pawnshops, and other merchants. The most well-known tavern in Southcliff is a rough one run by a male half-elf named Mork.`,
      `Southcliff's town centre is a small collection of stores that cater mainly to mercenaries and fighters. Orcs and a few hobgoblins tend to cluster around Southcliff - Hammerfist Arena and Blackblade Market in particular. There are many humans here also.`, 
      `Blackblade Market was named for the popularity of blackened blades in the area; this started as a practical thing for guards and mercenaries’ blades to attract less attention at night, but became part of the rugged, tough image. ‘Blackblade Mercenary Outfitters' is the biggest vendor here, with the best reputation, and modeled sets of armor and blades that are the envy of most of the mercenary community. Their armor is largely flat black in color, and many of the Black Shields frequent the place.`,
      `Most of the best mercenaries are experienced enough to pass on much of the fashion, preferring more practical dull leather for travel through hot, dry lands. The iconic black blades, however, are popular with everyone. The best ones are imported from Dwarvenguard and transmuted for color in Dragon Falls. A good transmuter takes no quality away from the blade by working it.`,
      `Marra Krinn is the owner of Blackblade Mercenary Outfitters. She is a very tough half-orc, treats everyone with tough love, and personally takes care of any problems arising in her shop without the need of a weapon. She is ripped and has dark, leathery skin - half Korimm’ban, long black hair. `,
      `Not far away is a fight club called Hammerfist Arena, where fighters of all sorts come to prove themselves.`,
      `A talented sword instructor, a half-dark-elf called Damien, runs a swordfighting consultancy here. He is on the pricier side but frequented by mercenaries looking to improve their skills quickly. A monster store, called the Dragon’s Den and run by The Brethren, is rumored to be hidden somewhere among the warehouses, and there are tales of a thieves’ hideout in tunnels beneath Southcliff.`,
    ]
  },
  'dragon_falls_westcliff': {
    name: 'dragon_falls_westcliff',
    label: 'Westcliff',
    placeTags: [
      places.dragon_falls,
    ],
    titleColor: colors.oceanBlue,
    type: wikiEntryTypes.place.neighborhood,
    paragraphs: [
      `To the west of the Cauldron, in Westcliff proper, is one of the most vibrant markets in Dalymbia, called Westcliff Square. Nearly everything is to be found here - a pet store, numerous arcane shops, a wind chime shop, open-air cafés and restaurants, a stained-glass boutique, two art galleries, candy shops, a toy shop, a storybook store, fine clothing, hairstylists and face transmuters, a portrait gallery, and a mapmaker, aside from the regular things one might expect, all in cobbled streets lined with quaint street lanterns.`,
      `One of the most famous inns in all of Dalymbia, the Smug Dragon Inn, is nestled at a crossroads a block away from the Westcliff Square. It is owned by a burly human named Marr Starhaven, though it has had more owners than anyone can remember. Students frequent this place in droves.`,
      `Near the edge of town is The Marksman, an archery and ranged weapon store that also has an outdoor range and offers games of skill (not just archery).`,
    ]
  },
  'dragon_falls_the_caravan_market': {
    name: 'dragon_falls_the_caravan_market',
    label: 'The Caravan Market',
    placeTags: [
      places.dragon_falls,
    ],
    titleColor: colors.oceanBlue,
    type: wikiEntryTypes.place.neighborhood,
    paragraphs: [
      `A little farther west than Westcliff Square, just out of town, is the Caravan Market. A caravan-for-hire business operates here and partners with a caravan guard/mercenary agency alongside it, and it is common for the townsfolk to come to the caravan circle in the evening to see which traders are passing through and look at their wares.`
    ]
  },
  'dragon_falls_the_gardens': {
    name: 'dragon_falls_the_gardens',
    label: 'The Gardens',
    placeTags: [
      places.dragon_falls,
    ],
    titleColor: colors.oceanBlue,
    type: wikiEntryTypes.place.neighborhood,
    paragraphs: [
      `Crystal Academy, the Scholars’ Guild, and Tütengarst Library are nestled in quiet grounds full of gardens, shady lawns, statues, and fountains.`,
      `One of the most talented transmutation students ever, when he graduated, transmuted the rock around the crest of Dragon Falls into a large dragon’s head, with the stream pouring out of its mouth. (Leaving one’s transmutation mark on Dragon Falls upon graduation is something of a tradition, though this is often done at night when not sanctioned by the picky professors - they only allow the highest-honored few students to do it). The people liked it so much that they refused to let the transmutation professors revert it, so it has remained until now. In a garden somewhere around the Cauldron is a statue of the student in the middle of a fountain, with green Tourmalines for eyes.`,
      `The Cauldron sides are lined with ledges, paths, waterfalls and small ponds. The school, Crystal Academy, is responsible for most of this. Dragon Falls is an almost impossibly picturesque place because of their attentions.`,
    ]
  },
}