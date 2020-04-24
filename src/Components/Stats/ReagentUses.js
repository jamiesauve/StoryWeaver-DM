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
    return _.map(reagentUses, reagentUse => {
      if (reagentUse.type === "ingredient") return `Ingredient in ${reagentUse.creation.label} (${reagentUse.creation.type})`
    })
  }

  return (
    <This
      className="reagentUses"
    >
      <BulletList
        color="#abc"
        items={getReagentUses(reagentUses)}
        heading="Uses"
      />
    </This>
  )
}

export default ReagentUses