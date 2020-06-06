const createIngredientString = (ingredientData) => {


  return `${ingredientData.partLabel} (Harvest DC${ingredientData.harvestDC || 2}): Ingredient in ${ingredientData.creation.label} (${ingredientData.creation.type || ``}).`
}

export default createIngredientString;


// {
//   type: 'ingredient',
//   partLabel: 'Root',
//   partName: 'root',
//   harvestDC: 13,
//   creation: {
//     type: 'poison',
//     name: 'blackroot-poison',
//     label: 'Blackroot Poison',
//   },
// },