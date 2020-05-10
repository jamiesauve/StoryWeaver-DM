import _ from 'lodash'
import * as terrainTypes from './terrainTypes'

const [
  CAVES,
  COAST,
  CITY,
  DESERT,
  FOREST,
  FRESHWATER,
  JUNGLE,
  MOUNTAINS,
  OCEAN,
  PLAINS,
  SWAMP,
  VILLAGE,
  WINTER,
  EXOTIC,
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
      JUNGLE,
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
  },
  {
    label: "Angakara Tree",
    name: "angakara",
    description: `A broad oak-like tree that sprouts many branches and a multitude of light green leaves.`,
    effects: null,
    harvestDC: 10,
    identifyDC: 9,
    location: `widespread in forests, though not in particularly wet or dry areas.`,
    lore: `Good wood for making bows. Now much rarer now than it used to be because of overharvesting.`,
    terrain: [
      CITY,
      FOREST,
      JUNGLE,
      MOUNTAINS,
      PLAINS,
      VILLAGE,
    ],
    type: "plant",
    subTypes: [
      "tree",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, 
      {
        type: 'material',
        creation: {
          type: 'equipment',
          name: 'bow',
          label: 'Bows',
        },
      },
    ],
    value: [
      {
        amount: 1,
        unit: 'gp',
        part: 'limb',
      },
      {
        amount: 15,
        unit: 'gp',
        part: 'stave',
      },
    ],
  },
  {
    label: "Flameleaf",
    name: "flameleaf",
    description: `Tall, elegant, flax-like plant with leaves colored like flames - blue, red, orange, to pale yellow at the tips. Grows a deep red fruit nestled in the middle that glows. `,
    effects: `Gives off a moderate amount of heat in a 10-foot radius.  Holding a leaf of the plant that was harvested in the last year keeps the holder comfortably warm.`,
    identifyDC: 7,
    location: `Found in active volcanoes and on the Plane of Fire.`,
    lore: `This is one of the only plants cultivated by Azers. Salamanders are known to love the fruit, and will eat it whole. The fruit is edible but spicy enough to kill other creatures in large amounts.`,
    terrain: [
      EXOTIC,
    ],
    type: "plant",
    subTypes: [
      "flax",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'eaten',
        part: 'fruit',
        harvestDC: 15,
        creation: {
          label: 'Flameleaf Pepper',
          name: 'flameleaf-pepper',
          type: 'spice',
        },
      },
      {
        type: 'gear',
        part: 'leaf',
        harvestDC: 5,
        creation: {
          label: 'Flameleaf',
          name: 'flameleaf',
          gearType: 'item',
          use: 'Holding a leaf of the plant that was harvested in the last year keeps the holder comfortably warm.',
        },
      }, 
    ],
    value: [
      {
        amount: 200,
        unit: 'gp',
        part: 'fruit',
      },
      {
        amount: 20,
        unit: 'gp',
        part: 'leaf',
      }
    ],
  },
  {
    label: "Magma Lily",
    name: "magma-lily",
    description: `medium-sized plants with wide, ashen blue leaves and bright yellow flowers blooming up from the middle of the plant. Has long, thin roots.`,
    effects: `If the flower is smelled, it grants advantage to perception checks using smell for 1d4 hours.`,
    identifyDC: 5,
    location: `Found in active volcanoes and on the Plane of Fire.`,
    lore: `Cultivated by Azers for its beauty. Plants are often tethered so they can be pulled to safety before eruptions.`,
    terrain: [
      EXOTIC,
    ],
    type: "plant",
    subTypes: [
      "aquatic",
    ],
    uses: [],
    value: [],
  },
  {
    label: "Magma Urchin",
    name: "magma-urchin",
    description: `Large, spiky, blackened balls that live in lava, with a softer interior.`,
    effects: `A creature pierced by a Magma Urchin needle is vulnerable to fire damage for 1d4 days.`,
    identifyDC: 7,
    location: `Found immersed in lava, attached to rock.`,
    lore: `These are harvested by Salamanders and sometimes traded to other races.`,
    terrain: [
      EXOTIC,
    ],
    type: "animal",
    subTypes: [
      "shellfish",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'eaten',
        part: 'interior',
        harvestDC: 25,
        creation: {
          label: 'Magma Urchin',
          name: 'magma-uchin',
        },
      },
      {
        type: 'weapon',
        part: 'spine',
        harvestDC: 12,
        creation: {
          label: 'Magma Urchin Spine',
          name: 'magma-urchin-spine',
          weaponType: 'dart',
          range: '20/60',
          damage: '1d4 piercing + 1d4 fire',
        },
      }, 
    ],
    value: [
      {
        amount: 10,
        unit: 'gp',
        part: 'spine',
      },
      {
        amount: 5,
        unit: 'sp',
        part: 'body',
      }
    ],
  },
]




// blackroot poison = Grind blackroot root into powder and distill in mammal blood for six weeks. Injury - DC13 constitution for 1d6 turns. On each fail, target is paralyzed until the end of their next turn.
// value - 500GP / dose