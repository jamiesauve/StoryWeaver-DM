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
    effects: `If touched with bare skin, the stem and leaves cause redness and itchiness starting within 1 hour and lasting for days.`,
    harvestDC: null,
    identifyDC: 15,
    location: `Predominantly grows underground near lakes and pools. The vine generally grows in places where a small bit of light occurs, sometimes thriving off of the glow provided by phosphorescent moss.`,
    lore: `Drow harvest the root for use in poison.`,
    terrain: [
      CAVES,
    ],
    type: "plant",
    subTypes: [
      "vine",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, 
      {
        type: 'ingredient',
        creation: {
          type: 'poison',
          name: 'blackroot-poison',
          label: 'Blackroot Poison',
        },
      },
    ],
    value: [
      {
        amount: 10,
        unit: 'gp',
        part: 'root',
      }
    ],
  },
  {
    label: "Torment Toadstool",
    name: "torment-toadstool",
    description: `Large blue mushrooms.`,
    effects: `Those that step on the toadstool causes it to rupture and release a cloud of spores within a 5ft-radius. Those that inhale the spores must make a DC 11 Constitution saving throw or become incapacitated while vomiting for the next minute.`,
    harvestDC: 10,
    identifyDC: 13,
    location: `Found in swamps and wet areas, but not in standing water.`,
    lore: `Most people are careful not to step on the toadstools. Some villagers harvest the mushrooms to make a particularly earthy tasting ale.`,
    terrain: [
      FOREST,
      SWAMP,
    ],
    type: "plant",
    subTypes: [
      "mushroom",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, 
      {
        type: 'ingredient',
        creation: {
          type: 'beverage',
          name: 'toadstool-ale',
          label: 'Toadstool Ale',
        },
      },
    ],
    value: [
      {
        amount: 1,
        unit: 'cp',
        part: 'cap',
      }
    ],
  }
]




// blackroot poison = Grind blackroot root into powder and distill in mammal blood for six weeks. Injury - DC13 constitution for 1d6 turns. On each fail, target is paralyzed until the end of their next turn.
// value - 500GP / dose