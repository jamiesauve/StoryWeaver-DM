import React from 'react'
import styled from 'styled-components'

import Cost from '../Stats/Cost'
import Damage from '../Stats/Damage'
import Properties from '../Stats/Properties'
import Range from '../Stats/Range'
import Special from '../Stats/Special'

import restructureData from '../SearchResults/dataRestructuring/weapon'
import Weight from '../Stats/Weight'

import DisplayCard from '../styled/DisplayCard'
import DisplayCardRow from '../styled/DisplayCardRow'
import DisplayCardTitle from '../styled/DisplayCardTitle'
import DisplayCardTitleDetail from '../styled/DisplayCardTitleDetail'

const This = styled.div``

const WeaponDisplayCard = (props) => {
  const weaponData = restructureData(props.data)

  const {
    name,
    type,
    cost,
    combatRange,
    damage,
    properties,
    range,
    special,
    weight,
  } = weaponData

  return (
    <This>
      <DisplayCard>
        <DisplayCardRow
          padding="0 0 5px 0"
        >
          <DisplayCardTitle>
            {name}
          </DisplayCardTitle>

          <DisplayCardTitleDetail>
            {type} {combatRange} Weapon
          </DisplayCardTitleDetail>

          <Cost 
            data={cost} 
          />

          <Weight
            data={weight}
          />
        </DisplayCardRow>

        <DisplayCardRow
          justifyContent="space-evenly"
        > 
          <Range
            combatRange={combatRange}
            data={range}
          />
          
          <Damage 
            data={damage}
          />  
        
        </DisplayCardRow>

        <DisplayCardRow
          justifyContent="center"
          padding="0 0 5px 0"
        >
          <Properties
            data={properties}
          />

          {special 
            && <Special
              data={special}
            />
          }
        </DisplayCardRow>
      </DisplayCard>
    </This>
  )
}

export default WeaponDisplayCard