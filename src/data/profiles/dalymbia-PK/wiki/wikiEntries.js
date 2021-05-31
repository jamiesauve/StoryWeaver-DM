import colors from '../../../styles/colors'
import { placeNames } from '../../dalymbia-DK/places'

import wikiEntryTypes from './wikiEntryTypes'

import {
  dragonFallsEntries,
  portMarunaEntries,
} from './entryGroups'

const wikiEntries = {
  ...dragonFallsEntries,
  ...portMarunaEntries,
}

export const wikiEntriesAsArray = Object.values(wikiEntries) 

export default wikiEntries