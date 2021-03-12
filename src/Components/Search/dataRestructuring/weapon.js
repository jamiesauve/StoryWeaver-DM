import _ from 'lodash'

export default (data) => {
  const restructuredData = {
    name: data.index, // spear
    label: data.name, // Spear
    type: data.weapon_category, // simple
    combatRange: data.weapon_range, // melee

    cost: {
      amount: data.cost.quantity,
      unit: data.cost.unit,
    },

    damage: {
      base: data.name === "Spear" ? "1d6" : data.damage.damage_dice, // 1d6
      type: data.damage.damage_type.name, // piercing
      twoHanded: data['2h_damage']
        ? {
          base: data['2h_damage'].damage_dice,
          type: data['2h_damage'].damage_type.name,
        }
        : null
      
    },

    properties: _.map(data.properties, property => property.name) || [],

    range: {
      melee: data.weapon_range === "Melee"
        ? data.range.normal // melee used for melee
        : null, // ranged used for melee
      ranged: data.weapon_range === "Ranged"
        ? {
          normal: data.range.normal, // ranged used for ranged
          long: data.range.long,
        }
        : data.throw_range // melee used for ranged (thrown)
          ? {
            normal: data.throw_range.normal,
            long: data.throw_range.long,
          }
          : { // melee used for ranged (improvised thrown weapon)
            normal: 20,
            long: 60,
          },
      isThrowing: Boolean(data.throw_range),
    },

    special: data.special || [],

    weight: data.weight || 0, // 3


  }

  return restructuredData
}