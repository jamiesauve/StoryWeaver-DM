import colors from '../../../styles/colors'
import places from '../../../generalData/places'

import wikiEntryTypes from './../wikiEntryTypes'

export default {
  'dragon_falls': {
    name: 'dragon_falls',
    label: 'Dragon Falls',
    placeTags: [
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
      `The Hills are the term for the general area around Dragon Falls. It is a hilly region and fairly dry; there are many ranches in the area and most of the region is pasture land.`
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
      `The Cauldron is the heart of Dragon Falls.`
    ]
  },
}