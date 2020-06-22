import _ from 'lodash'
import terrainTypes from '../../generalData/terrainTypes'
import reagentTypes from './reagentTypes'
import recipeTypes from './recipeTypes'

const [
  caves,
  coast,
  city,
  desert,
  forest,
  freshwater,
  jungle,
  mountains,
  ocean,
  plains,
  swamp,
  village,
  winter,
  exotic,
] = _.map(terrainTypes, (terrainType) => terrainType.name)

// const {
//   plant,
//   mineral,
//   creature,
//   otherReagentType,
// } = reagentTypes

// const {
//   consumable,
//   cosmetic,
//   gear,
//   item,
//   medicine,
//   poison,
//   other,
// } = recipeTypes

// most reagents aren't a recipe on their own - use this to denote that
// a reagent is a component used in making a recipe.
const component = "component"

/**
 * identifyDC: The is the nature roll to know what the plant is and what it can be used for. A creature who knows
 * what they are looking for usually doesn't need to do this.
 * 
 * harvestDC: The is an INT(nature) or straight DEX roll to harvest the reagent. On a failure,
 * the reagent is unusable, and the creature may suffer the harvestFailEffect.
 * units: default is 1 oz
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
      caves,
    ],
    type: reagentTypes.plant.vine,
    uses: [
      // can be ingredient, eaten, salve, material component, 
      {
        type: component,
        partLabel: 'Root',
        partName: 'root',
        harvestDC: 13,
        creation: {
          type: 'poison',
          name: 'blackroot-poison', // maps to recipe.name
          label: 'Blackroot Poison',
        },
      },
    ],
    value: [
      {
        amount: 3,
        unit: 'gp',
        partLabel: 'Root',
        partName: 'root'
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
      forest,
      jungle,
      swamp,
    ],
    type: reagentTypes.plant.fungus,
    uses: [
      // can be ingredient, eaten, salve, material component, 
      {
        type: component,
        partLabel: 'Cap',
        partName: 'cap',
        creation: {
          type: consumable,
          name: 'toadstool-ale',
          label: 'Toadstool Ale',
        },
      },
    ],
    value: [
      {
        amount: 1,
        unit: 'cp',
        partLabel: 'Cap',
        partName: 'cap',
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
      city,
      forest,
      jungle,
      mountains,
      plains,
      village,
    ],
    type: reagentTypes.plant.tree,
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
        partLabel: 'Limb',
        partName: 'limb',
      },
      {
        amount: 7,
        unit: 'gp',
        partLabel: 'Stave',
        partName: 'stave',
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
      exotic,
    ],
    type: reagentTypes.plant.herbaceous,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'eaten',
        partLabel: 'Fruit',
        partName: 'fruit',
        harvestDC: 15,
        creation: {
          label: 'Flameleaf Pepper',
          name: 'flameleaf-pepper',
          type: 'spice',
        },
      },
      {
        type: 'gear',
        partLabel: 'Leaf',
        partName: 'leaf',
        harvestDC: 5,
        creation: {
          label: 'Flameleaf',
          name: 'flameleaf',
          gearType: 'item',
          use: 'holding a leaf of the plant that was harvested in the last year keeps the holder comfortably warm.',
        },
      }, 
    ],
    value: [
      {
        amount: 5,
        unit: 'gp',
        partLabel: 'Fruit',
        partName: 'fruit',
      },
      {
        amount: 2,
        unit: 'gp',
        partLabel: 'Leaf',
        partName: 'leaf',
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
      exotic,
    ],
    type: reagentTypes.plant.aquatic,
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
      exotic,
    ],
    type: creature.shellfish,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'eaten',
        partLabel: 'Interior',
        partName: 'interior',
        harvestDC: 25,
        creation: {
          label: 'Magma Urchin',
          name: 'magma-uchin',
        },
      },
      {
        type: 'weapon',
        partLabel: 'Spine',
        partName: 'spine',
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
        amount: 2,
        unit: 'gp',
        partLabel: 'spine',
        partName: 'spine',
      },
      {
        amount: 5,
        unit: 'sp',
        partLabel: 'Body',
        partName: 'body',
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
      swamp,
    ],
    type: reagentTypes.plant.shrub,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: component,
        partLabel: 'Root',
        partName: 'root',
        harvestDC: 5,
        creation: {
          label: 'Sight Beyond',
          name: 'sight-beyond',
          type: 'potion',
        },
      }, 
    ],
    value: [
      {
        amount: 2,
        unit: 'gp',
        partLabel: 'Root',
        partName: 'root',
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
      swamp,
    ],
    type: reagentTypes.plant.herbaceous,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: component,
        partLabel: 'Fruit',
        partName: 'fruit',
        harvestDC: 2,
        creation: {
          label: 'Blackcorn Whiskey',
          name: 'blackcorn-whiskey',
          type: consumable,
        },
      }, 
    ],
    value: [
      {
        amount: 1,
        unit: 'gp',
        partLabel: 'Pound',
        partName: 'pound',
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
      swamp,
    ],
    type: reagentTypes.plant.aquatic,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: component,
        partLabel: 'Whole',
        partName: 'whole',
        harvestDC: 5,
        creation: {
          label: 'Bloodpurge Tincture',
          name: 'bloodpurge-tincture',
          type: consumable,
        },
      }, 
    ],
    value: [
      {
        amount: 2,
        unit: 'sp',
        partLabel: 'Plant',
        partName: 'plant',
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
      city,
      coast,
      forest,
      jungle,
      mountains,
      swamp,
      plains,
      village,

    ],
    type: reagentTypes.plant.herbaceous,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: consumable, // smoked
        partLabel: 'Leaf',
        partName: 'leaf',
        harvestDC: 2,
      }, 
    ],
    value: [
      {
        amount: 1,
        unit: 'cp',
        partLabel: 'Handful of leaves',
        partName: 'handful of leaves',
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
      swamp,

    ],
    type:reagentTypes.plant.aquatic,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'salve',
        partLabel: 'Root',
        partName: 'root',
        harvestDC: 2,
        creation: {
          label: 'Guklulla Salve',
          name: 'guklulla-salve',
        },
      }, 
    ],
    value: [
      {
        amount: 2,
        unit: 'gp',
        partLabel: 'Root',
        partName: 'root',
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
      swamp,

    ],
    type: reagentTypes.plant.reed,
    uses: [],
    value: [],
  },
  {
    label: "Wipplecap",
    name: "wipplecap",
    description: `A 1-2 foot tall mushroom. Looks like a rich brown morel.`,
    effects: `If jarred or knocked over, it releases a cloud of poisonous spores (5-10 foot radius). If inhaled, a creature takes 2d6 poison damage. This damage repeats at the start of each of its turns. If not in the poisoned area anymore, a poisoned creature can make a DC13 Constitution saving throw to reduce the damage by 1d6. This resets if the creature inhales any more spores.`,
    identifyDC: 11,
    location: `Dry, especially dark areas`,
    lore: `Was used as a battlefield poison by the Durukhaaz dwarves to repel the Black Shields when besieged.`,
    terrain: [
      caves,

    ],
    type: reagentTypes.plant.fungus,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'poison',
        partLabel: 'Spores',
        partName: 'spores',
        harvestDC: 17,
        creation: {
          label: 'Wipplecap Spores',
          name: 'wipplecap-spores',
          poisonMechanism: 'inhaled',
        },
      },
      {
        type: component,
        partLabel: 'Spores',
        partName: 'spores',
        harvestDC: 17,
        creation: {
          label: 'Wipplecap Poison',
          name: 'wipplecap-poison',
          type: 'poison',
        },
      }, 
    ],
    value: [
      {
        amount: 5,
        unit: 'gp',
        partLabel: 'ounce of spores',
        partName: 'ounce-of-spores',
      },
    ],
  },
  {
    label: "Bone Tree (Amagur)",
    name: "bone-tree",
    description: `A tree-sized, white, gnarled, plant. Has no leaves and looks like a dead tree. Very hard and heavy.`,
    effects: ``,
    identifyDC: 8,
    location: `Sunless caves. Thrives on bioluminescence.`,
    lore: `Not good for building since it deteriorates and crumbles when dead.`,
    terrain: [
      caves,
    ],
    type: reagentTypes.plant.tree,
    uses: [],
    value: [],
  },
  {
    label: "Starflower",
    name: "starflower",
    description: `A tiny, thin plant with luminescent, pure white, starlike flowers.`,
    effects: `A creature touching a starflower blossom that is still attached and alive can see the stars, no matter where they are.`,
    identifyDC: 16,
    location: `High on dry, rocky walls inside underground caves.`,
    lore: `Valued for use in divination magic. It is said that some ancient culture planted Starflowers in many hidden places in the Underdark as a means of navigation.`,
    terrain: [
      caves,
    ],
    type: reagentTypes.plant.herbaceous,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
    ],
    value: [
      {
        amount: 5,
        unit: 'gp',
        partLabel: 'dried flower',
        partName: 'dried flower',
      },
    ],
  },
  {
    label: "Silver Dust",
    name: "Silver Dust",
    description: `A tiny, luminescent moss.`,
    effects: ``,
    identifyDC: 13,
    location: `Rock walls in lightless areas`,
    lore: `Powdered for use as eyeshadow by dark elves for its sparkling, luminescent quality.`,
    terrain: [
      caves,
    ],
    type: reagentTypes.plant.fungus,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
      {
        type: 'cosmetic',
        partLabel: 'Plant',
        partName: 'plant',
        harvestDC: 6,
        creation: {
          label: 'Silver Dust Eyeshadow',
          name: 'silver-dust-eyeshadow',
        },
      },
    ],
    value: [
      {
        amount: 5,
        unit: 'gp',
        partLabel: 'pound',
        partName: 'pound',
      },
    ],
  },
  {
    label: "Moon Blossom",
    name: "moon-blossom",
    description: `A small plant with silvery lobed leaves and pearly white flowers`,
    effects: `A single drop of water is often in the middle of each blossom, and tastes sweet. If contaminated water is dripped into a flower, it is purified within one hour.`,
    identifyDC: 13,
    location: `Grows around water in lightless areas`,
    lore: `Used in purification potions and magic.`,
    terrain: [
      caves,
    ],
    type: reagentTypes.plant.herbaceous,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
    ],
    value: [
      {
        amount: 1,
        unit: 'sp',
        partLabel: 'ounce of flowers',
        partName: 'ounce of flowers',
      },
    ],
  },
  {
    label: "Silver Lace",
    name: "silver-lace",
    description: `A small plant with thin, serrated silver leaves`,
    effects: ``,
    identifyDC: 15,
    location: `Grows around water in lightless areas`,
    lore: ``,
    terrain: [
      caves,
    ],
    type: reagentTypes.plant.shrub,
    uses: [
      // can be ingredient, eaten, salve, material component, gear
    ],
    value: [],
  },
  {
    label: "Darkhorn",
    name: "darkhorn",
    description: `Small tapered tendrils standing upward, the mushroom is quite rigid, and the black exterior makes it difficult to see in the winding caverns of the Underdark. Has a slight musky aroma`,
    effects: `A creature falling on a Darkhorn mushroom takes an additional 1d4 piercing damage from their fall. / Darkhorn smells wonderful if cooked, but contains sharp fibers that cause internal damage if eaten. A creature who consumes Darkhorn takes 2d4 piercing damage every hour for 8 hours.`,
    identifyDC: 15,
    location: `Grows in lightless places.`,
    lore: `Dwarves add small chunks of the cap (carefully, so none gets out) to their ale while aging it to add flavor.`,
    terrain: [
      caves,
    ],
    type: reagentTypes.plant.fungus,
    uses: [],
    value: [],
  },
]