import _ from 'lodash'

import createIngredientString from './createReagentStrings/createIngredientString'

const getReagentUses = (reagentUses, reagentType) => {
  if (_.isEmpty(reagentUses)) {
    return ['--']
  }
  
  return _.map(reagentUses, reagentUse => {
    if (reagentType === "plant") {
      if (reagentUse.type === "ingredient") return createIngredientString(reagentUse)
      if (reagentUse.type === "material") return `Material for making ${reagentUse.creation.label} (${reagentUse.creation.type})`
      if (reagentUse.type === "salve") return `Can be made into a salve called ${reagentUse.creation.label}`
      if (reagentUse.type === "weapon") return `The ${reagentUse.partLabel.toLowerCase()} can be made into a ${reagentUse.creation.weaponType}. ${reagentUse.creation.damage ? ` Damage: ${reagentUse.creation.damage}` : ``} ${reagentUse.creation.range ? ` Range: ${reagentUse.creation.range}` : ``}`
      if (reagentUse.type === "smoked") return `The ${reagentUse.partLabel.toLowerCase()} be smoked.`
      if (reagentUse.type === "eaten") return `The ${reagentUse.partLabel.toLowerCase()} be eaten ${reagentUse.creation.type ? ` (${reagentUse.creation.type})` : ``}.`
      if (reagentUse.type === "gear") return `The ${reagentUse.partLabel.toLowerCase()} can be used as gear: ${reagentUse.creation.use}`
    } else {
      if (reagentUse.type === "weapon") return `The ${reagentUse.partLabel.toLowerCase()} can be made into a ${reagentUse.creation.weaponType}. ${reagentUse.creation.damage ? ` Damage: ${reagentUse.creation.damage}` : ``} ${reagentUse.creation.range ? ` Range: ${reagentUse.creation.range}` : ``}`
    }

  })
}

export default getReagentUses