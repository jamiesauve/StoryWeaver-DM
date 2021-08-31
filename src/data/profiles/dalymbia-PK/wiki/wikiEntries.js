import colors from '../../../styles/colors'

import places from '../places'
import wikiEntryTypes from './wikiEntryTypes'

import {
  dragonFallsEntries,
  portMarunaEntries,
  nepMooraEntries,
} from './entryGroups'

const wikiEntries = {
  ...dragonFallsEntries,
  ...portMarunaEntries,
  ...nepMooraEntries,
  "superstitions_among_sailors": {
    name: `superstitions_among_sailors`,
    label: `Superstitions Among Sailors`,
    placeTags: [
      places.port_maruna,
      places.sing_harbors,
    ],
    titleColor: colors.cavesPurple,
    type: wikiEntryTypes.faction.guild,
    paragraphs: [
      `Sailors around Bulandra tend to hold to these things as bad luck:`,
      `Starting a journey without pouring a bottle of wine into the sea to ask for safe passage. If a woman is on board, she should do it.`,
      `Seeing a Mermian shift while in the water - Very bad luck`,
      `Bringing a catch of fish ashore and not throwing the first one back`,
      `Complaining about the weather within earshot of the sea`,
    ]
  },
}

export const wikiEntriesAsArray = Object.values(wikiEntries) 

export default wikiEntries

// INSERT INTO "main"."wiki_entry"
// ("id", "title", "body", "wiki_entry_type_id", "color_id")
// VALUES (1, 'Superstitions Among Sailors', 'Sailors around Bulandra tend to hold to these things as bad luck\nStarting a journey without pouring a bottle of wine into the sea to ask for safe passage. If a woman is on board, she should do it\nSeeing a Mermian shift while in the water - Very bad luck\nBringing a catch of fish ashore and not throwing the first one back\nComplaining about the weather within earshot of the sea', 2, 6);