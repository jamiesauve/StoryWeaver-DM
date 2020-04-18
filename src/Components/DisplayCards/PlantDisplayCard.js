import React from 'react'
import styled from 'styled-components'

import DisplayCard from '../styled/DisplayCard'
import DisplayCardRow from '../styled/DisplayCardRow'
import DisplayCardTitle from '../styled/DisplayCardTitle'
import DisplayCardTitleDetail from '../styled/DisplayCardTitleDetail'

const This = styled.div``

const PlantDisplayCard = (props) => {
  const {
    data: plant,
  } = props
  
  return (
    <This>
      <DisplayCard>
        <DisplayCardRow>
          <DisplayCardTitle>
            {plant.label}
          </DisplayCardTitle>

          <DisplayCardTitleDetail>

          </DisplayCardTitleDetail>
        </DisplayCardRow>
      </DisplayCard>
    </This>
  )
}

export default PlantDisplayCard