import { terrainTypeNames } from '../../generalData/terrainTypes'
import colors from '../../styles/colors'

export default {
  'Battle': {
    titleColor: colors.battleRed,
    trackObjects: [
      {
        title: 'Taiko Drums (1:00)',
        location: 'https://www.youtube.com/watch?v=1nq8G4BT7-w ',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
        
      },
      {
        title: 'Steady Viking Drums (1:00)',
        location: 'https://www.youtube.com/watch?v=47UqaBordWE',
        tags: ['skyrim', 'battle', 'serious', 'mix'],
      },
    ],
  },
  'Exploring': {
    titleColor: colors.exploringTeal,
    trackObjects: [
      {
        title: 'Exploring Mix (0:58)',
        location: 'https://www.youtube.com/watch?v=S4ADbLPLmN8',
        tags: ['hooves', 'horseback', 'birdsong', 'walk'],
      },
      {
        title: 'Enchanted Lands',
        location: 'https://www.youtube.com/watch?v=zloJ_yptWU0',
        tags: ['dull', 'quiet', 'ambience', 'grim', 'peaceful'],
      },
    ]
  },
  'Puzzle': {
    titleColor: colors.puzzleOrange,
    trackObjects: [
      {
        title: 'Taiko Drums - steady (1:11)',
        location: 'https://www.youtube.com/watch?v=KenLU_OtXsc',
        tags: ['puzzle', 'calm', 'thunder', 'interesting'],
      },
    ],
  },
  // 'Magic': {
  //   titleColor: colors.magicPink,
  //   trackObjects: [
      
  //   ]
  // },
  'Tension': {
    titleColor: colors.creepyPurple,
    trackObjects: [
      {
        title: 'Creepy Fight',
        location: 'https://www.youtube.com/watch?v=MI2wq39BPFo ',
        tags: ['creepy', 'unsettling', 'fear', 'anxiety'],
      },
    ],
  },
  // 'Weather': {
  //   titleColor: colors.weatherBlue,
  //   trackObjects: [

  //   ]
  // },
  'Tavern': {
    titleColor: colors.tavernSalmon,
    trackObjects: [
      {
        title: 'Music: Tavern (4:28)',
        location: 'https://www.youtube.com/watch?v=hWPPD5ww0eA',
        tags: ['tavern', 'inn', 'bard', 'music'],
      },
    ],
  }
}