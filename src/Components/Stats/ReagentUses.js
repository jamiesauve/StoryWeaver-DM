import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import BulletList from './BulletList'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;
`

const ReagentUses = (props) => {
  const {
    data: reagentUses,
  } = props

  const getReagentUses = (reagentUses) => {
    if (_.isEmpty(reagentUses)) {
      return ['--']
    }
    
    return _.map(reagentUses, reagentUse => {
      if (reagentUse.type === "ingredient") return `Ingredient in ${reagentUse.creation.label} (${reagentUse.creation.type})`
      if (reagentUse.type === "material") return `Material for making ${reagentUse.creation.label} (${reagentUse.creation.type})`
      if (reagentUse.type === "salve") return `Can be made into a salve called ${reagentUse.creation.label}`
      if (reagentUse.type === "smoked") return `The ${reagentUse.part} be smoked.`
      if (reagentUse.type === "weapon") return `The ${reagentUse.part} can be made into a ${reagentUse.creation.weaponType}. ${reagentUse.creation.damage ? ` Damage: ${reagentUse.creation.damage}` : ``} ${reagentUse.creation.range ? ` Range: ${reagentUse.creation.range}` : ``}`
    })
  }

  return (
    <This
      className="reagentUses"
    >
      <BulletList
        borderColor={props.borderColor}
        items={getReagentUses(reagentUses)}
        heading="Uses"
      />
    </This>
  )
}

export default ReagentUses