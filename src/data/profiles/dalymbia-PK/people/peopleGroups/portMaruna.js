import colors from '../../../../styles/colors'
import { placeNames } from '../../places'

import races from '../races'
import occupations from '../occupations'

export default {
  'rezna': {
    name: 'rezna',
    label: 'Rezna',
    placeTags: [
      placeNames.port_maruna,
    ],
    titleColor: colors.ashGrey,
    quirks: [``],
    traits: [`rarely smiles`, `serious`],
    storyInvolvement: [``],
    age: 56,
    race: races['human'],
    occupations: [occupations.bureaucrat],
    description: [
      `Rezna is a human who runs the House of Lions. She used to be captain of the guard in Port Maruna, and retired to the House of Lions.`,
      `Rezna suffers from lycanthropy; she is a weretiger. A few of the guards know of her disease, and every full moon she goes to the prison and is locked up safely until her transformation passes.`,
    ],
    wants: `Stable business, stable life`,
    fears: `Discovery by the general public and exile, losing control`,
    connections: `Rillikamp - feels protective`,
  },
  'captain_raff': {
    name: 'captain_raff',
    label: 'Captain Raff ',
    placeTags: [
      placeNames.port_maruna,
      placeNames.sing_harbors,
    ],
    titleColor: colors.oceanBlue,
    quirks: [`scratches his beard a lot`, `talks like a pirate`, 'very proud of his ship'],
    traits: [`grizzly`, ``],
    storyInvolvement: [``],
    age: 56,
    race: races['human'],
    occupations: [occupations.sailor],
    description: [
      `Captain Raff is a ship captain.`,
    ],
    wants: `Money, enjoys being a captain`,
    fears: `See ;;;Superstitions Among Sailors%%%Superstitions Among Sailors;;;`,
    connections: `He is grateful to the party for saving his ship and crew from escaped monsters that he was transporting.`,
  },
};