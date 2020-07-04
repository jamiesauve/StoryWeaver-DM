const createRecipeData = {
  label: "Recipe name",
  name: "",
  type: "Select recipe type...",

  creationDC: null,
  onCreateFail: "What happens to a creature if they make a big mistake while creating it?",
  creationTime: "How much time does it take a creature to make this?",
  distillingTime: "How long does it need to sit before being used?",

  description: "What does the finished product look like, smell like, feel like?",
  effects: "What does this creation do? Ie. 'This sword does 1d6 fire damage', or 'this potion makes the drinker float a few inches off the ground for 1d6 days'",
  lore: "Are there any interesting facts about this creation?",
  ingredients: {
      label: "Name of ingredient",
      name: "",
      amount: "1 ounce",
    },
  instructions: "How does a creature use the ingredients to make this creation?",
  amountCreated: "1 ounce",
  value: {
    amount: null,
    unit: null,
    amountCreated: null,
  },
}

export default createRecipeData