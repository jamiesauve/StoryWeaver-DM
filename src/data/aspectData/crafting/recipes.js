// default amount required of each ingredient is 1oz; default yield is also 1oz (enough to fill a small vial, usually one dose).

import recipeTypes from "./recipeTypes"
import moneyUnits from "../../generalData/moneyUnits"

/**
 * creation types:
  *   medicine, 
  *   gear, 
  *   item, 
  *   consumable, 
  *   cosmetic, 
  *   poison,
  *   powder,
  *   other
 */

const recipes = [
  {
    label: "Blackroot Poison",
    name: "blackroot-poison",
    type: recipeTypes.poison.wound,

    creationDC: 15,
    onCreateFail: "see effect",
    creationTime: "1 hour",
    distillingTime: "6 weeks",

    description: "A thick, dark, foul-smelling liquid",
    effects: [
      "On injury: The target is paralyzed for 1d6 turns and take 1d6 poison damage each turn. At the end of each turn, the target can make a DC16 CON save to end this effect on itself."
    ],
    lore: [],
    ingredients: [
      {
        label: ";;;Blackroot%%%blackroot%%%reagents;;;",
        name: "blackroot", // maps to reagent.name
        amount: null,
      },
      {
        label: "mammal blood",
        amount: null, // defaults to 1oz
      }
    ],
    instructions: "Grind blackroot root into powder and distill in mammal blood for six weeks.",
    recipeYield: null, // defaults to 1oz
    value: {
      amount: 50,
      unit: moneyUnits.gp,
    },
  },
  // potion-of-orientation
  // silver-dust-eyeshadow
  // draught-of-death
  // guklulla-salve
  // bloodpurge-tincture
  // blackcorn-whiskey
]

export default recipes