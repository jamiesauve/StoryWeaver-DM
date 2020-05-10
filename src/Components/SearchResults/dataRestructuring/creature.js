import _ from 'lodash'

import abilityScores from '../../../data/abilityScores'

import getModifierFromAbilityScore from '../../../utils/getModifierFromAbilityScore'
import toCapitalCase from '../../../utils/toCapitalCase'

export default (data) => {
  const restructuredData = {
    name: data.index, // wyvern
    label: data.name, // Wyvern

    abilityScores: {
      strength: {
        score: data.strength, // 19
        modifier: getModifierFromAbilityScore(data.strength), // 4
      },
      dexterity: {
        score: data.dexterity, // 19
        modifier: getModifierFromAbilityScore(data.dexterity), // 4
      },
      constitution: {
        score: data.constitution, // 19
        modifier: getModifierFromAbilityScore(data.constitution), // 4
      },
      intelligence: {
        score: data.intelligence, // 19
        modifier: getModifierFromAbilityScore(data.intelligence), // 4
      },
      wisdom: {
        score: data.wisdom, // 19
        modifier: getModifierFromAbilityScore(data.wisdom), // 4
      },
      charisma: {
        score: data.charisma, // 19
        modifier: getModifierFromAbilityScore(data.charisma), // 4
      },
    },
    actions: _.map(data.actions, action => ({
      name: action.name,
      description: action.desc, // TODO: parse this string out and handle in UI
      bonusToHit: action.attack_bonus || null,
    })),
    alignment: data.alignment, // unaligned
    armorClass: data.armor_class, // 13
    challengeRating: data.challenge_rating, // 6
    damageImmunities: data.damage_immunities, // ["lightning"]
    damageResistances: data.damage_resistances,
    damageVulnerabilities: data.damage_vulnerabilities,
    hitPoints: data.hit_points, // 110
    languages: data.languages.toLowerCase().split(", "), // ["Common", "Elvish"], // check this
    passivePerception: data.senses["passive_perception"],
    // {
    //   name: "Perception",
    //   type: "skill",
    //   value: 4,
    // }
    // {
    //   name: "DEX",
    //   type: "Saving Throw",
    //   value: 4,
    // }
    proficiencies: _.map(data.proficiencies, proficiency => {
      const [type, name] = proficiency.name.split(": ")

      /// TODO: if type is "Saving Throw", convert name

      return {
        name : type === "Saving Throw" ? _.find(abilityScores, { shortName: name, }).fullName : name.toLowerCase(),
        shortForm: type === "Saving Throw" ? name : null, // only for ability scores
        type: type.toLowerCase(),
        value: proficiency.value,
      }
    }),
    senses: _.chain(data.senses)
      .map((senseData, senseName) => { // check this too
        if (senseName === "passive_perception") return null;

        const plainTextSenseName = senseName.includes("_") 
          ? _.chain(senseName)
            .split("_")
            .map(word => toCapitalCase(word))
            .join(" ")
            .value()
          : senseName

        if (typeof senseData === "string") {
          const [value, unit] = senseData
            .substring(0, senseData.length - 1)
            .split(" ")

            return {
              name: plainTextSenseName,
              value: parseInt(value),
              unit,
            }
        } else if (typeof senseData === "number") {
          return {
            name: plainTextSenseName,
            value: senseData,
            unit: null,
          }
        }
      })
      .compact()
      .value()
      ,
    size: data.size.toLowerCase(), // large
    speed: _.map(data.speed, (travelMethod, travelMethodName) => {
      const [value, unit] = travelMethod
        .substring(0, travelMethod.length - 1)
        .split(" ")

      return {
        name: travelMethodName,
        value: parseInt(value),
        unit,
      }
    }), // { walk: "20 ft.", fly: "80ft."}
    specialAbilities: _.map(
      _.get(data, 'special_abilities', []),
      specialAbility => ({
        name: specialAbility.name,
        description: specialAbility.desc,
        usage: specialAbility.usage || null,
      })
    ),
    spellDC: _.get(data, 'special_abilities[0].spellcasting.dc', null), // TODO: Build out support for spellcasting properly
    subType: data.subType || null, // ?
    type: data.type, // dragon
  }

  return restructuredData
}