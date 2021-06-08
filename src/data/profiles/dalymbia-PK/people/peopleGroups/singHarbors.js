import colors from '../../../../styles/colors'
import { placeNames } from '../../places'

import races from '../races'
import occupations from '../occupations'
console.log({ occupations}, {placeNames})
export default {
  'morgan_grinkle': {
    name: 'morgan_grinkle',
    label: 'Morgan Grinkle',
    placeTags: [
      placeNames.sing_harbors,
    ],
    titleColor: colors.ashGrey,
    quirks: [`usually wears deerskin gloves (since he's allergic to metal)`],
    traits: [`deceitful`, `cunning`, `courteous`],
      storyInvolvement: [`Morgan owns a book called Systems of Nep Moora, and has offered to let the House of Lions use it for the exorbitant price of 100GP per hour. The party have been hired by Rezna to steal it from him instead.`,
      `Morgan has bought two monstrosities from the Petting Zoo under Port Maruna; they are being transported to Sing Harbors on the same ship as the party.`,
      `Morgan Grinkle is the Mister Grinkle that Talia & co met in Gwimbledym during their travels to the Feywild; he is quite a bit older then, of course, but because of the flow of time between the two planes he is still very much alive.`,
    ],
    age: 170,
    race: races['eladrin'],
    occupations: [occupations.collector, occupations.merchant],
    description: [
      `Morgan Grinkle is a dashing young Eladrin masquerading as a wealthy half-elven merchant in Sing Harbors. He is really from Gwimbledym in the Summer Realm of the Feywild, but he has set up a portal within the depths of his collection to the Material Plane, as a means of collecting items.`,
      `Morgan often throws extravagant parties as a way of making new contacts, either at his mansion or on board his yacht. When he can get away with it he is not above thievery; but he is a shrewd businessman and can usually get what he wants without taking such risks.`,
      `He often travels back and forth between the Material Plane and the Feywild.`,
      `He is very protective of his collection and goes to great lengths to make sure no one can intrude on it - he has many kinds of guards and wards around it.`,
    ],
    wants: `arcane items, social power`,
    fears: `poverty, deep water, metal`,
    connections: `Herman, his butler (who is a disguised hag named Betty Hairychin from the Feywild, who he has tricked into his service)`,
  },
};