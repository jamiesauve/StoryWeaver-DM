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
        label: "Blackroot",
        name: "blackroot" // maps to reagent.name
        // amount: defaults to 1oz
      },
      {
        label: "mammal blood",
        // amount: default to 1oz
      }
    ],
    instructions: "Grind blackroot root into powder and distill in mammal blood for six weeks.",
    // amountCreated: defaults to 1oz
    value: {
      amount: 50,
      unit: moneyUnits.gp,
    },
  },
]

export default recipes