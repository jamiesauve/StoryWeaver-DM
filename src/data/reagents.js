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
        part: 'root',
        harvestDC: 13,
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
  {
    label: "Adarna",
    name: "adarna",
    description: `The stem grows symmetrical pairs of stiff oval leaves. During warmer months the plant blossoms into violet flowers.`,
    effects: ``,
    identifyDC: 13,
    location: `grows on the edges of swamps`,
    lore: `The large roots of the plant can be ground into a powder, and is the main ingredient in a potion that allows people to see into other realms, often referred to as Sight Beyond.`,
    terrain: [
      SWAMP,
    ],
    type: "plant",
    subTypes: [
      "shrub",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'ingredient',
        part: 'root',
        harvestDC: 5,
        creation: {
          label: 'Sight Beyond',
          name: 'sight-beyond',
        },
      }, 
    ],
    value: [
      {
        amount: 2,
        unit: 'gp',
        part: 'root',
      },
    ],
  },
  {
    label: "Blackcorn",
    name: "blackcorn",
    description: `Resembles miniature corn.`,
    effects: `Bitter taste when raw`, 
    identifyDC: 15,
    location: `Grows around swamps and other humid areas`,
    lore: `It is overly difficult to cultivate and farm, which attributes to the rarity of the plant. The vegetable is prized not for eating, but for making a sweet alcohol called Blackcorn Whiskey that has a strong flavor of plums`,
    terrain: [
      SWAMP,
    ],
    type: "plant",
    subTypes: [
      "singlestem",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'ingredient',
        part: 'fruit',
        harvestDC: 2,
        creation: {
          label: 'Blackcorn Whiskey',
          name: 'blackcorn-whiskey',
        },
      }, 
    ],
    value: [
      {
        amount: 10,
        unit: 'gp',
        part: 'pound',
      },
    ],
  },
  {
    label: "Bloodpurge",
    name: "bloodpurge",
    description: `A cluster of broad, waxy leaves, and a single root that trails down into the water. The leaves are a bright green with red capillaries. During the warmer months a bright red flower sprouts from the top. `,
    effects: ``,
    identifyDC: 13,
    location: `Floats on the surface of marshes`,
    lore: `Drying the plant causes it to turn into a flaky powder, which is often used in a distilled tincture to neutralize minor poisons.`,
    terrain: [
      SWAMP,
    ],
    type: "plant",
    subTypes: [
      "aquatic",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'ingredient',
        part: 'whole',
        harvestDC: 5,
        creation: {
          label: 'Bloodpurge Tincture',
          name: 'bloodpurge-tincture',
        },
      }, 
    ],
    value: [
      {
        amount: 2,
        unit: 'sp',
        part: 'plant',
      },
    ],
  },
  {
    label: "Butterspice Weed",
    name: "butterspice-weed",
    description: `A short leafy plant, the top sprouts large yellow flowers upon reaching maturity`,
    effects: ``,
    identifyDC: 9,
    location: `The plant is quite hardy and can grow in a surprisingly wide variety of places.`,
    lore: `The most renown quality of the plant is that the leaves can be harvested and cured, becoming crumbly brown flakes which can be smoked. It is quite well known among halflings, which often grow it in small patches along with other crops. Those that smoke the weed claim that it has a smooth spicy flavor. `,
    terrain: [
      CITY,
      COAST,
      FOREST,
      JUNGLE,
      MOUNTAINS,
      SWAMP,
      PLAINS,
      VILLAGE,

    ],
    type: "plant",
    subTypes: [
      "mound",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'smoked',
        part: 'leaf',
        harvestDC: 2,
      }, 
    ],
    value: [
      {
        amount: 1,
        unit: 'cp',
        part: 'handful of leaves',
      },
    ],
  },
  {
    label: "Guklulla",
    name: "guklulla",
    description: `the plant appears to be little more than a pair of large, broad leaves floating on the surface of the stagnant water. During warmer months, a large yellow flower blossoms in the midst of the two leaves.`,
    effects: `Grinding the root into a paste and applying it to wounds provides not only accelerated healing, but also numbs the affected area.`,
    identifyDC: 9,
    location: `Grows in water in swamps`,
    lore: `Hidden beneath the surface, the plant has an extensive root system that reaches far down into the muck, a massive tangle that catches other debris that is carried along by the slow current. Various species of fish and snakes lay their eggs in the tangle of roots. Orc tribes harvest the Guklulla for the roots, pulling the plants out of the muck, cutting off sections of the roots and throwing them back into the swamp to be harvested again in the future.`,
    terrain: [
      SWAMP,

    ],
    type: "plant",
    subTypes: [
      "aquatic",
    ],
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'salve',
        part: 'root',
        harvestDC: 2,
        creation: {
          label: 'Guklulla Salve',
          name: 'guklulla-salve',
        },
      }, 
    ],
    value: [
      {
        amount: 5,
        unit: 'gp',
        part: 'root',
      },
    ],
  },
  {
    label: "Rattlestalks",
    name: "rattlestalks",
    description: `These tall stalks end in a thick bulb with a hard shell.`,
    effects: ``,
    identifyDC: 11,
    location: `Grow out of stagnant water.`,
    lore: `In the colder months, the stalk withers, and the bulb falls off, to float around until the bulb softens and falls away to disperse the seeds within. The seeds sit freely in the shell, and when shaken make a slight rattle noise, which is unnerving when the wind rushes through a cluster of rattlestalks. Tribes that live in the swamps will often use the unnerving aspect of the rattlestalks to create fear inducing noisemakers.`,
    terrain: [
      SWAMP,

    ],
    type: "plant",
    subTypes: [
      "reed",
    ],
    uses: [],
    value: [],
  },
]




// blackroot poison = Grind blackroot root into powder and distill in mammal blood for six weeks. Injury - DC13 constitution for 1d6 turns. On each fail, target is paralyzed until the end of their next turn.
// value - 500GP / dose