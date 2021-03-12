const createRecipeData = {
  label: "Recipe name",
  name: "",
  type: "Select recipe type...",

  creationDC: 10,
  onCreateFail: "Potion becomes a mild poison, causing 1d4 damage when drunk with no noticeable change",
  creationTime: "4 hours",
  distillingTime: "3 days",

  description: "A bubbly, pink liquid that smells like cinnamon",
  effects: "When drunk, this potion makes the drinker float a few inches off the ground for 1d4 hours",
  lore: "Occasionally used by nobles in Runaz as a prank at dinner parties",
  ingredients: {
      label: "Name of ingredient",
      name: "",
      amount: "1 ounce",
    },
  instructions: "Stir all three ingredients in a silver pan and distill in a cool, dark place",
  recipeYield: "1 ounce",
  value: {
    amount: null,
    unit: null,
  },
}

export default createRecipeData