import _ from 'lodash'
import * as terrainTypes from './terrainTypes'

const [
  CAVES,
  COAST,
  CITY,
  DESERT,
  FOREST,
  MOUNTAINS,
  PLAINS,
  SWAMP,
  VILLAGE,
  WINTER,
] = _.map(terrainTypes, (terrainType) => terrainType.name)

const NOT_WINTER = 'notWinter'

/**
 * light levels:
 * 0 - total darkness
 * 1 - dim light (Underdark)
 * 2 - total shade (jungle floor)
 * 3 - mostly shade (forest floor)
 * 4 - half sun (edge of a field)
 * 5 - mostly sun (field in an average climate)
 * 6 - full sun (field in a hot climate)
 * 7 - extreme sun (desert, no cover)
 * 
 * moisture levels: 
 * 0 - no moisture
 * 1 - dry (desert)
 * 2 - mostly dry (plains)
 * 3 - moderate water (field in an average climate)
 * 4 - high water (field in a wet climate)
 * 5 - standing water (rice field, swamp)
 * 6 - underwater
 */


export default [
  {
    label: "Blackroot",
    name: "blackroot",
    description: `A thin vine that has small dark leaves. The root is small and twisted.`,
    harvestDC: null,
    identifyDC: 15,
    location: `Predominantly grows underground near lakes and pools. The vine generally grows in places where a small bit of light occurs, sometimes thriving off of the glow provided by phosphorescent moss.`,
    lore: `Drow harvest the root for use in poison.`,
    terrain: [
      CAVES,
    ],
    type: [
      "vine",
    ],
    uses: [
      {
        ingredient: {
          type: 'poison',
          creationName: 'blackroot-poison',
          creationLabel: 'Blackroot Poison',
        } 
      },
    ],
    value: [
      {
        amount: 10,
        unit: 'gp',
        part: 'root',
      }
    ],
  }
]




// blackroot poison = Grind blackroot root into powder and distill in mammal blood for six weeks. Injury - DC13 constitution for 1d6 turns. On each fail, target is paralyzed until the end of their next turn.
// value - 500GP / dose