// default amount required of each ingredient is 1oz; default yield is also 1oz (enough to fill a small vial, usually one dose).

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
    creationTime: "1 hour",
    creationDC: 15,
    creationFail: "see effect",
    distillingTime: "6 weeks",
    // amountCreated: defaults to 1oz
    creationType: "poison",
    description: "A thick, dark liquid",
    effect: "Injury: The target is paralyzed for 1d6 turns and take 1d6 poison damage each turn. At the end of each turn, the target can make a DC16 CON save to end this effect on itself.",
    value: "50GP"
  }
]

export default recipes