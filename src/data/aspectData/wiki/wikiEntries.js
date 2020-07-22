import colors from '../../styles/colors'
import places from '../../generalData/places'

const wikiEntryTypes = {
  place: {
    city: 'city',
    ruinedCity: 'ruined city',
  }
}

const wikiEntries = {
  'chinclincha': {
    name: 'chinclincha',
    label: 'Chinclincha',
    locationTags: [
      places.climina
    ],
    titleColor: colors.mountainsTeal,
    type: wikiEntryTypes.place.city,
    paragraphs: [
      'North around Shipwreck Coast, Chinclincha was the main city of Climina, a small, peaceful country that was very close to the elves of Lindiria. It was comprised fairly evenly of men, halflings, and gnomes. Many fled to Lindiria when Dalymbia took it over. Very artsy, delicate culture, as elven as a human city ever was. Once the war was over and Runazo’s attention turned elsewhere, many realized his desire for recognition and that he didn’t really care about changing the city once it flew his flag, and returned to their old lives. The region is still called Climina and it exports a lot of useful things - fine glasswork, jewelry, clothing, magical artifacts, and potions. They import rough gems and metal, some weaponry, and some of the more basic, bigger tools.',
      'Main city in the Climina region. Also known as the City of Wind Chimes - on the north coast of the coast, north of Port Maruna.',
      'Was part of a different country - a human/elven mix. Non military, artistic, gentle country. When taken over, very little battle, much of the culture was preserved. Two of the five founders of the Academy of the Moon were from Chinclincha.',
    ]
  },
  'ambalora': {
    name: 'ambalora',
    label: 'Ambalora',
    locationTags: [
      places.ambalora,
      places.gulandabar,
    ],
    titleColor: colors.creepyPurple,
    type: wikiEntryTypes.place.ruinedCity,
    paragraphs: [
      'Ambalora is above a waterfall from the confluence of the Tentacle River and Darkveil stream. Ambalora is built in the middle of a small lake, with gracefully arching stone bridges crossing the water into it. This is the only way it can be accessed, and is a dark place of stone and ruins, with flickers of magical activity every so often.',
      'Ambalora was founded by a small group of elves from Gulandabar who wanted to practice necromancy. They had encountered some success, though not everything they had hoped to achieve,by the time the Gulandabar elves decided they had gone too far, rallied an army, and destroyed them. Ambalora is still full of dangerous magical wards, dark magic, and undiscovered treasure.',
    ]
  },
}

export const wikiEntriesAsArray = Object.values(wikiEntries) 

export default wikiEntries