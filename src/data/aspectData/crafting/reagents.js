import _ from 'lodash'
import { terrainTypeNames } from '../../generalData/terrainTypes'
import reagentTypes from './reagentTypes'
import recipeTypes from './recipeTypes'
import plantParts from './plantParts'
import creatureParts from './creatureParts'
import moneyUnits from '../../generalData/moneyUnits'

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


/**
 * harvestDC: The is an INT(nature) or straight DEX roll to harvest the reagent. On a failure,
 * the reagent is unusable, and the creature may suffer the harvestFailEffect.
 * 
 * units: default is 1 oz
 */
 

export default [
  {
    label: "Blackroot",
    name: "blackroot",
    type: reagentTypes.plant.vine,
    
    description: `A thin vine that has small dark leaves. The root is small and twisted.`,
    effects: [
      `If touched with bare skin, the stem and leaves cause redness and itchiness starting within 1 hour and lasting for days.`,
    ],
    location: `Predominantly grows underground near lakes and pools. The vine generally grows in places where a small bit of light occurs, sometimes thriving off of the glow provided by phosphorescent moss.`,
    lore: [
      `Some dark elves harvest the root for use in poison.`
    ],
    
    terrain: [
      terrainTypeNames.caves,
    ],

    harvesting: [
      {
        reagentPart: plantParts.root,
        harvestDC: 13,
        onHarvestFailure: `see ;;;Blackroot Poison%%%blackroot-poison%%%recipes;;;`,
        recipes: [
          {
            type: recipeTypes.poison.wound,
            name: 'blackroot-poison',
            label: ';;;Blackroot Poison%%%blackroot-poison%%%recipes;;;',
          },
        ],
        simpleUses: [],
        value: {
          amount: 3,
          unit: moneyUnits.gp,
          amountOfReagent: '',
        },
      },
    ],
  },
  {
    label: "Torment Toadstool",
    name: "torment-toadstool",
    type: reagentTypes.plant.fungus,

    description: `Large blue mushrooms.`,
    effects: [
      `Those that step on the toadstool causes it to rupture and release a cloud of spores within a 5ft-radius. Those that inhale the spores must make a DC 11 Constitution saving throw or become incapacitated while vomiting for the next minute.`,
    ],
    location: `Found in terrainTypeNames.swamps and wet areas, but not in standing water.`,
    lore: [
      `Most people are careful not to step on the toadstools.`,
      `Some terrainTypeNames.villagers harvest the mushrooms to make a particularly earthy tasting ale.`
    ],

    terrain: [
      terrainTypeNames.forest,
      terrainTypeNames.jungle,
      terrainTypeNames.swamp,
    ],

    harvesting: [
      {
        reagentPart: plantParts.cap,
        harvestDC: 5,
        onHarvestFailure: ``,
        recipes: [
          {
            type: recipeTypes.consumable.beverage,
            name: 'toadstool-ale',
            label: 'Toadstool Ale',
          },
        ],
        simpleUses: [],
        value: {
          amount: 1,
          unit: moneyUnits.sp,
          amountOfReagent: "cap",
        },
      }
    ],
  },
  {
    label: "Angakara Tree",
    name: "angakara",
    type: reagentTypes.plant.tree,
    
    description: `A broad oak-like tree that sprouts many branches and a multitude of light green leaves.`,
    effects: [],
    location: `widespread in terrainTypeNames.forests, though not in particularly wet or dry areas.`,
    lore: [
      `Good wood for making bows. Now much rarer now than it used to be because of overharvesting.`,
    ],

    terrain: [
      terrainTypeNames.city,
      terrainTypeNames.forest,
      terrainTypeNames.jungle,
      terrainTypeNames.mountains,
      terrainTypeNames.plains,
      terrainTypeNames.village,
    ],

    harvesting: [
      {
        reagentPart: plantParts.limb,
        harvestDC: 5,
        onHarvestFailure: ``,
        recipes: [
          {
            type: recipeTypes.item.weapon,
            name: 'bow',
            label: 'Bow',
          },
        ],
        simpleUses: [],
        value: {
          amount: 1,
          unit: moneyUnits.gp,
          amountOfReagent: "limb",
        },
      },
    ],
  },
  {
    label: "Flameleaf",
    name: "flameleaf",
    type: reagentTypes.plant.flax,

    description: `Tall, elegant, flax-like plant with leaves colored like flames - blue, red, orange, to pale yellow at the tips. Grows a deep red fruit nestled in the middle that glows.`,
    effects: [
      `Gives off a moderate amount of heat in a 10-foot radius.`,
      `Holding a leaf of the plant that was harvested within the last year keeps the holder comfortably warm.`,
    ],
    location: `Found in active volcanoes and on the Plane of Fire.`,
    lore: [
      `This is one of the only plants cultivated by Azers.`,
      `Salamanders are known to love the fruit, and will eat it whole.`,
      `The fruit is edible but spicy enough to kill other creatures in large amounts.`,
    ],

    terrain: [
      terrainTypeNames.exotic,
    ],

    harvesting: [
      {
        reagentPart: plantParts.fruit,
        harvestDC: 15,
        onHarvestFailure: `If the harvester is not wearing protective gloves, they take 1d4 fire damage and have disadvantage on dexterity checks using their hands for 24 hours.`,
        recipes: [{
          type: recipeTypes.consumable.edible,
          label: "Flameleaf Pepper",
          name: 'flameleaf-pepper',
        }],
        simpleUses: [],
        value: {
          amount: 2,
          unit: moneyUnits.gp,
          amountOfReagent: "pound",
        },
      },
      {
        reagentPart: plantParts.leaf,
        harvestDC: 5,
        onHarvestFailure: ``,
        recipes: [],
        simpleUses: [{
          type: recipeTypes.item.magical,
        }],
        value: {
          amount: 2,
          unit: moneyUnits.gp,
          amountOfReagent: "leaf",
        },
      },
    ]
  },
  {
    label: "Magma Lily",
    name: "magma-lily",
    type: reagentTypes.plant.aquatic,

    description: `Medium-sized plants with wide, ashen blue leaves and bright yellow flowers blooming up from the middle of the plant. Has long, thin roots.`,
    effects: [
      `If the flower is smelled, it grants advantage to perception checks using smell for 1d4 hours.`,
    ],
    location: `Found in active volcanoes and on the Plane of Fire.`,
    lore: [
      `Cultivated by Azers for its beauty. These plants are often tethered so they can be pulled to safety before eruptions.`,
    ],
    terrain: [
      terrainTypeNames.exotic,
    ],

    harvesting: [
      {
        reagentPart: plantParts.flower,
        harvestDC: 7,
        onHarvestFailure: ``,
        recipes: [],
        simpleUses: [],
        value: [],
      },
    ]
  },
  {
    label: "Magma Urchin",
    name: "magma-urchin",
    type: reagentTypes.creature.shellfish,
    
    description: `Large, spiky, blackened balls that live in lava, with a softer interior.`,
    effects: [
      `A creature pierced by a Magma Urchin needle takes 1d4 piercing damage + 1d4 fire damage.`,
    ],
    location: `Found immersed in lava, attached to rock.`,
    lore: [
      `Magma Urchins are harvested by Salamanders and sometimes traded to other races.`,
    ],

    terrain: [
      terrainTypeNames.exotic,
    ],

    harvesting: [
      {
        reagentPart: creatureParts.flesh,
        harvestDC: 20,
        onHarvestFailure: ``,
        recipes: [],
        simpleUses: [
          recipeTypes.consumable.edible,
        ],
        value: {
          amount: 15,
          unit: moneyUnits.gp,
          amountOfReagent: "urchin",
        },
      },
      {
        reagentPart: creatureParts.spine,
        harvestDC: 8,
        onHarvestFailure: `see effect`,
        recipes: [],
        simpleUses: [
          recipeTypes.item.weapon,
        ],
        value: {
          amount: 3,
          unit: moneyUnits.gp,
          amountOfReagent: "spine",
        },
      }
    ],
  },
  {
    label: "Adarna",
    name: "adarna",
    type: reagentTypes.plant.shrub,

    description: `The stem grows symmetrical pairs of stiff oval leaves. During warmer months the plant blossoms into violet flowers.`,
    effects: [],
    location: `Grows around the edges of swamps`,
    lore: [
      `The large roots of the plant can be ground into a powder, and is the main ingredient in a potion that allows people to see into other realms, often referred to as Sight Beyond.`,
    ],

    terrain: [
      terrainTypeNames.swamp,
    ],

    harvesting: [
      {
        reagentPart: plantParts.root,
        harvestDC: 7,
        onHarvestFailure: ``,
        recipes: [{
          type: recipeTypes.consumable.potion,
          label: "Sight Beyond",
          name: 'sight-beyond',
        }],
        simpleUses: [],
        value: {
          amount: 2,
          unit: moneyUnits.gp,
          amountOfReagent: "root",
        },
      },
    ]
  },
  {
    label: "Blackcorn",
    name: "blackcorn",
    type: reagentTypes.plant.reed,

    description: `Resemble miniature corn plants in dark colors.`,
    effects: [
      `Bitter taste when raw.`
    ],
    location: `Grows around terrainTypeNames.swamps and other humid areas.`,
    lore: [
      `It is overly difficult to cultivate and farm, which attributes to the rarity of the plant. The vegetable is prized not for eating, but for making a sweet alcohol called Blackcorn Whiskey that has a strong flavor of plums`,
    ],

    terrain: [
      terrainTypeNames.swamp,
    ],

    harvesting: [
      {
        reagentPart: plantParts.fruit,
        harvestDC: 5,
        onHarvestFailure: ``,
        recipes: [{
          type: recipeTypes.consumable.beverage,
          label: "Blackcorn Whiskey",
          name: 'blackcorn-whiskey',
        }],
        simpleUses: [
          recipeTypes.consumable.edible,
        ],
        value: {
          amount: 1,
          unit: moneyUnits.gp,
          amountOfReagent: "bushel",
        },
      },
    ]
  },
  {
    label: "Bloodpurge",
    name: "bloodpurge",
    type: reagentTypes.plant.aquatic,

    description: `A cluster of broad, waxy leaves, and a single root that trails down into the water. The leaves are a bright green with red capillaries. During the warmer months a bright red flower sprouts from the top.`,
    effects: [],
    location: `Floats on the surface of marshes and calm places in lakes.`,
    lore: [
      `Drying the plant causes it to turn into a flaky powder, which is often used in a distilled tincture to neutralize minor poisons.`,
    ],

    terrain: [
      terrainTypeNames.freshwater,
      terrainTypeNames.swamp,
    ],

    harvesting: [
      {
        reagentPart: plantParts.leaf,
        harvestDC: 5,
        onHarvestFailure: ``,
        recipes: [{
          type: recipeTypes.medecine.ingested,
          label: "Bloodpurge Tincture",
          name: 'bloodpurge-tincture',
        }],
        simpleUses: [],
        value: {
          amount: 5,
          unit: moneyUnits.gp,
          amountOfReagent: "pound",
        },
      },
    ]
  },
  {
    label: "Butterspice Weed",
    name: "butterspice-weed",
    type: reagentTypes.plant.herbaceous,

    description: `A short leafy plant, the top sprouts large yellow flowers upon reaching maturity.`,
    effects: [],
    location: `The plant is quite hardy and can grow in a surprisingly wide variety of places.`,
    lore: [
      `The most renowned quality of the plant is that the leaves can be harvested and cured, becoming crumbly brown flakes which can be smoked. It is quite well known among halflings, which often grow it in small patches along with other crops. Those that smoke the weed claim that it has a smooth spicy flavor.`,
    ],

    terrain: [
      terrainTypeNames.city,
      terrainTypeNames.coast,
      terrainTypeNames.forest,
      terrainTypeNames.jungle,
      terrainTypeNames.mountains,
      terrainTypeNames.swamp,
      terrainTypeNames.plains,
      terrainTypeNames.village,
    ],

    harvesting: [
      {
        reagentPart: plantParts.leaf,
        harvestDC: 2,
        onHarvestFailure: ``,
        recipes: [{
          type: recipeTypes.consumable.smoked,
          label: "Butterfly Leaf",
          name: 'butterfly-leaf',
        }],
        simpleUses: [],
        value: {
          amount: 5,
          unit: moneyUnits.sp,
          amountOfReagent: "pound",
        },
      },
    ]
  },
  {
    label: "Guklulla",
    name: "guklulla",
    type: reagentTypes.plant.aquatic,

    description: `The plant appears to be little more than a pair of large, broad leaves floating on the surface of the stagnant water. During warmer months, a large yellow flower blossoms in the midst of the two leaves.`,
    effects: [
      `Grinding the root into a paste and applying it to wounds provides not only accelerated healing, but also numbs the affected area. A creature who applies Guklulla to wounds recovers an extra 1d4 per hit dice used during a short rest.`,
    ],
    location: `Grows in stagnant water, usually in terrainTypeNames.swamps.`,
    lore: [
      `Hidden beneath the surface, the plant has an extensive root system that reaches far down into the muck, a massive tangle that catches other debris that is carried along by the slow current. Various species of fish and snakes lay their eggs in the tangle of roots. Orc tribes harvest the Guklulla for the roots, pulling the plants out of the muck, cutting off sections of the roots and throwing them back into the terrainTypeNames.swamp to be harvested again in the future.`,
      `Guklulla is edible, but usually must be cleaned thoroughly before eating because of where it grows.`,
    ],

    terrain: [
      terrainTypeNames.swamp,
    ],

    harvesting: [
      {
        reagentPart: plantParts.spores,
        harvestDC: 17,
        onHarvestFailure: `see effect`,
        recipes: [{
          type: recipeTypes.medecine.applied,
          label: "Guklulla Salve",
          name: 'guklulla-salve',
        }],
        simpleUses: [
          recipeTypes.consumable.edible,
        ],
        value: {
          amount: 5,
          unit: moneyUnits.gp,
        },
      },
    ]
  },
  {
    label: "Rattlestalks",
    name: "rattlestalks",
    type: reagentTypes.plant.reed,

    description: `These tall stalks end in a thick bulb with a hard shell.`,
    effects: [],
    location: `They grow out of stagnant water.`,
    lore: [
      `In the colder months, the stalk withers, and the bulb falls off, to float around until the bulb softens and falls away to disperse the seeds within`,
      `The seeds sit freely in the shell, and when shaken make a slight rattle noise, which is unnerving when the wind rushes through a cluster of rattlestalks`,
      `Tribes that live in the terrainTypeNames.swamps will often use the unnerving aspect of the rattlestalks to create fear-inducing noisemakers.`,
      `Rattlestalks can be used as a rustic instrument, but are not especially durable.`,
    ],

    terrain: [
      terrainTypeNames.swamp,
    ],

    harvesting: [
      {
        reagentPart: plantParts.stalk,
        harvestDC: 5,
        onHarvestFailure: ``,
        recipes: [],
        simpleUses: [
          recipeTypes.item.instrument,
        ],
        value: {
          amount: 1,
          unit: moneyUnits.cp,
          amountOfReagent: "stalk",
        },
      },
    ]
  },
  {
    label: "Wipplecap",
    name: "wipplecap",
    type: reagentTypes.plant.fungus,

    description: `A 1-2 foot tall mushroom. Looks like a rich brown morel.`,
    effects: [
      `If jarred or knocked over, it releases a cloud of poisonous spores (5-10 foot radius). If inhaled, a creature takes 2d6 poison damage. This damage repeats at the start of each of its turns. If not in the poisoned area anymore, a poisoned creature can make a DC13 Constitution saving throw to reduce the damage by 1d6. This resets if the creature inhales any more spores.`,
    ],
    location: `Dry, lightless areas`,
    lore: [
      `Was used as a battlefield poison by the Durukhaaz dwarves to repel the Black Shields when besieged.`,
    ],

    terrain: [
      terrainTypeNames.caves,
    ],

    harvesting: [
      {
        reagentPart: plantParts.spores,
        harvestDC: 17,
        onHarvestFailure: `see effect`,
        recipes: [{
          type: recipeTypes.poison.ingested,
          name: 'Draught of Death',
          label: 'draught-of-death',
        }],
        simpleUses: [
          recipeTypes.poison.inhaled,
        ],
        value: {
          amount: 5,
          unit: moneyUnits.gp,
        },
      },
    ]
  },
  {
    label: "Bone Tree (Amagur)",
    name: "bone-tree",
    type: reagentTypes.plant.tree,

    description: `A tree-sized, white, gnarled, plant. Has no leaves and looks like a dead tree. Very hard and heavy.`,
    effects: [],
    location: `Sunless terrainTypeNames.caves. Thrives on bioluminescence.`,
    lore: [
      `Not good for building since it deteriorates and crumbles when dead.`,
    ],

    terrain: [
      terrainTypeNames.caves,
    ],

    harvesting: [],
  },
  {
    label: "Starflower",
    name: "starflower",
    type: reagentTypes.plant.herbaceous,

    description: `A tiny, thin plant with luminescent, pure white, starlike flowers.`,
    effects: [
      `A creature touching a starflower blossom that is still attached and alive can see the stars, no matter where they are.`,
    ],
    location: `High on dry, rocky walls inside underground terrainTypeNames.caves.`,
    lore: [
      `Valued for use in divination magic. It is said that some ancient culture planted Starflowers in many hidden places in the Underdark as a means of navigation.`,
    ],

    terrain: [
      terrainTypeNames.caves,
    ],

    harvesting: [
      {
        reagentPart: plantParts.flower,
        harvestDC: 7,
        onHarvestFailure: ``,
        recipes: [{
          type: recipeTypes.consumable.potion,
          name: 'Potion of Orientation',
          label: 'potion-of-orientation',
        }],
        simpleUses: [],
        value: {
          amount: 5,
          unit: moneyUnits.gp,
          amountOfReagent: "flower",
        },
      },
    ]
  },
  {
    label: "Silver Dust",
    name: "silver-dust",
    type: reagentTypes.plant.moss,

    description: `A tiny, luminescent moss.`,
    effects: [],
    location: `Grows on rock walls in lightless areas`,
    lore: [
      `Powdered for use as eyeshadow by dark elves for its sparkling, luminescent quality.`,
    ],

    terrain: [
      terrainTypeNames.caves,
    ],
    harvesting: [
      {
        reagentPart: plantParts.whole,
        harvestDC: 3,
        onHarvestFailure: ``,
        recipes: [{
          type: recipeTypes.cosmetic.makeup,
          name: 'Silver Dust Eyeshadow',
          label: 'silver-dust-eyeshadow',
        }],
        simpleUses: [],
        value: {
          amount: 4,
          unit: moneyUnits.sp,
        },
      },
    ]
  },
  {
    label: "Moon Blossom",
    name: "moon-blossom",
    type: reagentTypes.plant.herbaceous,

    description: `A small plant with silvery lobed leaves and pearly white flowers`,
    effects: [
      `A single drop of water is often found in the middle of each blossom, and tastes sweet. If contaminated water is dripped into a flower, it is purified within one hour.`,
    ],
    location: `Grows around water in lightless areas`,
    lore: [
      `Used in purification potions and magic.`,
    ],

    terrain: [
      terrainTypeNames.caves,
    ],
    harvesting: [
      {
        reagentPart: plantParts.flower,
        harvestDC: 3,
        onHarvestFailure: ``,
        recipes: [],
        simpleUses: [],
        value: {
          amount: 1,
          unit: moneyUnits.sp,
        },
      },
    ]
  },
  {
    label: "Silver Lace",
    name: "silver-lace",
    type: reagentTypes.plant.herbaceous,

    description: `A small plant with thin, serrated silver leaves`,
    effects: [],
    location: `Grows around water in lightless areas`,
    lore: [
      ``,
    ],

    terrain: [
      terrainTypeNames.caves,
    ],
    harvesting: []
  },
  {

    label: "Darkhorn",
    name: "darkhorn",
    type: reagentTypes.plant.fungus,
    
    description: `Small tapered tendrils standing upward, the mushroom is quite rigid, and the black exterior makes it difficult to see in the winding caverns of the Underdark. Has a slight musky aroma`,
    effects: [
      `A creature falling on a Darkhorn mushroom takes an additional 1d4 piercing damage from their fall.`,
      `A creature who consumes Darkhorn takes 2d4 piercing damage every hour for 8 hours.`,
    ],
    location: `Grows in lightless areas`,
    lore: [
      `Darkhorn smells wonderfully savory if cooked, but contains sharp fibers that cause internal damage if eaten.`,
      `Dwarves add small chunks of the cap (carefully, so none gets out) to their ale while aging it to add flavor.`,
    ],

    terrain: [
      terrainTypeNames.caves,
    ],
    harvesting: [
      {
        reagentPart: plantParts.cap,
        harvestDC: 8,
        onHarvestFailure: ``,
        recipes: [],
        simpleUses: [
          recipeTypes.poison.ingested,
        ],
        value: {
          amount: 2,
          unit: moneyUnits.sp,
        },
      },
    ]
  },
  {
    label: "Torchstalk",
    name: "torchstalk",
    type: reagentTypes.plant.fungus,
    
    description: `A one- to two-foot-tall mushroom. the stalk is pale orange and the cap is a deeper, mottled orange.`,
    effects: [
      `A torchstalk has a combustible cap and will burn for 24 hours when lit. It has a 1 in 6 change of exploding into fiery spores when lit, causing 1d6 fire damage to any creature within 10 feet.`
    ],
    location: `Grows in areas with very little light.`,
    lore: [
      `Often used as a last resort torch for unprepared or lost travelers in the Underdark.`,
    ],

    terrain: [
      terrainTypeNames.caves,
    ],
    harvesting: [
      {
        reagentPart: plantParts.whole,
        harvestDC: 7,
        onHarvestFailure: ``,
        recipes: [],
        simpleUses: [
          recipeTypes.item.utility,
        ],
        value: {
          amount: 2,
          unit: moneyUnits.sp,
        },
      },
    ]
  },
]